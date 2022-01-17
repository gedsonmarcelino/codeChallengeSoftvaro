import React, { useState } from 'react'
import { loginGoogle } from '../../services/auth'


function AuthSocial() {
	// --- States ---
	const [loading, setLoading] = useState(false)

	// --- Handlers ---
	async function handleGoogleAuth() {
		setLoading(true)

		const result = await loginGoogle()
		if (!result) alert('Sorry, Something has happened wrong. Try to connect again.')
		else alert('It will be redirected to an especific path.')

		setLoading(false)
	}

	// --- Renders ---
	return (
		<>
			<button type="button" onClick={handleGoogleAuth} disabled={loading}>
				{!loading ? 'Google' : '...'}
			</button>
		</>
	)
}

export default AuthSocial
