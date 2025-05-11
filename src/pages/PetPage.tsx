import { useParams } from "react-router-dom";

function PetPage() {
	const { id } = useParams();

	const pet = {
		id,
		name: "Барсик",
		type: "Кот",
		breed: "Сиамский",
		weight: "4 кг",
		age: "2 года",
		gender: "Мужской",
		color: "Белый с серым",
		birthDate: "2023-05-15",
		chipNumber: "123456789",
		photos: [
			"/images/cat1.jpg",
			"/images/cat2.jpg",
			"/images/cat3.jpg",
			"/images/cat4.jpg",
		],
		medicalHistory: [
			{
				date: "2025-04-15",
				type: "Осмотр",
				description: "Плановый осмотр, все хорошо",
				vet: "Доктор Айболит",
			},
			{
				date: "2025-03-01",
				type: "Вакцинация",
				description: "Ежегодная прививка",
				vet: "Доктор Зоомед",
			},
		],
		upcomingEvents: [
			{
				date: "2025-05-20",
				type: "Вакцинация",
				description: "Плановая вакцинация",
			},
			{
				date: "2025-06-01",
				type: "Осмотр",
				description: "Регулярный осмотр",
			},
		],
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<div className="lg:col-span-1">
				<div className="bg-white rounded-lg shadow-md p-6">
					<img
						src={pet.photos[0]}
						alt={pet.name}
						className="w-full h-64 object-cover rounded-lg mb-6"
					/>
					<h1 className="text-2xl font-bold mb-4">{pet.name}</h1>
					<div className="space-y-3">
						<div className="flex justify-between">
							<span className="text-gray-600">Тип:</span>
							<span className="font-medium">{pet.type}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Порода:</span>
							<span className="font-medium">{pet.breed}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Вес:</span>
							<span className="font-medium">{pet.weight}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Возраст:</span>
							<span className="font-medium">{pet.age}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Пол:</span>
							<span className="font-medium">{pet.gender}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Окрас:</span>
							<span className="font-medium">{pet.color}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Дата рождения:</span>
							<span className="font-medium">{pet.birthDate}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Номер чипа:</span>
							<span className="font-medium">{pet.chipNumber}</span>
						</div>
					</div>
				</div>
			</div>

			<div className="lg:col-span-2 space-y-6">
				<section>
					<h2 className="text-xl font-bold mb-4">Галерея</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{pet.photos.map((photo, index) => (
							<img
								key={index}
								src={photo}
								alt={`Фото ${index + 1}`}
								className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xl font-bold mb-4">История посещений</h2>
					<div className="bg-white rounded-lg shadow-md">
						{pet.medicalHistory.map((visit, index) => (
							<div key={index} className="p-4 border-b last:border-b-0">
								<div className="flex justify-between items-start">
									<div>
										<p className="font-semibold">{visit.type}</p>
										<p className="text-gray-600">{visit.description}</p>
										<p className="text-sm text-gray-500">Врач: {visit.vet}</p>
									</div>
									<p className="text-blue-600">{visit.date}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xl font-bold mb-4">Предстоящие события</h2>
					<div className="bg-white rounded-lg shadow-md">
						{pet.upcomingEvents.map((event, index) => (
							<div key={index} className="p-4 border-b last:border-b-0">
								<div className="flex justify-between items-start">
									<div>
										<p className="font-semibold">{event.type}</p>
										<p className="text-gray-600">{event.description}</p>
									</div>
									<p className="text-blue-600">{event.date}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default PetPage;
