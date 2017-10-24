### PaginationPanel ###
Пагинация

Использование:

```
<PaginationPanel
 pageCount={20}
 currentPage={5}
 onChange={(page)=>console.log('PgP =>', page)}
/>
```
Свойства:

| имя         | тип    | описание                 |
|-------------|--------|--------------------------|
| className   | string | дополнительный CSS-класс |
| pageCount   | number | количечтво страниц       |
| currentPage | number | текущая страница         |

События:

| имя      | тип            | описание                                 |
|----------|----------------|------------------------------------------|
| onChange | (page) => void | срабатывает при клике по номеру страницы |

* `.ej-components__pagination-panel`
