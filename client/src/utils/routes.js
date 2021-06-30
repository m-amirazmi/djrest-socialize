import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const routes = [
    { path: '/', name: 'home', component: Home, icon: 'bi bi-house', visibleOnTopNav: true, isProtected: false },
    { path: '/login', name: 'login', component: Login, icon: 'bi bi-box-arrow-in-right', visibleOnTopNav: true, isProtected: false }
]