import type { Metadata } from 'next'
import { config } from '@/config'

function getBaseUrl(): string {
	// Если задан BASE_URL в переменных окружения
	if (process.env.BASE_URL) {
		return process.env.BASE_URL
	}

	// Если это GitHub Pages, строим URL на основе репозитория
	if (process.env.GITHUB_REPOSITORY) {
		const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
		const username = process.env.GITHUB_REPOSITORY.split('/')[0]

		// Для username.github.io используем корневой домен
		if (repoName.endsWith('.github.io')) {
			return `https://${username}.github.io`
		}

		// Иначе используем путь /repo-name/
		return `https://${username}.github.io/${repoName}`
	}

	// По умолчанию используем production URL
	// В локальной разработке используем localhost:3000 (стандартный порт Next.js)
	return process.env.NODE_ENV === 'development'
		? `http://localhost:${process.env.PORT || '3000'}`
		: 'https://rawclinic.app'
}

const baseUrl = getBaseUrl()
const siteName = config.appName

interface GenerateMetadataOptions {
	title: string
	description: string
	path?: string
	keywords?: string[]
	noindex?: boolean
}

export function generateMetadata({
	title,
	description,
	path = '',
	keywords = [],
	noindex = false
}: GenerateMetadataOptions): Metadata {
	const url = `${baseUrl}${path}`
	const fullTitle = path ? `${title} | ${siteName}` : siteName

	return {
		title: fullTitle,
		description,
		keywords: [
			'RAW photo editing',
			'iOS photo editor',
			'RAW files',
			'photo editing app',
			'privacy-focused photo editor',
			'local photo processing',
			'mobile photography',
			'RAW converter',
			...keywords
		],
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url,
			siteName,
			title: fullTitle,
			description,
			images: [
				{
					url: '/og-image.png',
					width: 1200,
					height: 630,
					alt: siteName
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description,
			images: ['/og-image.png']
		},
		alternates: {
			canonical: url
		},
		robots: {
			index: !noindex,
			follow: true,
			googleBot: {
				index: !noindex,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		}
	}
}

export const baseMetadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`
	},
	description:
		'Professional RAW photo editing for iOS. Edit RAW photos directly on your device with 100% local processing and no data collection.',
	keywords: [
		'RAW photo editing',
		'iOS photo editor',
		'RAW files',
		'photo editing app',
		'privacy-focused photo editor',
		'local photo processing',
		'mobile photography',
		'RAW converter'
	],
	authors: [{ name: siteName }],
	creator: siteName,
	publisher: siteName,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseUrl,
		siteName,
		title: siteName,
		description:
			'Professional RAW photo editing for iOS. Edit RAW photos directly on your device with 100% local processing and no data collection.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: siteName
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: siteName,
		description:
			'Professional RAW photo editing for iOS. Edit RAW photos directly on your device with 100% local processing and no data collection.',
		images: ['/og-image.png']
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	}
}
