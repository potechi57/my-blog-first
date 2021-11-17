import { Link } from "react-router-dom"
import  picture1  from "../img/React.png"
import { DisplayLatestPage } from "./index"

const Home = () => {
    return(
        <div className="h-auto w-screen">
            <div className="pt-8 mx-20 text-3xl ">
                <div className="pt-8 text-center text-sm">
                    プログラミングの練習用にこのブログを作成しました。
                    自分が勉強した内容または思ったことをつらつらと投稿していきます。
                </div>
                <p className="w-28 ml-24 mt-8 border-b border-black text-xl text-center">最新の記事</p>
            </div>
            <DisplayLatestPage />
            <div className="mx-20 text-2xl">
                <p className="w-28 border-b border-black text-center">カテゴリー</p>
            </div>
            <div className ="m-2  flex flex-wrap justify-center">
                <Link to={"/react/1"}  
                      className="h-40 w-2/5 m-4 flex bg-white cursor-pointer
                                rounded-xl shadow-md relative
                                transform hover:-translate-y-0.5 hover:shadow-2xl
                                transition-transform">
                    <img src={picture1} alt="" className="w-1/2 p-2"/>
                    <div className="m-4">Reactに関する記事</div>
                </Link>
                <Link to={"/react/1"}  
                      className="h-40 w-2/5 m-4 flex bg-white cursor-pointer
                                rounded-xl shadow-md relative
                                transform hover:-translate-y-0.5 hover:shadow-2xl
                                transition-transform">
                    <img src={picture1} alt="" className="w-1/2 p-2"/>
                    <div className="m-4">Reactに関する記事</div>
                </Link>
                <Link to={"/react/1"}  
                      className="h-40 w-2/5 m-4 flex bg-white cursor-pointer
                                rounded-xl shadow-md relative
                                transform hover:-translate-y-0.5 hover:shadow-2xl
                                transition-transform">
                    <img src={picture1} alt="" className="w-1/2 p-2"/>
                    <div className="m-4">Reactに関する記事</div>
                </Link>
                <Link to={"/react/1"}  
                      className="h-40 w-2/5 m-4 flex bg-white cursor-pointer
                                rounded-xl shadow-md relative
                                transform hover:-translate-y-0.5 hover:shadow-2xl
                                transition-transform">
                    <img src={picture1} alt="" className="w-1/2 p-2"/>
                    <div className="m-4">Reactに関する記事</div>
                </Link>  
            </div>
        </div>   
    )
}

export default Home;

