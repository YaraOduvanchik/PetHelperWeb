import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ChatPage() {
	const { vetId } = useParams();
	const navigate = useNavigate();
	const [messages, setMessages] = useState([
		{ id: 1, sender: "Вы", content: "Здравствуйте, доктор!", time: "10:00" },
		{
			id: 2,
			sender: "Доктор Айболит",
			content: "Здравствуйте! Чем могу помочь?",
			time: "10:01",
		},
	]);
	const [newMessage, setNewMessage] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (newMessage.trim()) {
			const now = new Date();
			const time =
				now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");

			setMessages((prev) => [
				...prev,
				{
					id: prev.length + 1,
					sender: "Вы",
					content: newMessage.trim(),
					time: time,
				},
			]);
			setNewMessage("");

			// Имитация ответа врача
			setTimeout(() => {
				const responses = [
					"Хорошо, давайте посмотрим...",
					"Понятно, расскажите подробнее",
					"Когда это началось?",
					"Какие симптомы наблюдаются?",
				];
				const randomResponse =
					responses[Math.floor(Math.random() * responses.length)];
				setMessages((prev) => [
					...prev,
					{
						id: prev.length + 1,
						sender: "Доктор Айболит",
						content: randomResponse,
						time: time,
					},
				]);
			}, 1000);
		}
	};

	return (
		<div className="flex flex-col h-[calc(100vh-12rem)] bg-white rounded-lg shadow-lg">
			<div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center gap-4">
				<button
					onClick={() => navigate("/vets")}
					className="mr-4 px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
					aria-label="Назад к ветеринарам"
				>
					← Назад
				</button>
				<div>
					<h2 className="text-xl font-semibold">
						Чат с ветеринаром (ID: {vetId})
					</h2>
					<p className="text-sm text-blue-100">Онлайн</p>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex ${
							message.sender === "Вы" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-[70%] rounded-lg p-3 ${
								message.sender === "Вы"
									? "bg-blue-500 text-white"
									: "bg-gray-100 text-gray-800"
							}`}
						>
							<p className="text-sm font-medium mb-1">{message.sender}</p>
							<p className="text-sm">{message.content}</p>
							<p
								className={`text-xs mt-1 ${
									message.sender === "Вы" ? "text-blue-100" : "text-gray-500"
								}`}
							>
								{message.time}
							</p>
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			<form onSubmit={handleSendMessage} className="p-4 border-t">
				<div className="flex space-x-4">
					<input
						type="text"
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						placeholder="Введите сообщение..."
						className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
					>
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
}

export default ChatPage;
