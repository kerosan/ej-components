import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './components/Button';

const btn = (
	<Button text='Button' onClick={() => {
		alert('on click')
	}}/>
);
const btnToolbar = (
	<div className='btn-toolbar'>
		<Button text='Button' onClick={() => {
			alert('on click')
		}}/>
		<Button text='Button' disabled onClick={() => {
			alert('on click')
		}}/>
	</div>
);


window.addEventListener('load', (e) => {
	ReactDOM.render(btn, document.getElementById('Button'));
	ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
});
