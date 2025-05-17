import { Map, Overlay } from "pigeon-maps";
import { useState } from "react";

type Clinic = {
	id: number;
	name: string;
	position: [number, number];
	address: string;
	rating: number;
	workingHours: string;
	phone: string;
	services: string[];
};

const CustomMarker = ({
	color,
	isSelected,
	onClick,
}: {
	color: string;
	isSelected: boolean;
	onClick: () => void;
}) => {
	return (
		<div
			onClick={onClick}
			style={{
				cursor: "pointer",
				width: "24px",
				height: "24px",
			}}
		>
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke={color}
				strokeWidth="2"
				fill={isSelected ? color : "white"}
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					transform: isSelected ? "scale(1.2)" : "scale(1)",
					transition: "transform 0.2s",
				}}
			>
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
				<circle cx="12" cy="10" r="3"></circle>
			</svg>
		</div>
	);
};

function MapPage() {
	const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
	const [center, setCenter] = useState<[number, number]>([55.751244, 37.618423]);
	const [zoom, setZoom] = useState(12);

	const clinics: Clinic[] = [
		{
			id: 1,
			name: "Клиника Айболит",
			position: [55.751244, 37.618423],
			address: "ул. Пушкина, д. 1",
			rating: 4.8,
			workingHours: "Пн-Вс: 09:00-21:00",
			phone: "+7 (999) 123-45-67",
			services: ["Терапия", "Хирургия", "Вакцинация", "УЗИ"],
		},
		{
			id: 2,
			name: "Зоомед",
			position: [55.761244, 37.628423],
			address: "ул. Лермонтова, д. 2",
			rating: 4.6,
			workingHours: "Пн-Сб: 10:00-20:00",
			phone: "+7 (999) 765-43-21",
			services: ["Терапия", "Стоматология", "Дерматология"],
		},
		{
			id: 3,
			name: "ВетЭксперт",
			position: [55.755814, 37.617635],
			address: "пр. Мира, д. 10",
			rating: 4.9,
			workingHours: "Пн-Вс: 00:00-24:00",
			phone: "+7 (999) 111-22-33",
			services: ["Терапия", "Хирургия", "Реанимация", "МРТ"],
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`text-lg ${
					index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
				}`}
			>
				★
			</span>
		));
	};

	const handleClinicClick = (clinicId: number) => {
		setSelectedClinic(clinicId);
		const clinic = clinics.find((c) => c.id === clinicId);
		if (clinic) {
			setCenter(clinic.position);
			setZoom(15);
		}
		const element = document.getElementById(`clinic-${clinicId}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Кастомный провайдер тайлов карты (используем Carto вместо OpenStreetMap)
	const mapTiler = (x: number, y: number, z: number) => {
		return `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png`
			.replace("{s}", "abcd"[Math.random() * 4 | 0])
			.replace("{z}", z.toString())
			.replace("{x}", x.toString())
			.replace("{y}", y.toString());
	};

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto p-6">
				<h1 className="text-2xl font-bold mb-4">Карта ветеринарных клиник</h1>

				{/* Карта */}
				<div className="bg-white p-4 shadow rounded-lg mb-6">
					<Map
						height={500}
						center={center}
						zoom={zoom}
						onBoundsChanged={({ center, zoom }) => {
							setCenter(center);
							setZoom(zoom);
						}}
						provider={mapTiler}
					>
						{clinics.map((clinic) => (
							<Overlay
								key={clinic.id}
								anchor={clinic.position}
								offset={[12, 24]}
							>
								<CustomMarker
									onClick={() => handleClinicClick(clinic.id)}
									color={selectedClinic === clinic.id ? "#2563eb" : "#ef4444"}
									isSelected={selectedClinic === clinic.id}
								/>
							</Overlay>
						))}
					</Map>
				</div>

				{/* Список клиник */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{clinics.map((clinic) => (
						<div
							key={clinic.id}
							id={`clinic-${clinic.id}`}
							className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg transform hover:-translate-y-1 ${
								selectedClinic === clinic.id ? "ring-2 ring-blue-500" : ""
							}`}
							onClick={() => handleClinicClick(clinic.id)}
						>
							<div className="p-6">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-semibold">{clinic.name}</h3>
									<div className="flex">{renderStars(clinic.rating)}</div>
								</div>
								<div className="space-y-2 text-gray-600">
									<p className="flex items-center">
										<span className="w-4 h-4 mr-2">📍</span>
										{clinic.address}
									</p>
									<p className="flex items-center">
										<span className="w-4 h-4 mr-2">🕒</span>
										{clinic.workingHours}
									</p>
									<p className="flex items-center">
										<span className="w-4 h-4 mr-2">📞</span>
										{clinic.phone}
									</p>
								</div>
								<div className="mt-4">
									<p className="font-medium mb-2">Услуги:</p>
									<div className="flex flex-wrap gap-2">
										{clinic.services.map((service, index) => (
											<span
												key={index}
												className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
											>
												{service}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MapPage;
