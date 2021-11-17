import  GetArticle  from "./GetArticle"
import { useParams } from "react-router-dom"

const Article = () => {
    const { id } = useParams()
    const fileID = `dataset${id}.html`
    return (
        <GetArticle file_name= {fileID} />)
 }

 export default Article;