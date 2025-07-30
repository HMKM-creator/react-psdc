import type { FC } from "react"
interface GreetingProps {
    location: string
    currentTime: string
}

const Greeting: FC<GreetingProps> = ({location, currentTime} )=> {
    // console.log(`props`, props)
    return <h2>Welcome to {location} {currentTime}</h2>
}

export default Greeting
