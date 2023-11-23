import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { Skinnable } from '@enact/ui/Skinnable';
import { ImageItem } from '@enact/sandstone/ImageItem'
import { Item } from '@enact/sandstone/Item'
import { Icon } from '@enact/sandstone/Icon'

const Control = kind({
	name: 'Control',

	render: (props) => (
		<Tab
			{...props}
		>
			<Button icon="demosync">
				Button 1
			</Button>
			<Button icon="demosync">
				Button 2
			</Button>
			<Button icon="demosync">
				Button 3
			</Button>
			<Button icon="demosync">
				Button 4
			</Button>
			<Button icon="demosync">
				Button 5
			</Button>
		</Tab>
	)
});

export default Control;