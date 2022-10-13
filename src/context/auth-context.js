import { createContext } from "react"
const AuthContext = createContext({
    isLoggedIn: false,
    setLogin: () => {}
})

export default AuthContext