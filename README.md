# Библиотека компонентов (@ej/components) #
## Установка ##
Создать в корне проекта файл .npmrc с содержимым:

	@ej:registry=http://flashdev.od.ua:4873/
	@common:registry=http://flashdev.od.ua:4873/
	@types:registry=https://registry.npmjs.org/
	@storybook:registry=https://registry.npmjs.org/
	@hypnosphi:registry=https://registry.npmjs.org/
	always-auth=true
	registry=http://flashdev.od.ua:4873/

В командной строке выполнить команду:

    $ npm i @ej/components --save-dev

Build
    	
    npm run build-storybook
    
Development
		
	npm run storybook
	    
Demo
----
[Посмотреть demo тут](http://editor.abatapka.net/components/)
## Компоненты ##

[Alert](docs/Alert.md)		
[BreadCrumbsPanel](docs/BreadCrumbsPanel.md)		
[Button](docs/Button.md)		
[Checkbox](docs/Checkbox.md)		
[DatePicker](docs/DatePicker.md)		
[ExpandablePanel](docs/ExpandablePanel.md)		
[FooterPanel](docs/FooterPanel.md)		
[Input](docs/Input.md)		
[Link](docs/Link.md)		
[List](docs/List.md)		
[ListItem](docs/ListItem.md)		
[PaginationPanel](docs/PaginationPanel.md)		
[PerPagePanel](docs/PerPagePanel.md)		
[RadioButton](docs/RadioButton.md)		
[SelectablePanel](docs/SelectablePanel.md)		
[Text](docs/Text.md)		
[TextArea](docs/TextArea.md)		
[Title](docs/Title.md)		
[Userpic](docs/Userpic.md)		

Недоработки:
------------
* Подправить пути к аватаркам по умолчанию;
* Сделать поведение по умолчанию: по клику открывать страницу пользователя в новом окне;
