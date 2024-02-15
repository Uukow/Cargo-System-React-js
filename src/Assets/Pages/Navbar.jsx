import { useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../img/logo.png'
import '../Styles/Style.css';
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} alt="Logo"></img>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/Services">Services</Link>
				<Link to="/Price">Pricing</Link>
				<Link to="/Team">Teams</Link>
				<Link to="/Parteners">Parteners</Link>
				<Link to="/About">About me</Link>
				<Link to="/Form" className="btn btn-primary" >Login</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;