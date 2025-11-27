import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Content from '@/components/Content'
import Subtitle from '@/components/Subtitle'
import { config } from '@/config'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta({
	title: 'Home',
	description:
		'Professional RAW photo editing for iOS. Edit RAW photos directly on your device with 100% local processing and no data collection. Support for various RAW formats.',
	path: '/',
	keywords: ['RAW formats', 'local processing', 'privacy']
})

export default function Home() {
	return (
		<Container>
			<h1>{config.appName}</h1>
			<Subtitle>Professional RAW photo editing for iOS</Subtitle>

			<Content>
				<h2>About</h2>
				<p>
					{config.appName} is a powerful mobile application for editing RAW photo files directly on your iOS device. All
					processing happens locally on your device, ensuring your photos remain private and secure.
				</p>

				<h2>Features</h2>
				<ul>
					<li>Edit RAW photos with professional tools</li>
					<li>100% local processing - no data collection</li>
					<li>Support for various RAW formats</li>
					<li>Save edited photos to your library</li>
				</ul>

				<Contact />
			</Content>
		</Container>
	)
}
