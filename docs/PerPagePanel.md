### PerPagePanel ###
Количество элементов на страницу

Использование:
```
<PerPagePanel
  values={[10,20,30,40]}
  value={20}
  label='Отображать по'
  onChange={(digit)=>console.log('PP =>',digit)}
/>
```
Свойства:

| имя       | тип      | описание                            |
|-----------|----------|-------------------------------------|
| className | string   | дополнительный CSS-класс            |
| values    | number[] | массив значений итемов на страницу  |
| value     | number   | текущее значение итемов на страницу |
| label     | string   | текст рядом с радио-кнопкой         |

События:

| имя      | тип             | описание                              |
|----------|-----------------|---------------------------------------|
| onChange | (value) => void | срабатывает при клике по числу итемов |

* `.ej-components__per-page-panel`
