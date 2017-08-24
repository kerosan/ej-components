import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { RadioButton } from './components/RadioButton';

const btn = (
	<Button text='Button' onClick={() => alert('on click 0')}/>
);
const btnToolbar = (
	<div className='btn-toolbar'>
		<Button text='Button' onClick={() => alert('on click 1')}/>
		<Button text='Button' disabled onClick={() => alert('on click 2')}/>
	</div>
);
const checkbox = (
	<div>
		<Checkbox checked />
		<Checkbox checked disabled />
		<Checkbox label={'Checkbox'} />
	</div>
);
const radiobutton = (
	<div>
		<RadioButton checked />
		<RadioButton checked disabled />
		<RadioButton label={'RadioButton'} />
	</div>
);


window.addEventListener('load', (e) => {
	ReactDOM.render(btn, document.getElementById('Button'));
	ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
	ReactDOM.render(checkbox, document.getElementById('Checkbox'));
	ReactDOM.render(radiobutton, document.getElementById('RadioButton'));
});
