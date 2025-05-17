import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	const navItems = [
		{ path: "/", label: "Главная" },
		{ path: "/profile", label: "Профиль" },
		{ path: "/map", label: "Карта" },
		{ path: "/vets", label: "Ветеринары" },
		{ path: "/calendar", label: "Календарь" },
	];
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="bg-white shadow-md relative">
				<div className="container mx-auto px-4">
					<nav className="flex items-center justify-between h-16">
						<div className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold text-blue-600">
								Pet Helper
							</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-4">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
										isActive(item.path)
											? "bg-blue-500 text-white"
											: "text-gray-600 hover:bg-blue-50 hover:text-blue-500"
									}`}
								>
									{item.label}
								</Link>
							))}
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
								aria-expanded="false"
							>
								<span className="sr-only">Открыть меню</span>
								{/* Иконка меню */}
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{isMenuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
					</nav>{" "}
					{/* Mobile Navigation */}
					<div
						className={`${
							isMenuOpen ? "block" : "hidden"
						} md:hidden fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg z-[1000]`}
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									onClick={() => setIsMenuOpen(false)}
									className={`block px-3 py-2 rounded-md text-base font-medium ${
										isActive(item.path)
											? "bg-blue-500 text-white"
											: "text-gray-600 hover:bg-blue-50 hover:text-blue-500"
									}`}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</header>
			<main className="flex-grow container mx-auto px-2 sm:px-4 py-8">
				{children}
			</main>
			<footer className="bg-gray-800 text-white">
				<div className="container mx-auto px-2 sm:px-4 py-6">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
						<span>Pet Helper © 2025</span>
						<div className="flex space-x-2 sm:space-x-4">
							<Link to="/about" className="hover:text-blue-400">
								О нас
							</Link>
							<Link to="/contacts" className="hover:text-blue-400">
								Контакты
							</Link>
							<Link to="/support" className="hover:text-blue-400">
								Поддержка
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Layout;
