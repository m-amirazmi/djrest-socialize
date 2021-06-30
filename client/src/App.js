import { BrowserRouter } from 'react-router-dom'
import { Routes } from './components/Routes'
import { AuthProvider } from './contexts/AuthContext'

export const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</AuthProvider>
	)

}
