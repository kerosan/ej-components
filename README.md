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

    <Userpic size={'40x40'} />
    
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

### Preloader ###
Прелоадер
Простое использование:

    <Preloader />

Расширенное использование:

    <Preloader inline style={{top:'10px', left:'10px'}} className={'some-css-class'} />

или

    <Preloader style={{top:'10px', left:'10px'}} className={'some-css-class'} />

Свойства:

* className: string - дополнительный CSS-класс;
* style: {} - стили в js нотации;
* inline: boolean - Если inline === false, то прелоадер рендерится как модальное окно, иначе, как инлайн-блок;

События:

* нет событий

CSS-классы:

* ej-components__preloader
* ej-components__preloaderGif
