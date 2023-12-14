import kind from '@enact/core/kind';
import SwitchItem from '@enact/sandstone/SwitchItem'
import Item from '@enact/sandstone/Item'

import Button from '@enact/sandstone/Button';

const Control = kind({
	name: 'Control',

	render: (props) => (
		<>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>Auto Mode
			</SwitchItem>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>LED
			</SwitchItem>
		</>
	)
});

export default Control;