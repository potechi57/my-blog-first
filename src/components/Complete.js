import { useNavigate } from "react-router-dom"

const Complete = () => {
    const navigate = useNavigate();
    return (
        <div className="h-auto w-full my-8 mx-32 bg-white ">
            <div className="p-8 text-3xl">メッセージが送信されました</div>
            <div className="px-16 py-8 ">
                お問い合わせありがとうございます。内容を確認後、早急にご返事させていただきます。
                もし数日中に返事がない場合は、正しく受信できなかった可能性がありますので、恐れ入りますが再度のご連絡をお願いします。</div>
            <div className="w-24 my-4 mx-auto py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                 onClick = {() => navigate("/")}>Home</div>
        </div>
    );
}

export default Complete;