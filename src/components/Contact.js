import { useNavigate,Link } from "react-router-dom"

const Contact = ({inputName,inputEmail,inputTitle,inputDescription,name,email,title,description}) => {
    const navigate = useNavigate();
    return (
        <div className="h-auto w-full my-8 mx-32 bg-white ">
            <div className="p-8 text-3xl">お問い合わせ</div>
            <div className="my-8 mx-16 bg-gray-100">
                <div className="px-12 pb-8  ">
                    <div className="pt-12">お名前(必須)</div>
                    <input type="text" value={name}  className="w-1/3 border-gray-300 border" 
                           onChange={(e) => inputName(e.target.value)} />

                    <div className="pt-8">メールアドレス(必須)</div>
                    <input type="email" value={email} className="w-1/3 border-gray-300 border"  
                            onChange={(e) => inputEmail(e.target.value)} />  
                               
                    <div className="pt-8">題名</div>
                    <input type="text" value={title}  className="w-1/2 border-gray-300 border" 
                           onChange={(e) => inputTitle(e.target.value)}/>

                    <div className="pt-8">お問い合わせ内容</div>
                    <textarea type="text" value={description} className="w-full h-24 mb-8 border-gray-300 border"
                            onChange={(e) => inputDescription(e.target.value)} />
                    <Link to={"/contact/confirm"}  className="ml-8 py-2 px-8 bg-gray-300 border border-black rounded"
                           >確認
                    </Link>
                </div>
            </div>
            <div className="w-24 my-4 mx-auto py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                 onClick = {() => navigate("/")}>Home</div>
        </div>
    )
}
export default Contact;


