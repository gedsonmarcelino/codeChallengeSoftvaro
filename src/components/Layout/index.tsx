import React from 'react'
import Footer from '../container/Footer'
import Header from '../container/Header'
import Hero from '../container/Hero'

import './styles.scss'

interface Props {
	children: React.ReactElement
}

function Layout({ children }: Props) {
	return (
		<div id='main'>
			<Header />
			<Hero />
			<div id='page-content'>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout