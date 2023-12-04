import kind from '@enact/core/kind';
import SwitchItem from '@enact/sandstone/SwitchItem'
import Button from '@enact/sandstone/Button';

const Control = kind({
	name: 'Control',

	render: (props) => (
		<>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>
				Hello SwitchItem
			</SwitchItem>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>
				Hello SwitchItem
			</SwitchItem>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>
				Hello SwitchItem
			</SwitchItem>
			<SwitchItem
				onToggle={function noRefCheck() { }}
			>
				Hello SwitchItem
			</SwitchItem>
		</>
	)
});

export default Control;