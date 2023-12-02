import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { Skinnable } from '@enact/ui/Skinnable';
import { ImageItem } from '@enact/sandstone/ImageItem'
import { Item } from '@enact/sandstone/Item'
import { Icon } from '@enact/sandstone/Icon'

const Status = kind({
	name: 'Status',

	render: (props) => (
		<>
			<Item slotBefore={<Icon>playcircle</Icon>}>
				Single Item
			</Item>
		</>
	)
});

export default Status;
