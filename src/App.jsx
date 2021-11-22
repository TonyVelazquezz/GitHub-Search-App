import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Views
import Home from './pages/Home';
import Followers from './pages/Followers';
import FollowersRepos from './pages/FollowersRepos';
import error404 from './pages/error404';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:github_name/followers" component={Followers} />
				<Route
					exact
					path="/:github_name/followers/:login/repos"
					component={FollowersRepos}
				/>
				<Route path="*" component={error404} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
