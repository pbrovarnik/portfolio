import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="layout">
			<div className="banner">
				<strong>Portfolio V2 coming Summer 2024</strong>
				<span>🚀</span>
			</div>

			<main className="main-content">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
