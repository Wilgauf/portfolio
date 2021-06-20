import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
         <Navbar toggleOpen={toggleOpen}/>   
         <HomeSection />
        </>
    )
}

export default Home
