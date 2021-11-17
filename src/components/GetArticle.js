import { ref,getDownloadURL} from "firebase/storage"
import { useEffect, useState } from "react"
import { storage } from "../service/firebase"
import { useNavigate } from "react-router-dom"

const GetArticle = ({file_name}) => {
    const [Download,setDownload] = useState([])
    const navigate = useNavigate();
    const DownloadFile = async() => {
        const url = await getDownloadURL(ref(storage,`Articles/${file_name}`))
        const res = await fetch(url);
        const text = await res.text();
        setDownload(text);
    }
    useEffect(() =>{
        DownloadFile()
         // eslint-disable-next-line
    },[])    

    return (
        <div className="h-auto w-full my-8 mx-16 bg-white ">
            <div className="m-24 ">
                <div dangerouslySetInnerHTML={{__html:Download}}/>
            </div>
            <div className="w-24 my-4 mx-auto py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                 onClick = {() => navigate(-1)}>戻る</div>
        </div>
    )
}
export default GetArticle;



