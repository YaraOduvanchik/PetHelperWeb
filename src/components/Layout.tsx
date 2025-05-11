import { Link, useLocation } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();

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
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4">
					<nav className="flex items-center justify-between h-16">
						<div className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold text-blue-600">
								Pet Helper
							</span>
						</div>
						<div className="flex space-x-4">
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
					</nav>
				</div>
			</header>
			<main className="flex-grow container mx-auto px-4 py-8">{children}</main>
			<footer className="bg-gray-800 text-white">
				<div className="container mx-auto px-4 py-6">
					<div className="flex justify-between items-center">
						<span>Pet Helper © 2025</span>{" "}
						<div className="space-x-4">
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
