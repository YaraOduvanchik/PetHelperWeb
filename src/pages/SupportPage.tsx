function SupportPage() {
	return (
		<div className="bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-bold mb-8">Поддержка</h1>

					<div className="bg-white rounded-xl shadow-md p-8 space-y-8">
						<section>
							<h2 className="text-2xl font-bold mb-4">Частые вопросы</h2>
							<div className="space-y-4">
								{[
									{
										question: "Как записаться к ветеринару?",
										answer:
											"Вы можете записаться к ветеринару через раздел 'Календарь' или на странице конкретного врача в разделе 'Ветеринары'.",
									},
									{
										question: "Как добавить питомца в профиль?",
										answer:
											"Перейдите в раздел 'Профиль' и нажмите кнопку 'Добавить питомца'. Заполните необходимую информацию о вашем питомце.",
									},
									{
										question: "Как начать чат с ветеринаром?",
										answer:
											"В разделе 'Ветеринары' выберите специалиста со статусом 'Свободен' и нажмите кнопку 'Начать чат'.",
									},
								].map((faq, index) => (
									<div key={index} className="bg-gray-50 p-6 rounded-lg">
										<h3 className="text-xl font-semibold mb-2">
											{faq.question}
										</h3>
										<p className="text-gray-600">{faq.answer}</p>
									</div>
								))}
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">Служба поддержки</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-2">
										Техническая поддержка
									</h3>
									<div className="space-y-2">
										<p className="flex items-center">
											<span className="w-5">📧</span>
											support@pethelper.ru
										</p>
										<p className="flex items-center">
											<span className="w-5">📞</span>
											8-800-123-45-67
										</p>
										<p className="text-sm text-gray-500 mt-2">
											Время работы: 24/7
										</p>
									</div>
								</div>

								<div className="bg-gray-50 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-2">Общие вопросы</h3>
									<div className="space-y-2">
										<p className="flex items-center">
											<span className="w-5">📧</span>
											info@pethelper.ru
										</p>
										<p className="flex items-center">
											<span className="w-5">📞</span>
											8-800-765-43-21
										</p>
										<p className="text-sm text-gray-500 mt-2">
											Пн-Пт: 09:00 - 18:00
										</p>
									</div>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">Написать в поддержку</h2>
							<form className="space-y-4">
								<div>
									<label
										htmlFor="category"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Категория
									</label>
									<select
										id="category"
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
									>
										<option>Техническая проблема</option>
										<option>Вопрос по работе сервиса</option>
										<option>Предложение по улучшению</option>
										<option>Другое</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Тема
									</label>
									<input
										type="text"
										id="subject"
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
										placeholder="Введите тему обращения"
									/>
								</div>

								<div>
									<label
										htmlFor="description"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Описание
									</label>
									<textarea
										id="description"
										rows={4}
										className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
										placeholder="Опишите вашу проблему или вопрос"
									/>
								</div>

								<button
									type="submit"
									className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
								>
									Отправить
								</button>
							</form>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SupportPage;
