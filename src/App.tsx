import { Fragment, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { SoppingCartProvider } from './context/ShoppingCartContext';

function App() {

	return (
		
		<SoppingCartProvider>
			<Navbar/>
			<Container className='mb-4' >
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/store' element={<Store/>} />
					<Route path='/about' element={<About/>} />
				</Routes>
			</Container>
		</SoppingCartProvider>
	)
}

export default App
