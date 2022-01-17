import { getAuth, signInWithPopup, User } from "firebase/auth";
import { app, provider } from "../firebase";


interface ResultLogin {
  user: User;
}

export async function loginGoogle() : Promise<ResultLogin | null>{
	try {
		const auth = getAuth(app);
		const result = await signInWithPopup(auth, provider)
		const {user} = result;
		return { user }
	} catch ( error ) {
		// console.log('[loginGoogle - error]', error);
		return null
	}
}
