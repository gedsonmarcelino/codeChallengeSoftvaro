import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { act } from 'react-dom/test-utils'
import AuthSocial from "."

window.alert = jest.fn()

describe('AuthSocial - Component', () => {

	it('should show login button google.', () => {
		render(<AuthSocial />)
		expect(screen.getByTestId('googleButton')).toBeInTheDocument()
	})

	it('should login in google.', async () => {
		render(<AuthSocial />)

		const button = screen.getByTestId('googleButton')

		act(() => {
			fireEvent.click(button)
		})

		await waitFor(() => {
			expect(screen.getByText('...')).toBeInTheDocument()
		})

		expect(window.alert).toHaveBeenCalled()
		expect(screen.getByText('Google')).toBeInTheDocument()
	})
})