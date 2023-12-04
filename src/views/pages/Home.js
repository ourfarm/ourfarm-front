import kind from '@enact/core/kind';
import { Skinnable } from '@enact/ui/Skinnable';
import { ImageItem } from '@enact/sandstone/ImageItem'

const Home = kind({
	name: 'Home',

	

	render: (props) => (
		<>
				<ImageItem
					orientation="vertical"
					src={{
						fhd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 300 300\' width=\'300\' height=\'300\'%3E%3Crect width=\'300\' height=\'300\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E300 X 300%3C/text%3E%3C/svg%3E',
						hd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E200 X 200%3C/text%3E%3C/svg%3E',
						uhd: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 600\' width=\'600\' height=\'600\'%3E%3Crect width=\'600\' height=\'600\' fill=\'%237ed31d\'%3E%3C/rect%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'36px\' fill=\'%23ffffff\'%3E600 X 600%3C/text%3E%3C/svg%3E'
					}}
					style={{
						height: '30rem',
						position: 'absolute',
						width: '20rem'
					}}
				>
				</ImageItem>

		</>
	)
});

export default Home;
