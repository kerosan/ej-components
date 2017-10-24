### Title ###
Заголовок

Простое использование:
```
<Title>{`пример текста`}</Title>
```    
Расширенное использование:
```
<Title text={'пример текст'} className={'some-css-class'} />
```
или
```
<Title type={`h2`} className={'some-css-class'} >
  <span>пример заголовка с разметкой</span>
</Title>
```
Свойства:

| props     | тип                    | значение по умолчанию | описание                                    |
|-----------|------------------------|-----------------------|---------------------------------------------|
| className | string                 |                       | дополнительный CSS-класс                    |
| text      | string, JSX.Element    |                       | текст или JSX разметка                      |
| type      | 'h1', 'h2', 'h3', 'h4' | 'h1'                  | тип стилизации заголовка                    |
| inline    | boolean                | false                 | если true, то заголовок становится строчный |

CSS-классы:

* `.ej-components__title`
* `.ej-components__title_h1`
* `.ej-components__title_h2`
* `.ej-components__title_h3`
* `.ej-components__title_h4`
