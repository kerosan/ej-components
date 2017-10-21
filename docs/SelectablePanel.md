### SelectablePanel ###
Панель с галочкой

Простое использование:
```
<SelectablePanel>
  <div>контент</div>
</SelectablePanel>

```
Расширенное использование:
```
<SelectablePanel name={'checkbox-name'}
  className={'some-css-class'}
  checked={true}
  disabled={false}
  clickCapture={true}>
  <div>контент</div>
</SelectablePanel>
```
Свойства:

| имя          | тип     | значение по умолчанию | описание                                                |
|--------------|---------|-----------------------|---------------------------------------------------------|
| checked      | boolean | false                 | включена галочка или нет                                |
| className    | string  |                       | дополнительный CSS-класс                                |
| clickCapture | boolean | false                 | прекращать или нет дальнейшую передачу текущего события |
| disabled     | boolean | false                 | галочка активна / не активна                            |
| name         | string  |                       | имя галочки                                             |

События:

| имя      | тип                                       | описание                                                              |
|----------|-------------------------------------------|--------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния галочки. |
|          |                                           | Не срабатывает если disabled={true}        |

CSS-классы:

* `.ej-components__selectable-panel`
    * `.ej-components__selectable-panel-icon__checked` - класс иконки включенной галочкой;
    * `.ej-components__selectable-panel-icon__unchecked` - класс иконки выключенной галочкой;
