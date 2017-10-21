### Text ###
текст `<span>`

Простое использование:
```
<Text>{`пример текста`}</Text>
```    
Расширенное использование:
```
<Text text={'пример текст'} type={`label`} className={'some-css-class'} />
```
или
```
<Text type={`label`} className={'some-css-class'} >
  <span>пример текстa с разметкой</span>
</Text>
```
Свойства:

| props     | тип                             | значение по умолчанию | описание                 |
|-----------|---------------------------------|-----------------------|--------------------------|
| className | string                          |                       | дополнительный CSS-класс |
| text      | string, JSX.Element             |                       | текст или JSX разметка   |
| type      | 'default', 'primary', 'label'   | 'default'             | тип стилизации текста    |

CSS-классы:

* `.ej-components__text`
