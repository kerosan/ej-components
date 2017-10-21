### ExpandablePanel ###
Раскрывающаяся панель  
Простое использование:
```
<ExpandablePanel>
  <div>контент</div>
</ExpandablePanel>
```
Расширенное использование:
```
const header: JSX.Element = (
  <span>
    Текст в заголовке
  </span>
);
...
<ExpandablePanel header={header} defaultExpanded={true}>
  <div>контент</div>
</ExpandablePanel>
```
Свойства:

| имя             | тип         | значение по умолчанию | описание                                              |
|-----------------|-------------|-----------------------|-------------------------------------------------------|
| defaultExpanded | boolean     | false                 | должна ли панель быть по умолчаниб развернута или нет |
| header          | JSX.Element |                       | обязательное поле, содержимое заголовка панели        |

События:  
Компонент не имеет событий

CSS-классы:

* `.ej-components__expandable-panel`
    * `.ej-components__expandable-panel-header` - класс заголовка панели;
        * `.ej-components__expandable-panel-header-icon` - класс иконки в заголовке панели;
