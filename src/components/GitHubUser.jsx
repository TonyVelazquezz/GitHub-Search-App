import React from 'react';
import { Link } from 'react-router-dom';

const GithubUser = props => {
	const {
		avatar,
		github,
		name,
		github_name,
		public_repos,
		followers,
		following,
	} = props;

	return (
		<div className="bg-main_blue flex justify-center flex-wrap gap-10 md:w-3/5 pb-5 pt-3 px-1 rounded-md text-white">
			<div className="flex items-center md:w-1/4 w-1/4">
				<img src={avatar} alt={github} className="rounded-full" />
			</div>

			<div className="md:w-4/6 w-full px-3 md:p-0">
				<h1 className="font-semibold text-center text-3xl text-white">{name}</h1>
				<h2 className="pb-3 text-center">{github_name}</h2>

				<div className="bg-dark_blue px-10 py-3 rounded-md w-full">
					<p className="text-white">
						<span className="font-semibold mr-2 text-main_yellow text-xl">
							Repos:
						</span>
						{public_repos}
					</p>
					<p className="text-white">
						<span className="font-semibold mr-2 text-main_yellow text-xl">
							Followers:
						</span>
						{followers}
					</p>
					<p className="text-white">
						<span className="font-semibold mr-2 text-main_yellow text-xl">
							Following:
						</span>
						{following}
					</p>

					<div className="flex gap-3">
						{followers > 0 && (
							<Link to={`/${github_name}/followers`} className="btn m-2 text-base">
								followers
							</Link>
						)}

						{public_repos > 0 && (
							<Link
								to={`/${github_name}/followers/${github_name}/repos`}
								className="btn m-2 text-base"
							>
								Repositories
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GithubUser;
