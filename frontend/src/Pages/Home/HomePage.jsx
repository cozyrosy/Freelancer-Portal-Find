import React, {useState, useEffect, useContext} from 'react'
import ClientHomeCarousel from '../../components/ClientHome/ClientHomeCarousel'
import ClientHomeContent from '../../components/ClientHome/ClientHomeContent'
import Footer from '../../components/Footer'
import AuthContext from '../../context/AuthContext'
import useAxios from '../../utils/useAxios'

const HomePage = () => {
    // const [notes, setNotes] = useState([])
    // const {authTokens, logoutUser} = useContext(AuthContext)


    const api = useAxios()

    // useEffect(()=>{
    //     getNotes()
    // }, [])

    // let getNotes = async()=>{

    //     let response = await axiosInstance.get('/api/notes/')

        // let response = await fetch('http://127.0.0.1:8000/api/notes/', {
        //     method: 'GET',
        //     headers:{
        //         Authorization :`Bearer  ${authTokens.access}`,
        //         // 'Content-Type':'application/json'
        //     }
        // })
        // let data = await response.json()
    //     if(response.status === 200){
    //         // setNotes(response.data)
    //     }else if(response.status === 401){
    //         logoutUser()
    //     }
    // }


  return (
    <div>
        <ClientHomeCarousel></ClientHomeCarousel>
        <ClientHomeContent></ClientHomeContent>
        <Footer></Footer>
        
    </div>
  )
}

export default HomePage