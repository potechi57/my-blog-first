import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { db } from '../service/firebase'
import { collection,query,limit,getDocs } from 'firebase/firestore'

const DisplayLatestPage = () => {
    const [displayList,setDisplayList] =useState([])
    const [Page1,setPage1] = useState([])

    const getPage1 = async () => {
        const q = query(collection(db,"react"),limit(3));
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

    useEffect(() => {
        getPage1();
        console.log(Page1)
        return(setPage1([]))
        // eslint-disable-next-line
    },[])

    return(
        <div className= "w-full flex flex-col">
            {displayList.map((value,index) => {
                return(
                    <Link className="h-40 w-1/2 mt-4 mx-auto px-16 bg-white rounded-md shadow-md cursor-pointer text-center
                                    transform hover:-translate-y-0.5 hover:shadow-2xl transition-transform"
                        key={index} to={`/react/article/${value.number}`}>
                        <div className="px-4 py-2">
                            <p className="text-xl text-left" >{value.title}</p>
                            <p>{value.content}</p>
                        </div>
                        <p className="absolute bottom-2 right-2">{value.date}</p>
                    </Link>
                )})}
        </div>
    )
}

export default DisplayLatestPage;
