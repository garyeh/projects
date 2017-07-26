import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

	const names = ['gary','david','jules','aaron','elliot'];
	const panes = [
	  {title: 'one', content: 'I am the first'},
	  {title: 'two', content: 'Second pane here'},
	  {title: 'three', content: 'Third pane here'}
	];

	ReactDOM.render(
		<div>
			<Clock />
			<Weather />
			<div className="interactive">
				<Autocomplete names={names} />
				<Tabs panes={panes} />
			</div>
		</div>
		, root);
});
