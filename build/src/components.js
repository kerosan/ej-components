"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Button_1 = require("./components/Button");
var Checkbox_1 = require("./components/Checkbox");
var RadioButton_1 = require("./components/RadioButton");
var Title_1 = require("./components/Title");
var Snippet_1 = require("./components/Snippet");
var Link_1 = require("./components/Link");
var Input_1 = require("./components/Input");
var TextArea_1 = require("./components/TextArea");
var List_1 = require("./components/List");
var ListItem_1 = require("./components/ListItem");
var Alert_1 = require("./components/Alert");
var react_bootstrap_1 = require("react-bootstrap");
var CheckPanel_1 = require("./components/CheckPanel");
var titles = (React.createElement("div", null,
    React.createElement(Title_1.Title, { bold: true }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"),
    React.createElement(Title_1.Title, { text: 'Заголовок 2' }),
    React.createElement(Title_1.Title, { small: true }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3"),
    React.createElement(Title_1.Title, { small: true, grey: true }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4"),
    React.createElement(Title_1.Title, { small: true, grey: true, inline: true }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 5"),
    React.createElement(Title_1.Title, { small: true, grey: true, inline: true }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 6")));
var snippets = (React.createElement("div", null,
    React.createElement(Snippet_1.Snippet, null, "\u0422\u0435\u043A\u0441\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 1"),
    React.createElement("br", null),
    React.createElement(Snippet_1.Snippet, { grey: true, text: 'Текст вариант 2' }),
    React.createElement("br", null),
    React.createElement(Snippet_1.Snippet, { bold: true }, "\u0422\u0435\u043A\u0441\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 3")));
var links = (React.createElement("div", null,
    React.createElement(Link_1.Link, { href: '#LinkTitle' }, "\u0421\u0441\u044B\u043B\u043A\u0430 1"),
    React.createElement("br", null),
    React.createElement(Link_1.Link, { bold: true, text: 'Ссылка 2', onClick: function () { return alert("Link 2 click"); } }),
    React.createElement("br", null)));
var btn = (React.createElement(Button_1.Button, { text: 'Button', onClick: function () { return alert('on click 0'); } }));
var btnToolbar = (React.createElement("div", { className: 'btn-toolbar' },
    React.createElement(Button_1.Button, { text: 'Button', onClick: function () { return alert('on click 1'); } }),
    React.createElement(Button_1.Button, { text: 'Button', disabled: true, onClick: function () { return alert('on click 2'); } })));
var btnRounded = (React.createElement(Button_1.Button, { text: 'Button', rounded: true, onClick: function () { return alert('on click 3'); } }));
var btnInverted = (React.createElement("div", null,
    React.createElement(Button_1.Button, { inverted: true, onClick: function () { return alert('on click PREV'); } },
        React.createElement(react_bootstrap_1.Glyphicon, { glyph: 'chevron-left' }),
        'Button'),
    React.createElement(Button_1.Button, { inverted: true, onClick: function () { return alert('on click NEXT'); } },
        'Button',
        React.createElement(react_bootstrap_1.Glyphicon, { glyph: 'chevron-right' }))));
var checkbox = (React.createElement("div", null,
    React.createElement(Checkbox_1.Checkbox, { checked: true }),
    React.createElement(Checkbox_1.Checkbox, { checked: true, disabled: true }),
    React.createElement(Checkbox_1.Checkbox, { label: 'Checkbox' })));
var radiobutton = (React.createElement("div", null,
    React.createElement(RadioButton_1.RadioButton, { checked: true }),
    React.createElement(RadioButton_1.RadioButton, { checked: true, disabled: true }),
    React.createElement(RadioButton_1.RadioButton, { label: 'RadioButton' })));
var inputs = (React.createElement("div", null,
    React.createElement(Input_1.Input, { placeholder: 'Стандартное поле', onChange: function () { return console.log('input changed'); } }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { placeholder: 'Стандартное поле', value: 'Активное поле' }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { placeholder: 'Стандартное поле', warning: true, message: 'Предупреждение выделяется оранжевым цветом, занимает не более двух строк.' }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { placeholder: 'Стандартное поле', error: true, message: 'Сообщение об ошибке выделяется красным цветом, занимает не более двух строк.' })));
var textareas = (React.createElement("div", null,
    React.createElement(TextArea_1.TextArea, { placeholder: 'Стандартное поле', onChange: function () { return console.log('textarea changed'); } }),
    React.createElement("br", null),
    React.createElement(TextArea_1.TextArea, { value: 'Активное поле', onChange: function () { return console.log('textarea changed'); } }),
    React.createElement("br", null),
    React.createElement(TextArea_1.TextArea, { required: true, placeholder: 'Обязательное поле', onChange: function () { return console.log('textarea changed'); } }),
    React.createElement("br", null)));
var list1 = (React.createElement(List_1.List, null,
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { selected: true, text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, null,
        React.createElement(react_bootstrap_1.Glyphicon, { glyph: 'star' }),
        'Строка в списке с иконкой'),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' })));
var list2 = (React.createElement(List_1.List, null,
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { selected: true, text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' }),
    React.createElement(ListItem_1.ListItem, null,
        React.createElement(react_bootstrap_1.Glyphicon, { glyph: 'star' }),
        'Строка в списке с иконкой'),
    React.createElement(ListItem_1.ListItem, { text: 'Строка в списке' })));
var list3 = (React.createElement(List_1.List, { emptyTitle: 'Список пуст' }));
var list4 = (React.createElement(List_1.List, { items: [] }));
var list5 = (React.createElement(List_1.List, { items: [
        { text: 'String 11' },
        { text: 'String 12' },
        { text: 'String 13' },
        { text: 'String 14' },
        { text: 'String 15' },
    ] }));
var list6 = (React.createElement(List_1.List, { items: [
        { text: 'String 21' },
        { text: 'String 22' },
        { text: 'String 23' },
        { text: 'String 24' },
        { text: 'String 25' },
        { text: 'String 26' },
    ] }));
var alert1 = (React.createElement(Alert_1.Alert, { bsStyle: 'danger' },
    React.createElement("strong", null, "Error!"),
    " \u041F\u043E\u043B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441\u043E ",
    React.createElement("a", { href: 'javascript://' }, "\u0441\u0441\u044B\u043B\u043A\u043E\u0439")));
var alert2 = (React.createElement(Alert_1.Alert, { bsStyle: 'warning' },
    React.createElement("strong", null, "Warning!"),
    " \u041F\u043E\u043B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441\u043E ",
    React.createElement("a", { href: 'javascript://' }, "\u0441\u0441\u044B\u043B\u043A\u043E\u0439")));
var alert3 = (React.createElement(Alert_1.Alert, { bsStyle: 'success', onDismiss: function () { return alert('dismiss'); } },
    React.createElement("strong", null, "Success!"),
    " \u041F\u043E\u043B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441\u043E ",
    React.createElement("a", { href: 'javascript://' }, "\u0441\u0441\u044B\u043B\u043A\u043E\u0439")));
var cbPanel1 = (React.createElement(CheckPanel_1.CheckPanel, null,
    React.createElement("div", { className: 'CheckPanel-content' }, "\u041C\u0435\u0441\u0442\u043E\n\u0434\u043B\u044F\n\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430")));
window.addEventListener('load', function (e) {
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
