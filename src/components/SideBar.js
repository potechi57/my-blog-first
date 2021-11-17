const SideBar = () => {
    return (
        <div className="h-auto mx-4 flex flex-col bg-green-300 ">
            <div className="w-80 h-96 mb-4 bg-white border-black border text-center ">
                <div className=" py-2 bg-red-600 text-white font-bold">プロフィール</div>
                
            </div>
            <div className="w-80 h-96 mb-4 bg-white border-black border text-center ">
            <div className=" py-2 bg-red-600 text-white font-bold">カテゴリー</div>
            </div>
        </div>
    )
}

export default SideBar;