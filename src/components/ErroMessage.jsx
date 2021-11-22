import React from 'react';

const ErroMessage = () => {
	return (
		<div className=" text-white">
			<div className="flex justify-center w-full">
				<div className="w-60">
					<img
						src="https://octodex.github.com/images/daftpunktocat-guy.gif"
						alt="github_gif"
					/>
				</div>
			</div>

			<div className="leading-10 text-center">
				<h2 className="text-3xl text-red-500">404</h2>
				<p>please make sure the user is spelled correctly.</p>
			</div>
		</div>
	);
};

export default ErroMessage;
