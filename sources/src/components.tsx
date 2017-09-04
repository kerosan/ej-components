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
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { Alert } from "./components/Alert";
import { Glyphicon } from "react-bootstrap";
import { CheckPanel } from "./components/CheckPanel";

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
const btnRounded = (
	<Button text='Button' rounded onClick={() => alert('on click 3')}/>
);
const btnInverted = (<div>
		<Button inverted onClick={() => alert('on click PREV')}><Glyphicon glyph='chevron-left'/>{'Button'}</Button>
		<Button inverted onClick={() => alert('on click NEXT')}>{'Button'}<Glyphicon glyph='chevron-right'/></Button>
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

const list1 = (
	<List>
		<ListItem text='Строка в списке'/>
		<ListItem selected text='Строка в списке'/>
		<ListItem text='Строка в списке'/>
		<ListItem><Glyphicon glyph='star'/>{'Строка в списке с иконкой'}</ListItem>
		<ListItem text='Строка в списке'/>
	</List>
);
const list2 = (
	<List>
		<ListItem text='Строка в списке'/>
		<ListItem selected text='Строка в списке'/>
		<ListItem text='Строка в списке'/>
		<ListItem text='Строка в списке'/>
		<ListItem text='Строка в списке'/>
		<ListItem><Glyphicon glyph='star'/>{'Строка в списке с иконкой'}</ListItem>
		<ListItem text='Строка в списке'/>
	</List>
);
const list3 = (
	<List emptyTitle='Список пуст'/>
);
const list4 = (
	<List items={[]}/>
);
const list5 = (
	<List items={[
		{text: 'String 11'},
		{text: 'String 12'},
		{text: 'String 13'},
		{text: 'String 14'},
		{text: 'String 15'},
	]}/>
);
const list6 = (
	<List items={[
		{text: 'String 21'},
		{text: 'String 22'},
		{text: 'String 23'},
		{text: 'String 24'},
		{text: 'String 25'},
		{text: 'String 26'},
	]}/>
);

const alert1 = (
	<Alert bsStyle='danger'>
		<strong>{"Error!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
	</Alert>
);

const alert2 = (
	<Alert bsStyle='warning'>
		<strong>{"Warning!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
	</Alert>
);

const alert3 = (
	<Alert bsStyle='success' onDismiss={() => alert('dismiss')}>
		<strong>{"Success!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
	</Alert>
);


const cbPanel1 = (
	<CheckPanel>
		<strong>{"Success!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
	</CheckPanel>
);


window.addEventListener('load', (e) => {
	ReactDOM.render(titles, document.getElementById('Title'));
	ReactDOM.render(snippets, document.getElementById('Snippet'));
	ReactDOM.render(links, document.getElementById('Link'));
	ReactDOM.render(btn, document.getElementById('Button'));
	ReactDOM.render(btnToolbar, document.getElementById('ButtonToolbar'));
	ReactDOM.render(btnRounded, document.getElementById('ButtonRounded'));
	ReactDOM.render(btnInverted, document.getElementById('ButtonInverted'));
	ReactDOM.render(checkbox, document.getElementById('Checkbox'));
	ReactDOM.render(radiobutton, document.getElementById('RadioButton'));
	ReactDOM.render(inputs, document.getElementById('Input'));
	ReactDOM.render(textareas, document.getElementById('TextArea'));
	ReactDOM.render(list1, document.getElementById('List1'));
	ReactDOM.render(list2, document.getElementById('List2'));
	ReactDOM.render(list3, document.getElementById('List3'));
	ReactDOM.render(list4, document.getElementById('List4'));
	ReactDOM.render(list5, document.getElementById('List5'));
	ReactDOM.render(list6, document.getElementById('List6'));
	ReactDOM.render(alert1, document.getElementById('Alert1'));
	ReactDOM.render(alert2, document.getElementById('Alert2'));
	ReactDOM.render(alert3, document.getElementById('Alert3'));
	ReactDOM.render(cbPanel1, document.getElementById('CbPanel1'));
});
