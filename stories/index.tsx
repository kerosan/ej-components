import '../style/fonts.scss';
import 'react-widgets/lib/scss/react-widgets.scss';

import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setOptions({
	name: 'EJ Components',
	url: 'http://diary-gitlab.abatapka.net/EJ/libs/components',
	downPanelInRight: false,
});

setDefaults({
	header: false, // Toggles display of header with component name and description
	inline: true, // Displays info inline vs click button to view
	source: true, // Displays the source of story Component
	propTables: false, // [/* Components used in story */], // displays Prop Tables with this components
	propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
	styles: {}, // Overrides styles of addon
	marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
	maxPropsIntoLine: 1, // Max props to display per line in source code
	maxPropObjectKeys: 10,
	maxPropArrayLength: 10,
	maxPropStringLength: 100,
});

require('./Alert');
require('./BreadCrumbsPanel');
require('./Button');
require('./Checkbox');
require('./DatePicker');
require('./DropMenu');
require('./ExpandablePanel');
require('./FooterPanel');
require('./Input');
require('./Link');
require('./List');
require('./ListItem');
require('./PaginationPanel');
require('./PerPagePanel');
require('./SelectablePanel');
require('./Text');
require('./TextArea');
require('./Title');
require('./Userpic');
