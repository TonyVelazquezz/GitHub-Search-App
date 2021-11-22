import React from 'react';
import { Link } from 'react-router-dom';

const FollowersItem = ({ avatar_url, github_name, login }) => {
	return (
		<div className="pb-2 text-2xl">
			<div className="bg-main_blue flex items-center flex-wrap py-3 px-7 rounded-md">
				<div className="md:w-1/12 flex justify-center w-full">
					<img
						src={avatar_url}
						alt="img-user"
						className="rounded-full w-1/6 md:w-full"
					/>
				</div>

				<div className="bg-dark_blue flex flex-wrap gap-3 justify-center mt-3 md:mt-0 mx-auto py-5 rounded-md md:w-3/4 w-full">
					<h3 className="break-words leading-none pl-5 text-center text-xl w-full">
						{login}
					</h3>

					<Link
						to={`/${github_name}/followers/${login}/repos`}
						className="block btn mx-3 text-base text-center w-full"
					>
						Repositories
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FollowersItem;
