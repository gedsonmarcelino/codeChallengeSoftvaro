import {signInWithPopup, getAuth} from "firebase/auth";
import { loginGoogle } from "."

jest.mock('firebase/auth', () => ({
	signInWithPopup: jest.fn(),
	GoogleAuthProvider: jest.fn(),
	getAuth: jest.fn()
}))

describe('Auth - Login Google', () => {

	it('should connect and result user data from firebase authentication.', async () => {
		(signInWithPopup as jest.Mock).mockReturnValue( new Promise( 
			resolve => resolve({
				user: {
					displayName: 'Gedson Marcelino'
				}
			})) )

		const result = await loginGoogle()
		expect(result).toMatchObject({
			user: {
				displayName: 'Gedson Marcelino'
			}
		})
	})
	
	it('should return a object null when dispatch an error.', async () => {
		(signInWithPopup as jest.Mock).mockReturnValue(new Promise( (resolve, reject) => reject(null)))

		const result = await loginGoogle()
		expect(result).toBe(null)
	})
  
})