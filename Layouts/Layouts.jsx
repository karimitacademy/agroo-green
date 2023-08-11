import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';


const Layouts = ({ children }) => {
	return (
		<>
			{/* <Header /> */}
			{children}

			{/* <Footer /> */}
		</>
	);
};

export default Layouts;