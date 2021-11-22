import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import FollowerReposItem from '../components/FollowerReposItem';
import useFetch from '../hooks/useFetch';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FollowersRepos = () => {
	const { login } = useParams();

	const { data, loader, handleFetchData } = useFetch(
		`https://api.github.com/users/${login}/repos`
	);

	useEffect(() => {
		handleFetchData();
	}, []);

	// console.log(data);+
	// console.log(login);
	return (
		<div className="mx-auto pt-4 pb-7 text-white md:w-3/4 w-11/12">
			<div className="flex items-center justify-between pt-4">
				<h1 className="pt-4 text-2xl">Repos of {`${login}`}</h1>

				<Link to="/" className="btn__home">
					<FiGithub size={30} />
				</Link>
			</div>

			<section className="pt-5">
				{data?.map(repos => (
					<FollowerReposItem key={repos.id} {...repos} />
				))}
			</section>

			{loader && (
				<div className="absolute left-[50%] top-[50%] w-full">
					<ClipLoader color={'#FFAA00'} loading={loader} size={50} />
				</div>
			)}
		</div>
	);
};

export default FollowersRepos;
