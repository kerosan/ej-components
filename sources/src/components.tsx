import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { RadioButton } from './components/RadioButton';
import { Title } from './components/Title';
import { Snippet } from './components/Snippet';
import { Link } from './components/Link';
import { Input } from './components/Input';
import { TextArea } from "./components/TextArea";

const titles = (
	<div>
		<Title bold>{`Заголовок 1`}</Title>
		<Title text='Заголовок 2'/>
		<Title small>{`Заголовок 3`}</Title>
		<Title small grey>{`Заголовок 4`}</Title>
		<Title small grey inline>{`Заголовок 5`}</Title>
		<Title small grey inline>{`Заголовок 6`}</Title>
	</div>

);
const snippets = (
	<div>
		<Snippet>{`Текст вариант 1`}</Snippet><br/>
		<Snippet grey text='Текст вариант 2'/><br/>
		<Snippet bold>{`Текст вариант 3`}</Snippet>
	</div>
);

const links = (
	<div>
		<Link href='#LinkTitle'>{`Ссылка 1`}</Link><br/>
		<Link bold text='Ссылка 2' onClick={() => alert("Link 2 click")}/><br/>
	</div>

);
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
		<Checkbox checked/>
		<Checkbox checked disabled/>
		<Checkbox label={'Checkbox'}/>
	</div>
);
const radiobutton = (
	<div>
		<RadioButton checked/>
		<RadioButton checked disabled/>
		<RadioButton label={'RadioButton'}/>
	</div>
);

const inputs = (
	<div>
		<Input placeholder='Стандартное поле' onChange={() => console.log('input changed')}/><br/>
		<Input placeholder='Стандартное поле' value='Активное поле'/><br/>
		<Input placeholder='Стандартное поле' warning message='Предупреждение выделяется оранжевым цветом, занимает не более двух строк.'/><br/>
		<Input placeholder='Стандартное поле' error message='Сообщение об ошибке выделяется красным цветом, занимает не более двух строк.'/>
	</div>
);

const textareas = (
	<div>
		<TextArea placeholder='Стандартное поле' onChange={() => console.log('textarea changed')}/><br/>
		<TextArea value='Активное поле' onChange={() => console.log('textarea changed')}/><br/>
		<TextArea required placeholder='Обязательное поле' onChange={() => console.log('textarea changed')}/><br/>
	</div>
);


window.addEventListener('load', (e) => {
	ReactDOM.render(titles, document.getElementById('Title'));
	ReactDOM.render(snippets, document.getElementById('Snippet'));
	ReactDOM.render(links, document.getElementById('Link'));
	ReactDOM.render(btn, document.getElementById('Button'));
	ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
	ReactDOM.render(checkbox, document.getElementById('Checkbox'));
	ReactDOM.render(radiobutton, document.getElementById('RadioButton'));
	ReactDOM.render(inputs, document.getElementById('Input'));
	ReactDOM.render(textareas, document.getElementById('TextArea'));
});
