import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';

import Home from '../pages/Home';
import Status from '../pages/Status';
import Control from '../pages/Control';
import Setting from '../pages/Setting';

const TemplatePanel = kind({
	name: 'TemplatePanel',

	render: (props) => (
		<Panel {...props}>
			<Header
				subtitle="OURFARM"
				title="홍길동"
			/>
			<TabLayout
				onSelect={function noRefCheck() { }}
				onTabAnimationEnd={function noRefCheck() { }}
				orientation="vertical"
				tabSize={null}
			>
				<Tab icon="home" title="Home">
					<Home></Home>
				</Tab>
				<Tab icon="dashboard1" title="Status">
					<Status></Status>
				</Tab>
				<Tab icon="controller" title="Control">
					<Control></Control>
				</Tab>
				<Tab icon="gear" title="Setting">
					<Setting></Setting>
				</Tab>
			</TabLayout>
		</Panel>
	)
});

export default TemplatePanel;
