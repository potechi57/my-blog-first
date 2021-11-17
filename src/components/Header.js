import { Link } from 'react-router-dom'
import morning  from '../img/morning.png'

const Header = () => {
    return(
        <div className="min-w-content">
            <div className="flex justify-between px-16 text-white bg-blue-300  ">
                <div className="p-4 text-xl font-bold">Pochi Blog</div>
                <div className="flex">
                    <Link　className="p-4 text-xl font-bold cursor-pointer
                                    hover:bg-blue-400"
                                    to="/">
                        Home
                    </Link>
                    <Link className="p-4 text-xl font-bold cursor-pointer
                                    hover:bg-blue-400"
                                    to="/profile">
                        Profile
                    </Link>
                    <Link className="p-4 text-xl font-bold cursor-pointer
                                    hover:bg-blue-400"
                                    to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
            <img src={morning} alt="" className=""/>
        </div>
    )
};

export default Header;