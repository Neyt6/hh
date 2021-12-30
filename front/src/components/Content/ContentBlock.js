import { Button } from "@mui/material"
import orgIcon from "./build.svg"

import "./ContentBlock.css"

const post1 = {
    title: "Охранник",
    price: "35000 - 60000",
    text: "Охранник - охраняет территорию от незаконного проникновения и хищения имущества. Если он...",
    orgName: "ПромБракМракСбытЗагранПоставка"
}

const post2 = {
    title: "Программист",
    price: "350000 - 600000",
    text: "Программист - охраняет территорию от незаконного проникновения и хищения имущества. Если он...",
    orgName: "ПромБракМракСбытЗагранПоставка"
}

const posts = [post1, post2, post1, post1, post1, post1, post1, post1]

const ContentBlock = () => {

    return (
        <div className='ContentBlock'>
            {posts.map((post) => (
                <div className="postBlock">
                    <div className="title">{post.title}</div>
                    <div className="price">{post.price}</div>
                    <div className="text">{post.text}</div>
                    <div className="orgName">
                        <img src={orgIcon} alt=""/>
                        {post.orgName} 
                    </div>
                    <Button>Откликнуться</Button>
                </div>
            ))}

        </div>
    )
}

export default ContentBlock