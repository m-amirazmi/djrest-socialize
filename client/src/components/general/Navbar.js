import { Link } from 'react-router-dom'
import { routes } from '../../utils/routes'

export const Navbar = () => {

    const renderLinks = () => {
        return routes.map((route) => {
            if (!route.visibleOnTopNav) return null
            return (
                <li className="nav-item top-links">
                    <Link className="nav-link text-capitalize" to={route.path}>
                        <i className={route.icon}></i>
                        {/* {route.name} */}
                    </Link>
                </li>
            )
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Socialize</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {renderLinks()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
