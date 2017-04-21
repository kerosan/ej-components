# Библиотека компонентов (@ej/components) #
## Установка ##
Создать в корне проекта файл .npmrc с содержимым:

    @common:registry=http://flashdev.od.ua:4873/
    @ej:registry=http://flashdev.od.ua:4873/
    @types:registry=https://registry.npmjs.org/

В командной строке выполнить команду:

    npm i @ej/components --save-dev
    
## Компоненты ##
### Button ###
Кнопка
Простое использование:

    <Button />
    
Расширенное использование:

    <Button text={"Текст на кнопке"} disabled={true} className={'some-css-class'} />

или

    <Button disabled={true} className={'some-css-class'} >
        <span>Текст на кнопке</span>
    </Button>

Подключение CSS-стилей в проекте:

    @todo

Свойства:

* className: string - дополнительный CSS-класс;
* disabled: boolean - кнопка активна / не активна;
* text: string - текст на кнопке;

События:

* onClick(): void - срабатывает по клику по кнопке. Не срабатывает если кнопка не активна;

CSS-классы:

* ej-components__button

### Checkbox ###
Галочка
Простое использование:

    <Checkbox />
    
Расширенное использование:

    <Checkbox name={'checkbox-name'}
              label={'Текст'}
              className={'some-css-class'}
              checked={true}
              disabled={true}
              inline={true}
              clickCapture={true} />

Подключение CSS-стилей в проекте:

    @todo

Свойства:

* checked: boolean - включена галочка или нет;
* className: string - дополнительный CSS-класс;
* clickCapture: boolean - прекращать или нет дальнейшую передачу текущего события;
* disabled: boolean - галочка активна / не активна;
* inline: boolean - добаляет CSS-класс "inline" (@todo уточнить подробности у Коли);
* label: string - текст рядом с галочкой;
* name: string - имя галочки;

События:

* onChange(checked: boolean, name?: string): void - срабатывает при измении состояния галочки.
Не срабатывает если галочка не активна. Параметры:
    * checked: boolean - включена галочка или нет;
    * name: string - имя галочки, если имя было передано, если нет то undefined;
    
CSS-классы:

* ej-components__checkbox
    * ej-components__checkbox-icon__checked - класс иконки включенной галочки;
    * ej-components__checkbox-icon__unchecked - класс иконки выключенной галочки;

### ExpandablePanel ###
### Userpic ###