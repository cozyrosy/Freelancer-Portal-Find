import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    
    let [authTokens, setAuthTokens] = useState( ()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState( ()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    // let [admin, setAdmin] = useState( ()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const loginUser = async(e) => {
        // console.log('gggggggg', localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
        e.preventDefault()
        console.log('Form is submitted now')
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            console.log('sssssssssssss', jwt_decode(data.access));
            console.log('nnnnnnnnnnnnnnnn',jwt_decode(data.access).is_staff);
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log('aaaaaaaaaaa', user)
            if (jwt_decode(data.access).is_staff){
                navigate('/user/home')
            }else if(jwt_decode(data.access).is_admin){
                navigate('/admin/admin-home')
            }else{
                navigate('/user/home')
            }
        }else{
            alert('Something went wrong here')
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    // let updateToken = async () =>{
    //     console.log("update token is called")
    //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify({'refresh': authTokens?.refresh})
    //     })
    //     let data = await response.json()
    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }
    //     if (loading){
    //         setLoading(false)
    //     }
    // }



    // let loginAdmin = async (e) =>{
    //     console.log('admin loging innnnnnn')
    //     e.preventDefault()

    //     let response = await fetch('http://127.0.0.1:8000/api/token/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
    //     })

    //     let data = await response.json()

    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         console.log("lllllllllllllllllllllllll",response)
    //         console.log(data.access);
    //         console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",data);
    //         setAdmin(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //         console.log('wwwwwwwwwwwwwwwwwwwww', admin);
    //         if(admin.is_admin){
    //             console.log(authTokens, 'aaadddd')
    //             navigate('/admin/admin-home')
    //         }else{
    //             setAuthTokens(null)
    //             setAdmin(null)
    //             localStorage.removeItem('authTokens')
    //             Swal.fire("Error", 'Invalid Credentials!!')
    //         }
            
    //     }else{
    //         Swal.fire("Error",'Invalid Credentials!!')
    //     }

    // }

    const logoutAdmin = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/admin-login')
    }


    

    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        // loginAdmin:loginAdmin,
        logoutAdmin:logoutAdmin
    }

    useEffect(()=>{
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)

        
    }, [authTokens, loading])
    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )   
}