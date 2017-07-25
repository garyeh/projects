import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const names = ['gary','david','jules','aaron','elliot'];
	ReactDOM.render(
		<div>
			<Clock />
			<Weather />
			<div className="interactive">
				<Autocomplete names={names} />
			</div>
		</div>
		, root);
});
