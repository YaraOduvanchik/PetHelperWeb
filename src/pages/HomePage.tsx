function HomePage() {
	const news = [
		{
			id: 1,
			title: "Новая ветеринарная клиника",
			content:
				"В центре города открылась новая современная ветеринарная клиника с новейшим оборудованием",
			image: "images/vetclinica.jpg",
			date: "10 мая 2025",
		},
		{
			id: 2,
			title: "Акция на вакцинацию",
			content:
				"До конца месяца действует скидка 20% на все виды вакцинации для кошек и собак",
			image: "images/vaccination.jpg",
			date: "9 мая 2025",
		},
	];

	const appointments = [
		{
			id: 1,
			date: "15 мая 2025",
			time: "10:00",
			vet: "Доктор Айболит",
			type: "Плановый осмотр",
			pet: "Барсик",
		},
		{
			id: 2,
			date: "20 мая 2025",
			time: "15:30",
			vet: "Доктор Зоомед",
			type: "Вакцинация",
			pet: "Шарик",
		},
	];

	const vaccinations = [
		{
			id: 1,
			date: "18 мая 2025",
			pet: "Барсик",
			type: "Ежегодная прививка",
			status: "Ожидается",
		},
		{
			id: 2,
			date: "1 июня 2025",
			pet: "Мурка",
			type: "Бешенство",
			status: "Запланировано",
		},
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<section className="lg:col-span-2">
				<h2 className="text-2xl font-bold mb-4">Новости</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{news.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-600 mb-2">{item.content}</p>
								<p className="text-sm text-gray-500">{item.date}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-4">Ближайшие записи</h2>
				<div className="bg-white rounded-lg shadow-md">
					{appointments.map((item) => (
						<div key={item.id} className="p-4 border-b last:border-b-0">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-lg">{item.type}</p>
									<p className="text-gray-600">Питомец: {item.pet}</p>
									<p className="text-gray-600">Врач: {item.vet}</p>
								</div>
								<div className="text-right">
									<p className="font-medium text-blue-600">{item.date}</p>
									<p className="text-sm text-gray-500">{item.time}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-4">Вакцинации</h2>
				<div className="bg-white rounded-lg shadow-md">
					{vaccinations.map((item) => (
						<div key={item.id} className="p-4 border-b last:border-b-0">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-lg">{item.pet}</p>
									<p className="text-gray-600">{item.type}</p>
									<span className="inline-block px-2 py-1 mt-2 text-sm rounded-full bg-yellow-100 text-yellow-800">
										{item.status}
									</span>
								</div>
								<p className="font-medium text-blue-600">{item.date}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default HomePage;
