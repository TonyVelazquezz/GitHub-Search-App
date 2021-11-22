import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import FollowersItem from '../components/FollowersItem';
import useFetch from '../hooks/useFetch';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Followers = () => {
	const { github_name } = useParams();

	const { data, loader, handleFetchData } = useFetch(
		`https://api.github.com/users/${github_name}/followers`
	);

	useEffect(() => {
		handleFetchData();
	}, []);

	// console.log(data);

	return (
		<div className="mx-auto text-white md:w-3/4 pb-7 pt-5 w-11/12">
			<div className="flex items-center justify-between pt-4">
				<h1 className="text-2xl">Followers of {`${github_name}`}</h1>

				<Link to="/" className="btn__home">
					<FiGithub size={30} />
				</Link>
			</div>

			<section className="mx-auto pt-5">
				{data?.map(follower => (
					<FollowersItem key={follower.id} {...follower} github_name={github_name} />
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

export default Followers;
