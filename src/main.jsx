import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
