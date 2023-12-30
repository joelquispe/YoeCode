import { useEffect, useState } from 'react';

import './App.css';
import { motion } from 'framer-motion';
import HomePage from './ui/pages/home.page';

function App() {
	const [showLogo, setShowLogo] = useState(true);
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setShowLogo(false);
		}, 2000);

		return () => clearTimeout(timeOutId);
	}, []);
	return (
		<div className="bg-black flex h-screen w-screen justify-center items-center absolute">
			<motion.div
				className="absolute"
				transition={{ delay: 0.6, duration: 0.5 }}
				initial={{ scale: 0, rotate: 200 }}
				animate={{ scale: showLogo ? 1 : 0, rotate: 0 }}
				exit={{ scale: 0 }}
			>
				<img src="./img/logo.png" className="w-56" alt="" />
			</motion.div>
			<motion.div
				transition={{ delay: 0.6, duration: 0.5 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: !showLogo ? 1 : 0 }}
			>
				<div className="h-full  w-screen bg-slate-950">
					<HomePage />
				</div>
			</motion.div>
		</div>
	);
}

export default App;
