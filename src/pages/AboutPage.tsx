function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-bold mb-8">О нас</h1>

					<div className="bg-white rounded-xl shadow-md overflow-hidden">
						<div className="relative h-64">
							<img
								src="https://via.placeholder.com/1200x400"
								alt="Pet Helper Team"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
								<div className="p-6 text-white">
									<h2 className="text-2xl font-bold">Pet Helper</h2>
									<p className="text-lg">
										Забота о ваших питомцах - наш приоритет
									</p>
								</div>
							</div>
						</div>

						<div className="p-6 space-y-6">
							<div>
								<h3 className="text-xl font-semibold mb-3">Наша миссия</h3>
								<p className="text-gray-600">
									Мы стремимся сделать заботу о домашних животных простой и
									доступной для каждого владельца. Наша платформа объединяет
									владельцев питомцев с лучшими ветеринарными специалистами и
									клиниками.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-3">
									Что мы предлагаем
								</h3>
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<li className="flex items-start space-x-3">
										<span className="text-2xl">🏥</span>
										<div>
											<h4 className="font-medium">Поиск клиник</h4>
											<p className="text-sm text-gray-600">
												Удобный поиск ветеринарных клиник рядом с вами
											</p>
										</div>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-2xl">👨‍⚕️</span>
										<div>
											<h4 className="font-medium">Онлайн консультации</h4>
											<p className="text-sm text-gray-600">
												Быстрая связь с ветеринарами через чат
											</p>
										</div>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-2xl">📅</span>
										<div>
											<h4 className="font-medium">Управление записями</h4>
											<p className="text-sm text-gray-600">
												Удобное планирование визитов и вакцинаций
											</p>
										</div>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-2xl">📱</span>
										<div>
											<h4 className="font-medium">Личный кабинет</h4>
											<p className="text-sm text-gray-600">
												Вся информация о ваших питомцах в одном месте
											</p>
										</div>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-3">Наша команда</h3>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{[
										{ name: "Дмитрий Луценко", role: "Основатель" },
										{
											name: "Черашев Николай",
											role: "Глава отдела разработки",
										},
										{
											name: "Никита Шишов",
											role: "Глава отдела аналитики и маркетинга",
										},
									].map((member) => (
										<div key={member.name} className="text-center">
											<div className="w-24 h-24 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
												<span className="text-3xl">👤</span>
											</div>
											<h4 className="font-medium">{member.name}</h4>
											<p className="text-sm text-gray-600">{member.role}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
