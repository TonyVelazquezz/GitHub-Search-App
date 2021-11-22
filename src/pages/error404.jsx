import React from 'react';
import { FaSadCry } from 'react-icons/fa';

const error404 = () => {
	return (
		<div className="flex flex-wrap items-center justify-center text-white h-screen">
			<div className="leading-10 text-center">
				<p className="py-4">
					<FaSadCry className="w-full text-main_yellow" size={120} />
				</p>
				<h1 className="text-2xl font-bold">Page not found</h1>
				<p>The site you're looking for is not here.</p>
				<p>Go back, or head over to choose a new direction</p>
			</div>
		</div>
	);
};

export default error404;
