import { useNavigate,Link } from "react-router-dom";
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


const Confirm = ({name,email,title,description}) => {
    const navigate = useNavigate();
    const submitData = async () => {
        await addDoc(collection(db,"submitdata"),{
            Username : name,
            Email : email,
            Title : title,
            Content : description
        })
        console.log("送信完了")
    }


    return (
        <div className="h-auto w-full my-8 mx-32 pb-8 bg-white ">
            <div className="p-8 text-3xl">お問い合わせ</div>
            <div className="mt-8 pb-4 mx-16 bg-gray-100">
                <div className="px-12 pb-8  ">
                    <div className="pt-12">お名前(必須)</div>
                    <div className="pl-4">{name}</div>
                    <div className="pt-8">メールアドレス(必須)</div>
                    <div className="pl-4">{email}</div>
                    <div className="pt-8">題名</div>
                    <div className="pl-4">{title}</div>
                    <div className="pt-8">お問い合わせ内容</div>
                    <div className="pl-4">{description}</div>
                </div>
                <div className="flex justify-center">
                    <div className="w-24 mx-2 py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                         onClick = {() => navigate(-1)}>戻る</div>
                    <Link to={"/contact/complete"} className="w-24 mx-2 py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                         onClick = {() => submitData()}>送信</Link>
                </div>
                

            </div>
        </div>
    )
}

export default Confirm;