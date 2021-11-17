import { useState,useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { db } from '../service/firebase'
import { collection,query,where,getDocs } from 'firebase/firestore'

const ReactList = () => {
    const [displayList,setDisplayList] =useState([])
    const [Page1,setPage1] = useState([])
    const [Page2,setPage2] = useState([])

    const getPage1 = async () => {
        const q = query(collection(db,"react"),where("first","==",true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
            Page1.push({
                number : doc.data().number, 
                title: doc.data().title,
                content: doc.data().content,
                date : doc.data().date
            })
        })
        setDisplayList(Page1)
    }

    const getPage2 = async () => {
        const q = query(collection(db,"react"),where("second","==",true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
            Page2.push({
                number : doc.data().number, 
                title: doc.data().title,
                content: doc.data().content,
                date : doc.data().date
            })
        })
    }

    useEffect(() =>{
        getPage1()
        getPage2()
        return () =>{
            setPage1([])
            setPage2([])}
        // eslint-disable-next-line
    },[])

    return(
        <div className= "w-full flex flex-col">
            {displayList.map((value,index) => {
                return(
                    <Link className="h-40 w-1/2 mt-8 mx-auto px-16 bg-white rounded-md shadow-md cursor-pointer text-center
                                    transform hover:-translate-y-0.5 hover:shadow-2xl transition-transform"
                        key={index} to={`/react/article/${value.number}`}>
                        <div className="px-4 py-2">
                            <p className="text-xl text-left" >{value.title}</p>
                            <p className="py-2 text-left">{value.content}</p>
                        </div>
                        <p className="absolute bottom-2 right-2">{value.date}</p>
                    </Link>
                )})}
            <div className="my-4 mx-auto flex ">
                <NavLink className={(navData) => navData.isActive ? 
                        "mx-1 px-4 py-2 bg-gray-400 text-xl rounded-md " : 
                        "mx-1 px-4 py-2 text-xl border rounded-md border-gray-400" } 
                        to ={"/react/1"}
                        onClick ={() => setDisplayList(Page1)}>1</NavLink>   
                <NavLink className={(navData) => navData.isActive ? 
                        "mx-1 px-4 py-2 bg-gray-400 text-xl rounded-md " : 
                        "mx-1 px-4 py-2 text-xl border rounded-md border-gray-400 " } 
                        to ={"/react/2"}
                        onClick ={() => setDisplayList(Page2)}>2</NavLink>
            </div>
        </div>   
    )
}

export default ReactList;



