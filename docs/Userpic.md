### Userpic ###
Аватарка пользователя

Простое использование:
```
<Userpic size={'40x40'} />
```
Расширенное использование:
```
<Userpic size={'40x40'}
  href={'http://example.com/'}
  target={'_self'}
  alt={'Всплавающая подсказка'}
  src={'/path/to/my/image.png'}
  className={'some-css-class'}
  userId={5} />
```
Свойства:

| имя       | тип         | значение по умолчанию | описание                                                   |
|-----------|-------------|-----------------------|------------------------------------------------------------|
| alt       | string      |                       | текст с всплывающей подсказкой                             |
| className | string      |                       | дополнительный CSS-класс                                   |
| href      | string      | 'javascript://'       | ссылка по которой произойдет переход при клике             |
| size      | UserpicSize |                       | обязательное поле! Размер аватарки.                        |
| src       | string      |                       | адрес аватарки. По умолчанию: @todo подкорректировать путь |
| target    | LinkTarget  | '_blank'              | где должна открываться страница при клике.                 |
| userId    | number      |                       | идентификатор пользователя                                 |

События:

| имя     | тип                      | описание                         |
|---------|--------------------------|----------------------------------|
| onClick | (userId: number) => void | срабатывает по клику по аватарке |

CSS-классы:

* `.ej-components__userpic-40x40`
* `.ej-components__userpic-80x80`
* `.ej-components__userpic-200x200`
