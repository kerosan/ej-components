### Checkbox ###
Галочка

Простое использование:
```
<Checkbox />
```
Расширенное использование:
```
<Checkbox name={'checkbox-name'}
  label={'Текст'}
  className={'some-css-class'}
  checked={true}
  disabled={true}
  inline={true}
  clickCapture={true} />
```
Свойства:


| имя          | тип     | значение по умолчанию | описание                                                |
|--------------|---------|-----------------------|---------------------------------------------------------|
| checked      | boolean | false                 | включена галочка или нет                                |
| className    | string  |                       | дополнительный CSS-класс                                |
| clickCapture | boolean | false                 | прекращать или нет дальнейшую передачу текущего события |
| disabled     | boolean | false                 | галочка активна / не активна                            |
| label        | string  |                       | текст рядом с галочкой                                  |
| name         | string  |                       | имя галочки                                             |

События:

| имя      | тип                                       | описание                                   |
|----------|-------------------------------------------|--------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния галочки. |
|          |                                           | Не срабатывает если disabled={true}        |

CSS-классы:

* `.ej-components__checkbox`
    * `.ej-components__checkbox-icon__checked` - класс иконки включенной галочки;
    * `.ej-components__checkbox-icon__unchecked` - класс иконки выключенной галочки;
