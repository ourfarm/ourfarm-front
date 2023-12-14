import kind from '@enact/core/kind';
import { Item } from '@enact/sandstone/Item'

const Setting = kind({
	name: 'Setting',

	render: (props) => (
		<>
			<Item
				labelPosition="below"
				size="large"
				slotAfter={null}
				slotBefore={null}
			>
				Hello Item
			</Item>
			<Item
				labelPosition="below"
				size="large"
				slotAfter={null}
				slotBefore={null}
			>
				Hello Item
			</Item>
			<Item
				labelPosition="below"
				size="large"
				slotAfter={null}
				slotBefore={null}
			>
				Hello Item
			</Item>
			<Item
				labelPosition="below"
				size="large"
				slotAfter={null}
				slotBefore={null}
			>
				Hello Item
			</Item>
			<Item
				labelPosition="below"
				size="large"
				slotAfter={null}
				slotBefore={null}
			>
				Hello Item
			</Item>
		</>
	)
});

export default Setting;
