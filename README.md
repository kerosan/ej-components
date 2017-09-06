# Библиотека компонентов (@ej/components) #
## Установка ##
Создать в корне проекта файл .npmrc с содержимым:

    @common:registry=http://flashdev.od.ua:4873/
    @ej:registry=http://flashdev.od.ua:4873/
    @types:registry=https://registry.npmjs.org/

В командной строке выполнить команду:

    npm i @ej/components --save-dev
    
Demo
----
[Посмотреть demo тут](http://editor.abatapka.net/components/)
## Компоненты ##
### Alert ###
 
Панель оповещения

Простое использование:

```
<Alert>
  Поле c сообщением
</Alert>
```

Расширенное использование:

```
<Alert bsStyle='warning'>
  <strong>{"Warning!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
</Alert>
```

или
```
<Alert bsStyle='danger'>
  <strong>{"Error!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
</Alert>
```
Свойства:

| имя       | тип                                    | значение по умолчанию | описание                    |
|-----------|----------------------------------------|-----------------------|-----------------------------|
| bsStyle   | "success", "warning", "danger", "info" | "info"                | стилизация панели           |
| className | string                                 |                       | дополнительный CSS-класс    |

События:

| имя     | тип        | описание                                        |
|---------|------------|-------------------------------------------------|
| onClick | () => void | срабатывает по клику по панели.                 |
| onClose | () => void | срабатывает по клику на крестик.                |
|         |            | (если нет обработчика, крестик не отображается) |


CSS-классы:

* .ej-components__alert

### Button ###
 
Кнопка

Простое использование:

```
<Button />;
```

Расширенное использование:

```
<Button text={"Текст на кнопке"} disabled={true} className={'some-css-class'} />
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
| type      | "default", "primary", "secondary" | "default"             | текст на кнопке             |

События:

| имя     | тип             | описание                              |
|---------|-----------------|---------------------------------------|
| onClick | (event) => void | срабатывает по клику по кнопке.       |
|         |                 | Не срабатывает если disabled={true}   |


CSS-классы:

* .ej-components__button

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

| имя      | тип                                       | описание                                                              |
|----------|-------------------------------------------|--------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния галочки. |
|          |                                           | Не срабатывает если disabled={true}        |

Параметры:

    * checked: boolean - включена галочка или нет;
    * name: string - имя галочки, если имя было передано, если нет то undefined;
    
CSS-классы:

* .ej-components__checkbox
    * .ej-components__checkbox-icon__checked - класс иконки включенной галочки;
    * .ej-components__checkbox-icon__unchecked - класс иконки выключенной галочки;

### ExpandablePanel ###
Раскрывающаяся панель  
Простое использование:
```
<ExpandablePanel />
```
Расширенное использование:
```
const header: JSX.Element = (
  <span>
    Текст в заголовке
  </span>
);
...
<ExpandablePanel header={header} defaultExpanded={true} />
```
Свойства:

| имя             | тип         | значение по умолчанию | описание                                             |
|-----------------|-------------|-----------------------|------------------------------------------------------|
| defaultExpanded | boolean     | false                 |должна ли панель быть по умолчаниб развернута или нет |
| header          | JSX.Element |                       |содержимое заголовка панели                           |

События:  
Компонент не имеет событий  

CSS-классы:  

* .ej-components__expandable-panel
    * .ej-components__expandable-panel-header - класс заголовка панели;
        * .ej-components__expandable-panel-header-icon - класс иконки в заголовке панели;

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

| имя          | тип     | значение по умолчанию | описание                                           |
|--------------|---------|-----------------------|----------------------------------------------------|
| className    | string  |                       | дополнительный CSS-класс                           |
| error        | boolean | false                 | ошибка валидации                                   |
| message      | string  |                       | текст сообщения ошибки/предупреждения валидации    |
| placeholder  | string  |                       | текст приглашения при незаполненном поле           |
| type         | string  | "text"                | тип поля ввода `<input>`: text, password, email... |
| value        | string  |                       | значение записанное в поле ввода                   |
| warning      | boolean | false                 | предупреждение валидации                           |


События:

| имя      | тип        | описание                                    |
|----------|------------|---------------------------------------------|
| onChange | (event) => void | срабатывает при измении текста в поле ввода |

CSS-классы:  

* .ej-components__input
   * .ej-components__input-validation-error - окрашивает рамку в красный цвет
   * .ej-components__input-validation-warning - окрашивает рамку в оранжевый цвет

### Link ###
Ссылка `<a>`

Простое использование:
```
<Link>
  Ссылка
</Link>
```
Расширенное использование:
```
<Link type="primary" href="http://google.com">
  Ссылка
</Link>
```
Свойства:

| имя       | тип         | значение по умолчанию | описание                                   |
|-----------|-------------|-----------------------|--------------------------------------------|
| className | string      |                       | дополнительный CSS-класс                   |
| href      | string      |                       | URL ссылки                                 |
| target    | LinkTarget  | "_self"               | где должна открываться страница при клике. |
| text      | string      |                       | текст ссылки                               |
| type      | string      | "default"             | тип ссылки:  default, primary              |

События:

| имя     | тип        | описание                                               |
|---------|------------|--------------------------------------------------------|
| onClick | () => void | обработчик клика, если объявлен то href игнорируется |

CSS-классы:  

* .ej-components__link

### List ###
Список `<ul>`

Простое использование:
```
<List>
  <ListItem>Элемент списка</ListItem>
</List>
```

Свойства:

| имя        | тип         | значение по умолчанию | описание                 |
|------------|-------------|-----------------------|--------------------------|
| className  | string      |                       | дополнительный CSS-класс |
| emptyTitle | string      | "Empty list"          | заголовок пустого списка |
| items      | ListItem[]  |                       | массив элементов списка  |

CSS-классы:

* .ej-components__list

### ListItem ###
Элемент списка `<li>`

Простое использование:
```
<ListItem>
  Элемент списка
</ListItem>
```
Расширенное использование:
```
<ListItem 
  selected={true}
  disabled={false}
  text="Строка 1"
  onClick={() => console.log('Выбрана строка 1')}
/>
```
Свойства:

| имя        | тип                 | значение по умолчанию | описание                       |
|------------|---------------------|-----------------------|--------------------------------|
| className  | string              |                       | дополнительный CSS-класс       |
| empty      | boolean             | false                 | заголовок пустого списка       |
| text       | string, JSX.Element |                       | текст или разметка строки      |
| selected   | boolean             | false                 | помечает строку как выделенную |
| disabled   | boolean             | false                 | "отключает" элемент списка     |

События:

| имя     | тип        | описание         |
|---------|------------|------------------|
| onClick | () => void | обработчик клика |

CSS-классы:

* .ej-components__list-item

### RadioButton ###
Радио-кнопка

Простое использование:
```
<RadioButton />
```
Расширенное использование:
```
<RadioButton name={'radio-btn-name'}
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
| checked      | boolean | false                 | включена радио-кнопка или нет                           |
| className    | string  |                       | дополнительный CSS-класс                                |
| clickCapture | boolean | false                 | прекращать или нет дальнейшую передачу текущего события |
| disabled     | boolean | false                 | радио-кнопка активна / не активна                       |
| label        | string  |                       | текст рядом с радио-кнопкой                             |
| name         | string  |                       | имя радио-кнопки                                        |

События:

| имя      | тип                                       | описание                                        |
|----------|-------------------------------------------|-------------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния радио-кнопки. |
|          |                                           | Не срабатывает если disabled={true}             |

Параметры:

    * checked: boolean - включена радио-кнопка или нет;
    * name: string - имя радио-кнопки, если имя было передано, если нет то undefined;
    
CSS-классы:

* .ej-components__radiobutton
    * .ej-components__radiobutton-icon__checked - класс иконки включенной радио-кнопки;
    * .ej-components__radiobutton-icon__unchecked - класс иконки выключенной радио-кнопки;

### SelectablePanel ###
Панель с галочкой

Простое использование:
```
<SelectablePanel>
  <div>контент</div>
</SelectablePanel>

```
Расширенное использование:
```
<SelectablePanel name={'checkbox-name'}
  label={'Текст'}
  className={'some-css-class'}
  checked={true}
  disabled={false}
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

| имя      | тип                                       | описание                                                              |
|----------|-------------------------------------------|--------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния галочки. |
|          |                                           | Не срабатывает если disabled={true}        |

Параметры:

    * checked: boolean - включена галочка или нет;
    * name: string - имя галочки, если имя было передано, если нет то undefined;
    
CSS-классы:

* .ej-components__selectable-panel
    * .ej-components__selectable-panel-icon__checked - класс иконки включенной галочкой;
    * .ej-components__selectable-panel-icon__unchecked - класс иконки выключенной галочкой;

### Text ###
текст в тэге `<span>`

Простое использование:
```
<Text>{`пример текста`}</Text>
```    
Расширенное использование:
```
<Text text={"пример текст"} type={`label`} className={'some-css-class'} />
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
| type      | "default", "primary", "label"   | "default"             | тип стилизации текста    |

CSS-классы:

* .ej-components__text

### TextArea ###
Поле ввода `<textarea>`

Простое использование:
```
<TextArea placeholder='Поле ввода' value='значение'/>
```
Расширенное использование:
```
<TextArea placeholder='Стандартное поле' warning message='Предупреждение.'/>
```
Свойства:

| имя          | тип     | значение по умолчанию | описание                                 |
|--------------|---------|-----------------------|------------------------------------------|
| className    | string  |                       | дополнительный CSS-класс                 |
| placeholder  | string  |                       | текст приглашения при незаполненном поле |
| required     | boolean | false                 | выделяет рамку красным цветом            |
| value        | string  |                       | значение записанное в поле ввода         |


События:

| имя      | тип             | описание                                    |
|----------|-----------------|---------------------------------------------|
| onChange | (event) => void | срабатывает при измении текста в поле ввода |

CSS-классы:

* .ej-components__textarea
* .ej-components__textarea-required - окрашивает рамку в красный цвет

### Title ###
Заголовок

Простое использование:
```
<Title>{`пример текста`}</Title>
```    
Расширенное использование:
```
<Title text={"пример текст"} className={'some-css-class'} />
```
или
```
<Title type={`h2`} className={'some-css-class'} >
  <span>пример заголовка с разметкой</span>
</Title>
```
Свойства:

| props     | тип                             | значение по умолчанию | описание                 |
|-----------|---------------------------------|-----------------------|--------------------------|
| className | string                          |                       | дополнительный CSS-класс |
| text      | string, JSX.Element             |                       | текст или JSX разметка   |
| type      | "h1", "h2", "h3", "h4"          | "h1"                  | тип стилизации заголовка |

CSS-классы:

* .ej-components__title
* .ej-components__title_large
* .ej-components__title_small
* .ej-components__title_bold
* .ej-components__title_grey


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
| href      | string      | "javascript://"       | ссылка по которой произойдет переход при клике             |
| size      | UserpicSize |                       | обязательное поле! Размер аватарки.                        |
| src       | string      |                       | адрес аватарки. По умолчанию: @todo подкорректировать путь |
| target    | LinkTarget  | "_blank"              | где должна открываться страница при клике.                 |
| userId    | number      |                       | идентификатор пользователя                                 |

События:

* onClick: (userId: number) => void - срабатывает по клику по аватарке;

CSS-классы:

* .ej-components__userpic-40x40
* .ej-components__userpic-50x50
* .ej-components__userpic-80x80
* .ej-components__userpic-150x150
* .ej-components__userpic-200x200

Недоработки:
------------
* Подправить пути к аватаркам по умолчанию;
* Сделать поведение по умолчанию: по клику открывать страницу пользователя в новом окне;
