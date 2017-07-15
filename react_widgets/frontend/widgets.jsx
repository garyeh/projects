import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const names = ['gary','david'];
	ReactDOM.render(
		<div>
			<Clock />
			<Weather />
			<Autocomplete names={names} />
		</div>
		, root);
});
