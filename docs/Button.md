### Button ###
 
Кнопка

Простое использование:

```
<Button />;
```

Расширенное использование:

```
<Button text={'Текст на кнопке'} disabled={true} className={'some-css-class'} />
```

или
```
<Button disabled={true} className={'some-css-class'} >
  <span>Текст на кнопке</span>
</Button>
```
Свойства:

| имя       | тип                               | значение по умолчанию | описание                    |
|-----------|-----------------------------------|-----------------------|-----------------------------|
| className | string                            |                       | дополнительный CSS-класс    |
| disabled  | boolean                           | false                 | кнопка активна / не активна |
| text      | string, JSX.Element               |                       | текст на кнопке             |
| type      | 'default', 'primary', 'secondary' | 'default'             | тип стилизации кнопки       |

События:

| имя     | тип             | описание                              |
|---------|-----------------|---------------------------------------|
| onClick | (event) => void | срабатывает по клику по кнопке.       |
|         |                 | Не срабатывает если disabled={true}   |


CSS-классы:

* `.ej-components__button`
