import { useState } from "react";
import type { CalendarProps } from "react-calendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	const events = [
		{
			id: 1,
			date: new Date(2025, 4, 15),
			type: "Прием",
			title: "Осмотр Барсика",
			pet: "Барсик",
			vet: "Доктор Айболит",
			time: "10:00",
			status: "confirmed",
			color: "bg-blue-500",
		},
		{
			id: 2,
			date: new Date(2025, 4, 18),
			type: "Вакцинация",
			title: "Вакцинация Барсика",
			pet: "Барсик",
			vet: "Доктор Зоомед",
			time: "15:30",
			status: "pending",
			color: "bg-green-500",
		},
		{
			id: 3,
			date: new Date(2025, 5, 1),
			type: "Вакцинация",
			title: "Вакцинация Мурки",
			pet: "Мурка",
			vet: "Доктор Айболит",
			time: "12:00",
			status: "pending",
			color: "bg-green-500",
		},
	];

	const getEventsForDate = (date: Date) => {
		return events.filter(
			(event) => event.date.toDateString() === date.toDateString()
		);
	};

	const tileContent: CalendarProps["tileContent"] = ({ date, view }) => {
		if (view === "month") {
			const dayEvents = getEventsForDate(date);
			if (dayEvents.length > 0) {
				return (
					<div className="flex justify-center gap-1 mt-1">
						{dayEvents.map((event, index) => (
							<div
								key={index}
								className={`w-1.5 h-1.5 rounded-full ${event.color}`}
								title={event.title}
							/>
						))}
					</div>
				);
			}
		}
		return null;
	};

	const tileClassName = ({ date, view }: { date: Date; view: string }) => {
		if (view === "month") {
			const isToday = date.toDateString() === new Date().toDateString();
			const isSelected = date.toDateString() === selectedDate.toDateString();
			const hasEvents = getEventsForDate(date).length > 0;

			return `${isToday ? "bg-blue-50 text-blue-600 font-semibold" : ""} ${
				isSelected ? "!bg-blue-500 !text-white rounded-lg" : ""
			} ${
				hasEvents && !isSelected ? "font-medium" : ""
			} hover:bg-blue-100 transition-colors duration-200`;
		}
		return "";
	};

	const handleDateChange: CalendarProps["onChange"] = (value) => {
		if (value instanceof Date) {
			setSelectedDate(value);
		}
	};

	const selectedDateEvents = getEventsForDate(selectedDate);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "confirmed":
				return "bg-green-100 text-green-800 border border-green-200";
			case "pending":
				return "bg-yellow-100 text-yellow-800 border border-yellow-200";
			default:
				return "bg-gray-100 text-gray-800 border border-gray-200";
		}
	};

	const getEventTypeIcon = (type: string) => {
		switch (type) {
			case "Прием":
				return "👨‍⚕️";
			case "Вакцинация":
				return "💉";
			default:
				return "📅";
		}
	};

	return (
		<div className="bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
					<div className="xl:col-span-3">
						<div className="bg-white rounded-xl shadow-md p-8">
							<style>
								{`
									.react-calendar {
										width: 100%;
										max-width: none;
										border: none;
										font-family: inherit;
									}
									.react-calendar__month-view__days__day {
										padding: 1.5em 0;
										position: relative;
										font-size: 1.1em;
									}
									.react-calendar__navigation button {
										font-size: 1.2em;
										padding: 1em;
									}
									.react-calendar__navigation {
										margin-bottom: 1em;
									}
									.react-calendar__month-view__weekdays__weekday {
										padding: 1em 0;
										font-size: 1em;
									}
									.react-calendar__tile:enabled:hover,
									.react-calendar__tile:enabled:focus {
										background-color: #f3f4f6;
										border-radius: 0.5rem;
									}
									@media (max-width: 1280px) {
										.react-calendar__month-view__days__day {
											padding: 1em 0;
											font-size: 1em;
										}
										.react-calendar__navigation button {
											font-size: 1em;
											padding: 0.5em;
										}
										.react-calendar__month-view__weekdays__weekday {
											padding: 0.5em 0;
										}
									}
								`}
							</style>
							<Calendar
								onChange={handleDateChange}
								value={selectedDate}
								tileContent={tileContent}
								tileClassName={tileClassName}
								className="w-full border-0 rounded-lg"
								navigationLabel={({ date }) =>
									date.toLocaleString("default", {
										month: "long",
										year: "numeric",
									})
								}
								formatShortWeekday={(_locale, date) =>
									date
										.toLocaleString("default", { weekday: "short" })
										.slice(0, 2)
								}
							/>
						</div>
					</div>

					<div className="xl:col-span-1 space-y-6">
						<div className="bg-white rounded-xl shadow-md p-6">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-xl font-bold">
									События на{" "}
									{selectedDate.toLocaleDateString("ru-RU", {
										day: "numeric",
										month: "long",
									})}
								</h2>
								<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap">
									+ Добавить
								</button>
							</div>
							{selectedDateEvents.length > 0 ? (
								<div className="space-y-4">
									{selectedDateEvents.map((event) => (
										<div
											key={event.id}
											className="p-4 bg-white border rounded-xl hover:shadow-md transition-all duration-200"
										>
											<div className="flex items-start justify-between mb-3">
												<div className="flex items-start space-x-3">
													<span
														className="text-2xl"
														role="img"
														aria-label={event.type}
													>
														{getEventTypeIcon(event.type)}
													</span>
													<div>
														<h3 className="font-semibold text-lg">
															{event.title}
														</h3>
														<p className="text-gray-500 text-sm">
															{event.time}
														</p>
													</div>
												</div>
												<span
													className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
														event.status
													)}`}
												>
													{event.status === "confirmed"
														? "Подтверждено"
														: "Ожидается"}
												</span>
											</div>
											<div className="ml-10 space-y-2 text-sm text-gray-600">
												<p className="flex items-center">
													<span className="w-5">🐾</span>
													Питомец: {event.pet}
												</p>
												<p className="flex items-center">
													<span className="w-5">👨‍⚕️</span>
													Врач: {event.vet}
												</p>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="text-center py-8">
									<p className="text-gray-500 mb-2">
										Нет событий на выбранную дату
									</p>
									<button className="text-blue-500 hover:text-blue-600 font-medium">
										Добавить событие
									</button>
								</div>
							)}
						</div>

						<div className="bg-white rounded-xl shadow-md p-6">
							<h2 className="text-xl font-bold mb-4">Ближайшие события</h2>
							<div className="space-y-4">
								{events
									.filter((event) => event.date >= new Date())
									.sort((a, b) => a.date.getTime() - b.date.getTime())
									.slice(0, 3)
									.map((event) => (
										<div
											key={event.id}
											className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
										>
											<div
												className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${event.color}`}
											>
												{getEventTypeIcon(event.type)}
											</div>
											<div className="flex-1">
												<h3 className="font-medium">{event.title}</h3>
												<p className="text-sm text-gray-500">
													{event.date.toLocaleDateString("ru-RU", {
														day: "numeric",
														month: "long",
													})}
													, {event.time}
												</p>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CalendarPage;
