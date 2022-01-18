import { User } from 'firebase/auth';
import {
	createContext,
	ReactNode,
	useContext,
	useState
} from 'react';

interface ContextProviderProps {
	children: ReactNode;
}

interface ContextData {
	user: User;
	setUserData: (user: User) => void;
	isAuthenticated: () => boolean;
}

const LOCALSTORAGE_KEY = '@codeChallenge:user'

const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps): JSX.Element {
	const [user, setUser] = useState<User>(() => {
		const storedContext = localStorage.getItem(LOCALSTORAGE_KEY)

		if (storedContext && storedContext !== 'undefined') {
			return JSON.parse(storedContext);
		}

		return {};
	});

	const setLocalStorage = (user: User) => {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user))
	}

	const setUserData = (user: User) => {
		setUser(user)
		setLocalStorage(user)
	}

	const isAuthenticated = () => {
		return Object.keys(user).length === 0 ? false : true
	}

	return (
		<Context.Provider
			value={{ user, setUserData, isAuthenticated }}
		>
			{children}
		</Context.Provider>
	);
}

export function useUserContext(): ContextData {
	const context = useContext(Context);
	return context;
}