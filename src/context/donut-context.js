import { createContext } from "react"
const DonutContext = createContext({
    donut: 3,
    setDonut: () => {}
})

export default DonutContext