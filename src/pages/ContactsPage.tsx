function ContactsPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-bold mb-8">Контакты</h1>

					<div className="bg-white rounded-xl shadow-md p-8 space-y-8">
						<div>
							<h2 className="text-2xl font-bold mb-4">Наши офисы</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-2">Москва</h3>
									<div className="space-y-2">
										<p className="flex items-center">
											<span className="w-5">📍</span>
											ул. Пушкина, д. 1
										</p>
										<p className="flex items-center">
											<span className="w-5">📞</span>
											+7 (999) 123-45-67
										</p>
										<p className="flex items-center">
											<span className="w-5">📧</span>
											moscow@pethelper.ru
										</p>
									</div>
								</div>

								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-2">
										Санкт-Петербург
									</h3>
									<div className="space-y-2">
										<p className="flex items-center">
											<span className="w-5">📍</span>
											Невский пр., д. 100
										</p>
										<p className="flex items-center">
											<span className="w-5">📞</span>
											+7 (999) 765-43-21
										</p>
										<p className="flex items-center">
											<span className="w-5">📧</span>
											spb@pethelper.ru
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
							<form className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Ваше имя
									</label>
									<input
										type="text"
										id="name"
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
										placeholder="Введите ваше имя"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
										placeholder="Введите ваш email"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Сообщение
									</label>
									<textarea
										id="message"
										rows={4}
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
										placeholder="Введите ваше сообщение"
									/>
								</div>

								<button
									type="submit"
									className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
								>
									Отправить
								</button>
							</form>
						</div>

						<div>
							<h2 className="text-2xl font-bold mb-4">Часы работы</h2>
							<div className="bg-gray-50 p-6 rounded-lg">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<h3 className="font-semibold mb-2">Будние дни</h3>
										<p>09:00 - 20:00</p>
									</div>
									<div>
										<h3 className="font-semibold mb-2">Выходные</h3>
										<p>10:00 - 18:00</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactsPage;
