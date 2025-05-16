import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
	AttributionControl,
	MapContainer,
	Marker,
	Popup,
	TileLayer,
} from "react-leaflet";

// Исправляем проблему с иконками маркеров
const defaultIcon = L.icon({
	iconUrl: "/images/markers/marker-icon.png",
	iconRetinaUrl: "/images/markers/marker-icon-2x.png",
	shadowUrl: "/images/markers/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

type Clinic = {
	id: number;
	name: string;
	position: LatLngExpression;
	address: string;
	rating: number;
	workingHours: string;
	phone: string;
	services: string[];
};

function MapPage() {
	const [selectedClinic, setSelectedClinic] = useState<number | null>(null);

	const clinics: Clinic[] = [
		{
			id: 1,
			name: "Клиника Айболит",
			position: [55.751244, 37.618423] as LatLngExpression,
			address: "ул. Пушкина, д. 1",
			rating: 4.8,
			workingHours: "Пн-Вс: 09:00-21:00",
			phone: "+7 (999) 123-45-67",
			services: ["Терапия", "Хирургия", "Вакцинация", "УЗИ"],
		},
		{
			id: 2,
			name: "Зоомед",
			position: [55.761244, 37.628423] as LatLngExpression,
			address: "ул. Лермонтова, д. 2",
			rating: 4.6,
			workingHours: "Пн-Сб: 10:00-20:00",
			phone: "+7 (999) 765-43-21",
			services: ["Терапия", "Стоматология", "Дерматология"],
		},
		{
			id: 3,
			name: "ВетЭксперт",
			position: [55.755814, 37.617635] as LatLngExpression,
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
		// Найти элемент в списке и прокрутить к нему
		const element = document.getElementById(`clinic-${clinicId}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto p-6">
				<h1 className="text-2xl font-bold mb-4">Карта ветеринарных клиник</h1>

				{/* Карта */}
				<div className="bg-white p-4 shadow rounded-lg mb-6">
					{" "}
					<MapContainer
						center={[55.751244, 37.618423] as LatLngExpression}
						zoom={12}
						style={{ height: "500px", width: "100%" }}
						attributionControl={false}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<AttributionControl position="topleft" />
						{clinics.map((clinic) => (
							<Marker
								key={clinic.id}
								position={clinic.position}
								eventHandlers={{
									click: () => handleClinicClick(clinic.id),
								}}
							>
								<Popup>
									<div className="font-semibold">{clinic.name}</div>
									<div className="text-sm">{clinic.address}</div>
								</Popup>
							</Marker>
						))}
					</MapContainer>
				</div>

				{/* Список клиник */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{clinics.map((clinic) => (
						<div
							key={clinic.id}
							id={`clinic-${clinic.id}`}
							className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
								selectedClinic === clinic.id ? "ring-2 ring-blue-500" : ""
							}`}
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
