import React, { useState } from 'react'
import { loginGoogle } from '../../services/auth'

import IconGoogle from '../../images/icon-google.png'
import './styles.scss'
import { useUserContext } from '../../store'

interface Props {
	onCloseModal: () => void
}

function AuthSocial({ onCloseModal }: Props) {
	// --- Hooks --- 
	const { setUserData } = useUserContext()

	// --- States ---
	const [loading, setLoading] = useState(false)

	// --- Handlers ---
	// eslint-disable-next-line consistent-return
	async function handleGoogleAuth() {
		setLoading(true)

		const result = await loginGoogle()
		// eslint-disable-next-line no-alert
		if (!result) alert('Sorry, Something has happened wrong. Try to connect again.')
		else {
			setUserData(result.user)
			return onCloseModal()
		}

		setLoading(false)
	}

	// --- Renders ---
	return (
		<div className='social-content'>
			<h2>Sign In</h2>
			<p>Select an option below to connect with us.</p>
			<button className='button-google' data-testid="googleButton" type="button" onClick={handleGoogleAuth} disabled={loading}>
				{!loading
					?
					<>
						<img src={IconGoogle} width={26} height={26} alt="Google" />
						<span>Google</span>
					</>
					:
					<span>...</span>
				}
			</button>
		</div>
	)
}

export default AuthSocial
