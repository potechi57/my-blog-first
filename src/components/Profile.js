import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div className="h-auto w-full my-8 mx-32 bg-white ">
            <div className="p-8 text-3xl">プロフィール</div>
            <div className="px-16">
                初めまして、こんにちは。管理人の Pochi です。このブログは、自身のプログラミングの練習用に作成しました。
                学んだことや、趣味について徒然なるままに記していきたいと思います。よかったら覗いていってください。
            </div>
            <div className="w-24 my-4 mx-auto py-2 px-4 bg-green-300 text-center rounded-md cursor-pointer"
                 onClick = {() => navigate("/")}>Home</div>
        </div>
    );
}

export default Profile;