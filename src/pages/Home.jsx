import React from 'react';
import GithubUser from '../components/GitHubUser';
import Hero from '../components/Hero';
import PropagateLoader from 'react-spinners/PropagateLoader';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';
import ErroMessage from '../components/ErroMessage';

const Home = () => {
	//CustomHooks
	const [userInput, handleInputChange, reset] = useForm({ username: '' });
	const { username } = userInput;
	const { data, loader, handleFetchData } = useFetch(
		`https://api.github.com/users/${username}`
	);

	const handleUserData = e => {
		e.preventDefault();
		if (username.trim().length > 0) {
			handleFetchData();
			reset();
		}
	};

	return (
		<div className="bg-dark_blue h-full pb-5 pt-16 px-2 w-full">
			{!data && (
				<>
					<h3 className="font-semibold text-center text-2xl text-white">
						Welcome to the GitHub Search App!
					</h3>
					<div className="flex justify-center w-full">
						<div className="w-60">
							<img
								src="https://octodex.github.com/images/daftpunktocat-guy.gif"
								alt="github_gif"
							/>
						</div>
					</div>
					{!loader && (
						<h3 className="animate-pulse text-center text-xl text-white">
							Start typing a github username
						</h3>
					)}
				</>
			)}

			<div className="flex justify-center w-full">
				{data?.message ? (
					<ErroMessage />
				) : (
					data && (
						<GithubUser
							avatar={data?.avatar_url}
							github={data?.html_url}
							github_name={data?.login}
							name={data?.name}
							public_repos={data?.public_repos}
							followers={data?.followers}
							following={data?.following}
						/>
					)
				)}

				{loader && (
					<div className="absolute left-1/2 md:top-[50%] top-[55%] w-full">
						<PropagateLoader color={'#FFAA00'} loading={loader} size={15} />
					</div>
				)}
			</div>

			<Hero
				handleUserData={handleUserData}
				handleInputChange={handleInputChange}
				username={username}
			/>
		</div>
	);
};

export default Home;
