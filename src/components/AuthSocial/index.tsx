import React, { useState } from 'react'
import { loginGoogle } from '../../services/auth'


function AuthSocial() {
	// --- States ---
	const [loading, setLoading] = useState(false)

	// --- Functions ---
	async function handleGoogleAuth() {
		setLoading(true)
		const result = await loginGoogle()
		if (!result) alert('Sorry, Something happened wrong. Try to connect again.')
		setLoading(false)
	}

	// --- Renders ---
	return (
		<>
			<button type="button" onClick={handleGoogleAuth}>
				{!loading ? 'Google' : '...'}
			</button>
		</>
	)
}

export default AuthSocial
