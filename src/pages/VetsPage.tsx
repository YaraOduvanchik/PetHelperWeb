import { useNavigate } from "react-router-dom";

function VetsPage() {
	const navigate = useNavigate();

	const vets = [
		{
			id: 1,
			name: "Доктор Айболит",
			status: "Свободен",
			specialization: "Терапевт",
			experience: "10 лет",
			rating: 4.8,
			photo: "images/vet1.jpg",
			lastOnline: "5 минут назад",
		},
		{
			id: 2,
			name: "Доктор Зоомед",
			status: "Занят",
			specialization: "Хирург",
			experience: "15 лет",
			rating: 4.9,
			photo: "images/vet2.jpg",
			lastOnline: "Онлайн",
		},
		{
			id: 3,
			name: "Доктор Петров",
			status: "Свободен",
			specialization: "Стоматолог",
			experience: "8 лет",
			rating: 4.7,
			photo: "images/vet3.jpg",
			lastOnline: "2 часа назад",
		},
	];

	const handleChatClick = (vetId: number) => {
		navigate(`/chat/${vetId}`);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{vets.map((vet) => (
				<div
					key={vet.id}
					className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
				>
					<div className="relative">
						<img
							src={vet.photo}
							alt={vet.name}
							className="w-full h-48 object-cover"
						/>
						<div
							className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
								vet.status === "Свободен"
									? "bg-green-100 text-green-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							{vet.status}
						</div>
					</div>

					<div className="p-6">
						<h3 className="text-xl font-semibold text-gray-800">{vet.name}</h3>
						<p className="text-gray-600 mt-2">{vet.specialization}</p>
						<div className="mt-4 space-y-2">
							<p className="text-sm text-gray-500">
								<span className="font-medium">Опыт:</span> {vet.experience}
							</p>
							<p className="text-sm text-gray-500">
								<span className="font-medium">Рейтинг:</span> {vet.rating}
							</p>
							<p className="text-sm text-gray-500">
								<span className="font-medium">Был(а):</span> {vet.lastOnline}
							</p>
						</div>

						<button
							onClick={() => handleChatClick(vet.id)}
							className={`mt-6 w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
								vet.status === "Свободен"
									? "bg-blue-500 text-white hover:bg-blue-600"
									: "bg-gray-100 text-gray-400 cursor-not-allowed"
							}`}
							disabled={vet.status !== "Свободен"}
						>
							{vet.status === "Свободен" ? "Начать чат" : "Врач занят"}
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default VetsPage;
