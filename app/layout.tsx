import type { Viewport } from 'next'
import Navigation from '@/components/Navigation'
import { baseMetadata } from '@/lib/metadata'
import '@/styles/index.scss'

export const metadata = baseMetadata

export const viewport: Viewport = {
	colorScheme: 'light dark'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
