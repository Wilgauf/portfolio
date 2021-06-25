import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/InfoSection/Data'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Discover from '../components/Discover'
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
         <InfoSection {...homeObjectOne}/>
         <InfoSection {...homeObjectTwo}/>
         <InfoSection {...homeObjectThree}/>
         <Projects />
         <Discover />
         <Contact />
         <Footer/>
        </>
    )
}

export default Home
