# Библиотека компонентов (@ej/components) #
## Установка ##
Создать в корне проекта файл .npmrc с содержимым:

    @common:registry=http://flashdev.od.ua:4873/
    @ej:registry=http://flashdev.od.ua:4873/
    @types:registry=https://registry.npmjs.org/

В командной строке выполнить команду:

    npm i @ej/components --save-dev
    
## Компоненты ##
### Alert ###
 
Панель оповещения  
Простое использование:

```tsx
<Alert>Поле c сообщением</Alert>
```

Расширенное использование:

```tsx
<Alert bsStyle='warning'>
  <strong>{"Warning!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
</Alert>
```

или
```tsx
<Alert bsStyle='danger'>
  <strong>{"Error!"}</strong> Поле сообщения со <a href='javascript://'>ссылкой</a>
</Alert>
```
Свойства:

| имя       | тип                                    | значение по умолчанию | описание                    |
|-----------|----------------------------------------|-----------------------|-----------------------------|
| className | string                                 |                       | дополнительный CSS-класс    |
| bsStyle   | "success", "warning", "danger", "info" | "info"                | стилизация панели           |

События:

| имя     | тип        | описание                          |
|---------|------------|-----------------------------------|
| onClick | () => void | срабатывает по клику по панели.   |
| onClose | () => void | срабатывает по клику по крестику. |


CSS-классы:

* ej-components__alert

### Button ###
 
Кнопка  
Простое использование:

```tsx
<Button />;
```

Расширенное использование:

```tsx
<Button text={"Текст на кнопке"} disabled={true} className={'some-css-class'} />
```

или
```tsx
<Button disabled={true} className={'some-css-class'} >
  <span>Текст на кнопке</span>
</Button>
```
Свойства:

| имя       | тип     | значение по умолчанию | описание                    |
|-----------|---------|-----------------------|-----------------------------|
| className | string  | ej-components__button | дополнительный CSS-класс    |
| disabled  | boolean | false                 | кнопка активна / не активна |
| text      | string  |                       | текст на кнопке             |

События:

| имя     | тип             | описание                                                              |
|---------|-----------------|-----------------------------------------------------------------------|
| onClick | (event) => void | срабатывает по клику по кнопке. Не срабатывает если кнопка не активна |


CSS-классы:

* ej-components__button

### Checkbox ###
Галочка  
Простое использование:
```tsx
    <Checkbox />
```
Расширенное использование:
```tsx
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
|----------|-------------------------------------------|-----------------------------------------------------------------------|
| onChange | (checked: boolean, name?: string) => void | срабатывает при измении состояния галочки. Не срабатывает если галочка не активна. |

Параметры:

    * checked: boolean - включена галочка или нет;
    * name: string - имя галочки, если имя было передано, если нет то undefined;
    
CSS-классы:

* ej-components__checkbox
    * ej-components__checkbox-icon__checked - класс иконки включенной галочки;
    * ej-components__checkbox-icon__unchecked - класс иконки выключенной галочки;

### ExpandablePanel ###
Раскрывающаяся панель  
Простое использование:

    <ExpandablePanel />
    
Расширенное использование:

    const header: JSX.Element = (
            <span>
                Текст в заголовке
            </span>
        );
    ...
    <ExpandablePanel header={header} defaultExpanded={true} />

Свойства:

* header: JSX.Element - содержимое заголовка панели;
* defaultExpanded: boolean - должна ли панель быть по умолчаниб развернута или нет;

События:  
Компонент не имеет событий  

CSS-классы:  

* ej-components__expandable-panel
    * ej-components__expandable-panel-header - класс заголовка панели;
        * ej-components__expandable-panel-header-icon - класс иконки в заголовке панели;

### Userpic ###
Аватарка пользователя  
Простое использовани:
```tsx
<Userpic size={'40x40'} />
```
Расширенное использование:
   
   			<Userpic size={'40x40'}
   					 href={'http://example.com/'}
   					 target={'_self'}
   					 alt={'Всплавающая подсказка'}
   					 src={'/path/to/my/image.png'}
   					 className={'some-css-class'}
   					 userId={5} />
   					 
Свойства:

* size: UserpicSize - обязательное поле! Размер аватарки. Допустимые значения: 40x40, 50x50, 80x80, 150x150, 200x200;
* href: string - ссылка по которой произойдет переход при клике;
* target: LinkTarget - где должна открываться страница при клике. Допустимые значение: _blank, _self, _parent, _top. По умолчанию: _blank;
* alt: string - текст с всплывающей подсказкой;
* src: string - адрес аватарки. По умолчанию: @todo подкорректировать путь;
* className: string - дополнительный CSS-класс;
* userId: number - идентификатор пользователя;

События:

* onClick: (userId: number) => void - срабатывает по клику по аватарке;

CSS-классы:  

* ej-components__userpic-40x40
* ej-components__userpic-50x50
* ej-components__userpic-80x80
* ej-components__userpic-150x150
* ej-components__userpic-200x200

Недоработки:

* Подправить пути к аватаркам по умолчанию;
* Сделать поведение по умолчанию: по клику открывать страницу пользователя в новом окне;

### Text ###
текст в тэге `<span>`

Простое использование:
```tsx
<Text>{`пример текста`}</Text>
```    
Расширенное использование:
```tsx
<Text text={"пример текст"} type={`secondary`} className={'some-css-class'} />
```
или
```tsx
<Text type={`label`} className={'some-css-class'} >
  <span>пример текстa с разметкой</span>
</Text>
```
Свойства:

| props | тип | значение по умолчанию | описание |
|-------|-----|-----------------------|----------|
| className | string | | дополнительный CSS-класс |
| text | string, JSX.Element | | текст или JSX разметка |
| type | "primary", "secondary", "label" | "primary" | тип стилизации текста |

CSS-классы:

* ej-components__text

## Cборка ##
$ grunt build
