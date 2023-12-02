import kind from '@enact/core/kind';

import Button from '@enact/sandstone/Button';

const Control = kind({
	name: 'Control',

	render: (props) => (
		<>
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
		</>
	)
});

export default Control;