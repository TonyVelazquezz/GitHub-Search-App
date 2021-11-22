import React from 'react';

const Form = ({ handleInputChange, handleUserData, username }) => {
	return (
		<form
			onSubmit={e => handleUserData(e)}
			className="relative top-0 text-center w-full"
		>
			<input
				type="text"
				placeholder="Search GitHub user..."
				name="username"
				onChange={({ target }) => handleInputChange(target)}
				className="bg-main_blue py-2 px-4 rounded-md text-white md:w-1/2 w-11/12"
				value={username}
			/>
			<button
				type="submit"
				className="absolute btn md:right-[25.5%] md:top-[12.5%] right-[5%] top-[12.5%]"
			>
				Search
			</button>
		</form>
	);
};

export default Form;
