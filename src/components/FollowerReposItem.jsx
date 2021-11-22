import React from 'react';

const FollowerReposItem = ({ name, language, updated_at }) => {
	return (
		<div className="pb-2">
			<div className="bg-main_blue flex items-center flex-wrap py-3 px-7 rounded-md">
				<h3 className="break-words pb-1 text-center text-xl w-full">{name}</h3>

				<div className="bg-dark_blue rounded-md w-full">
					<p className="text-center text-main_yellow w-full">
						Language: <span className="text-white">{language}</span>
					</p>
					<p className="text-center text-main_yellow w-full">
						Last update: <span className="text-white">{updated_at}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FollowerReposItem;
