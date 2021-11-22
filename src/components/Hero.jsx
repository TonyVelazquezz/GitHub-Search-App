import React from 'react';
import Form from '../components/Form';

const Hero = ({ handleInputChange, handleUserData, username }) => {
	return (
		<div className="flex items-end justify-center pb-7 pt-10">
			<Form
				handleUserData={handleUserData}
				handleInputChange={handleInputChange}
				username={username}
			/>
		</div>
	);
};

export default Hero;
