import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { TabLayout, Tab } from '@enact/sandstone/TabLayout';
import { Skinnable } from '@enact/ui/Skinnable';
import { ImageItem } from '@enact/sandstone/ImageItem'
import { Item } from '@enact/sandstone/Item'
import { Icon } from '@enact/sandstone/Icon'

const Home = kind({
	name: 'Home',

	render: (props) => (
		<Tab {...props}>
			<Skinnable>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 1
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 2
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 3
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 4
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 5
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 6
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 7
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 8
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 9
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 10
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 11
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 12
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 13
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 14
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 15
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 16
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 17
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 18
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 19
				</ImageItem>
				<ImageItem
					inline
					label="ImageItem label"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
					style={{
						height: '12.25rem',
						width: '16rem'
					}}
				>
					ImageItem 20
				</ImageItem>
			</Skinnable>
		</Tab>
	)
});

export default Home;
