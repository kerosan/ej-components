### RadioButton ###
Радио-кнопка

Простое использование:
```
<RadioButton />
```
Расширенное использование:
```
<RadioButton name={'radio-btn-name'}
  label={'Текст'}
  className={'some-css-class'}
  checked={true}
  disabled={true}
  clickCapture={true} />
```
Свойства:

| имя          | тип     | значение по умолчанию | описание                                                |
|--------------|---------|-----------------------|---------------------------------------------------------|
| checked      | boolean | false                 | включена радио-кнопка или нет                           |
| className    | string  |                       | дополнительный CSS-класс                                |
| clickCapture | boolean | false                 | прекращать или нет дальнейшую передачу текущего события |
| disabled     | boolean | false                 | радио-кнопка активна / не активна                       |
| label        | string  |                       | текст рядом с радио-кнопкой                             |
| name         | string  |                       | имя радио-кнопки                                        |

События:

| имя      | тип                                       | описание                                        |
|----------|-------------------------------------------|-------------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния радио-кнопки. |
|          |                                           | Не срабатывает если disabled={true}             |

CSS-классы:

* `.ej-components__radiobutton`
    * `.ej-components__radiobutton-icon__checked` - класс иконки включенной радио-кнопки;
    * `.ej-components__radiobutton-icon__unchecked` - класс иконки выключенной радио-кнопки;
