'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	console.log(pathname)

	return (
		<div className="navigation">
			<button
				className="menu-toggle"
				onClick={toggleMenu}
				type="button"
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				<span className="menu-icon">
					<span className={isMenuOpen ? 'open' : ''}></span>
					<span className={isMenuOpen ? 'open' : ''}></span>
					<span className={isMenuOpen ? 'open' : ''}></span>
				</span>
			</button>
			<nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
				<Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
					Home
				</Link>
				<Link href="/privacy" className={`nav-link ${pathname === '/privacy/' ? 'active' : ''}`} onClick={closeMenu}>
					Privacy Policy
				</Link>
				<Link href="/terms" className={`nav-link ${pathname === '/terms/' ? 'active' : ''}`} onClick={closeMenu}>
					Terms of Service
				</Link>
				<Link href="/feedback" className={`nav-link ${pathname === '/feedback/' ? 'active' : ''}`} onClick={closeMenu}>
					Feedback
				</Link>
			</nav>
		</div>
	)
}
