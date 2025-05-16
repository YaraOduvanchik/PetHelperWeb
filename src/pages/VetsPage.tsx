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
					className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6"
				>
					<div className="flex items-start gap-4 mb-4">
						<div className="flex-shrink-0">
							<div className="relative">
								<img
									src={vet.photo}
									alt={vet.name}
									className="w-24 h-24 rounded-full object-cover border-2 border-gray-100 shadow-md"
								/>
								<div
									className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
										vet.status === "Свободен"
											? "bg-green-100 text-green-800 border border-green-200"
											: "bg-red-100 text-red-800 border border-red-200"
									}`}
								>
									{vet.status}
								</div>
							</div>
						</div>
						<div className="flex-grow">
							<h3 className="text-xl font-semibold text-gray-800">
								{vet.name}
							</h3>
							<p className="text-gray-600">{vet.specialization}</p>
							<div className="flex items-center mt-2">
								<span className="text-yellow-400 text-lg mr-1">★</span>
								<span className="font-medium">{vet.rating}</span>
							</div>
						</div>
					</div>

					<div className="space-y-2 mb-4">
						<p className="text-sm text-gray-500 flex items-center">
							<span className="w-5 text-gray-400">⌛</span>
							<span className="font-medium">Опыт:</span> {vet.experience}
						</p>
						<p className="text-sm text-gray-500 flex items-center">
							<span className="w-5 text-gray-400">⏱️</span>
							<span>{vet.lastOnline}</span>
						</p>
					</div>

					<button
						onClick={() => handleChatClick(vet.id)}
						className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
							vet.status === "Свободен"
								? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md"
								: "bg-gray-100 text-gray-400 cursor-not-allowed"
						}`}
						disabled={vet.status !== "Свободен"}
					>
						{vet.status === "Свободен" ? "Начать чат" : "Врач занят"}
					</button>
				</div>
			))}
		</div>
	);
}

export default VetsPage;
