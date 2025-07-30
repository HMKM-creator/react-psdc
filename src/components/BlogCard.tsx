import type { FC } from "react"
interface BlogProps {
    title: string
    shortDescription: string
    cover: string
}

const BlogCards: FC<BlogProps> = ({title, shortDescription, cover}) => {
return (
    <div>
    <h1>{title}</h1>
    <p>{shortDescription}</p>
    <img src={cover} alt={title} />
    </div>
)
}

export default BlogCards