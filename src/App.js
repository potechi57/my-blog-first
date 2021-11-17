import './App.css';
import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import { Header,Footer,Home,Profile,Contact,Confirm,Complete,Article,ReactList } from './components/index'



function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const inputName = (text) =>{
    setName(text);
  };
  const inputEmail = (text) =>{
    setEmail(text);
  }
  const inputTitle = (text) =>{
    setTitle(text);
  }
  const inputDescription = (text) =>{
    setDescription(text);
  }

  
  return (
    <div className="min-h-screen bg-gray-100 relative ">
      <Header/>
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact 
            inputName={inputName} inputEmail={inputEmail} 
            inputTitle={inputTitle} inputDescription={inputDescription}
            name={name} email={email} title={title} description={description}/>} />
          <Route path="/contact/confirm" element={<Confirm 
            name={name} email={email} title={title} description={description}/>} />
          <Route path="/contact/complete" element={<Complete />}/>
          <Route path="/react/:id" element={<ReactList />} />
          <Route path="/react/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;


