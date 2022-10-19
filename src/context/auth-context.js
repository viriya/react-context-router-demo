import { createContext } from "react"
const AuthContext = createContext({
    user: {isLoggedIn: false, name: ''},
    setUser: () => {}
})

export default AuthContext