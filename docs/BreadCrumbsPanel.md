
### BreadCrumbsPanel ###

Хлебные крошки

Использование:

```
<BreadCrumbsPanel
  items={[
    {id: 0, href: '/', title: 'Home'},
    {href: 'http://google.com', title: 'My Page'},
    {id: 2, href: 'http://i.ua', title: 'My Site'},
    {title: 'Settings'}
  ]}
  onClick={(arg) => console.log('BC => ', arg)}
  currentId={2}
/>
```
Свойства:

| имя         | тип                               | значение по умолчанию | описание                   |
|-------------|-----------------------------------|-----------------------|----------------------------|
| className   | string                            |                       | дополнительный CSS-класс   |
| items       | ILinks                            |                       | массив ссылок ILink        |
| currentId   | number                            |                       | выделенный элемент по id   |
| currentHref | string                            |                       | выделенный элемент по href |

События:

| имя     | тип             | описание                        |
|---------|-----------------|---------------------------------|
| onClick | (event) => void | срабатывает по клику по ссылке. |


CSS-классы:

* `.ej-components__breadcrumbs`
* `.ej-components__breadcrumb-item`
* `.ej-components__breadcrumbs-delimiter`
