import { useNavigate } from "react-router-dom";

function ProfilePage() {
	const navigate = useNavigate();
	const user = {
		photo: "/images/profile.jpg",
		nickname: "PetLover123",
		fullName: "Иван Иванов",
		birthDate: "1990-01-01",
		email: "ivan@example.com",
		phone: "+7 (999) 123-45-67",
		address: "г. Москва, ул. Пушкина, д. 1",
		joinDate: "2024-01-01",
	};

	const pets = [
		{
			id: 1,
			name: "Барсик",
			type: "Кот",
			breed: "Сиамский",
			age: "2 года",
			photo: "/images/cat1.jpg",
			lastCheckup: "2025-04-15",
		},
		{
			id: 2,
			name: "Шарик",
			type: "Собака",
			breed: "Лабрадор",
			age: "3 года",
			photo: "/images/dog.jpg",
			lastCheckup: "2025-04-20",
		},
	];

	const handlePetClick = (petId: number) => {
		navigate(`/pet/${petId}`);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<div className="lg:col-span-1">
				<div className="bg-white rounded-lg shadow-md p-6">
					<div className="text-center mb-6">
						<img
							src={user.photo}
							alt={user.fullName}
							className="w-32 h-32 rounded-full mx-auto mb-4"
						/>
						<h1 className="text-2xl font-bold">{user.fullName}</h1>
						<p className="text-gray-600">@{user.nickname}</p>
					</div>

					<div className="space-y-4">
						<div>
							<p className="text-sm text-gray-500">Email</p>
							<p className="font-medium">{user.email}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Телефон</p>
							<p className="font-medium">{user.phone}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Адрес</p>
							<p className="font-medium">{user.address}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Дата рождения</p>
							<p className="font-medium">{user.birthDate}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">На сайте с</p>
							<p className="font-medium">{user.joinDate}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="lg:col-span-2">
				<h2 className="text-2xl font-bold mb-4">Мои питомцы</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{pets.map((pet) => (
						<div
							key={pet.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
							onClick={() => handlePetClick(pet.id)}
						>
							<img
								src={pet.photo}
								alt={pet.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
								<div className="space-y-2">
									<p className="text-gray-600">
										<span className="font-medium">Тип:</span> {pet.type}
									</p>
									<p className="text-gray-600">
										<span className="font-medium">Порода:</span> {pet.breed}
									</p>
									<p className="text-gray-600">
										<span className="font-medium">Возраст:</span> {pet.age}
									</p>
									<p className="text-gray-600">
										<span className="font-medium">Последний осмотр:</span>{" "}
										{pet.lastCheckup}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
