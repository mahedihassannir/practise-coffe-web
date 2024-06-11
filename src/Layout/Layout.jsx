import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";

const Main = () => {
	/**
	 * when isNavOpen is true then scroll will be stop
	 */
	const [isNavOpen, setIsNavOpen] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (isNavOpen) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		};

		handleScroll();
	}, [isNavOpen]);



	return (
		<div onClick={() => {
			// close navbar 
			setIsNavOpen(false)


		}} className="overflow-x-hidden">
			<Nav
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			></Nav>

			<Outlet></Outlet>

			<Footer></Footer>
		</div>
	);
};

export default Main;