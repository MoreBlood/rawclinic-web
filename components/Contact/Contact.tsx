import { config } from '@/config'
import styles from './Contact.module.scss'

interface ContactProps {
	title?: string
	description?: string
}

export default function Contact({
	title = 'Contact Us',
	description = 'If you have any questions, please contact us at:'
}: ContactProps) {
	// example: artihovich.it+rawclinic@gmail.com -> artihovich.it@gmail.com
	const emailWithoutPlus = `${config.contactEmail.split('+')[0]}@${config.contactEmail.split('@')[1]}`

	return (
		<div className={styles.contact}>
			<h2>{title}</h2>
			<p>{description}</p>
			<p>
				<a href={`mailto:${config.contactEmail}`}>{emailWithoutPlus}</a>
			</p>
		</div>
	)
}
