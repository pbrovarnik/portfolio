import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="layout">
			<div className="banner">
				Checkout my new
				<strong>
					<a href="https://pashabrovarnik.com" rel="noopener noreferrer" target="_blank" aria-label="New version of Pashabrovarnik.com (opens in a new tab)">
						Portfolio
					</a>
				</strong>
				<span>🚀</span>
			</div>

			<main className="main-content">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
