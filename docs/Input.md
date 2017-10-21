### Input ###
Поле ввода `<input>`

Простое использование:
```
<Input placeholder='Поле ввода' value='значение'/>
```
Расширенное использование:
```
<Input placeholder='Стандартное поле' warning message='Предупреждение.'/>
```
Свойства:

| имя          | тип                | значение по умолчанию | описание                                           |
|--------------|--------------------|-----------------------|----------------------------------------------------|
| className    | string             |                       | дополнительный CSS-класс                           |
| message      | string             |                       | текст сообщения ошибки/предупреждения валидации    |
| placeholder  | string             |                       | текст приглашения при незаполненном поле           |
| type         | string             | 'text'                | тип поля ввода `<input>`: text, password, email... |
| validation   | 'error', 'warning' |                       | ошибка валидации                                   |
| value        | string             |                       | значение записанное в поле ввода                   |


События:

| имя      | тип             | описание                                    |
|----------|-----------------|---------------------------------------------|
| onChange | (event) => void | срабатывает при измении текста в поле ввода |

CSS-классы:  

* `.ej-components__input`
   * `.ej-components__input-validation-error` - окрашивает рамку в красный цвет
   * `.ej-components__input-validation-warning` - окрашивает рамку в оранжевый цвет