import React, { useState, useEffect } from 'react'
import { getUser } from '../API/User'

export const UserContext = React.createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isUser, setIsUser] = useState(false)
    const [height, setHeight] = useState(0)
    const [loading, setLoading] = useState(false)
    
    // Scroll up
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            setHeight(window.pageYOffset)
        })
        return () => {window.removeEventListener("scroll", ()=>{})}
    }, [height])

    useEffect(() => {
        setLoading(true)
        const getUserFromBE = async ()=>{
            const localUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null 
            if(localUser){
                const response = await getUser(localUser)
                if(response.status === 200){
                    setUser({ ...response.data, token: localUser })
                    setIsUser(true)
                }else{
                    localStorage.removeItem("user")
                    setIsUser(false)
                    showAlert({ msg: "Unauthorized logged, please re-login again !", type: "danger" })
                    setLoading(false)
                    return {}
                }
            }else{
                setIsUser(false)
                setLoading(false)
                return {}
            }
        }
        getUserFromBE()
    }, [])

    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
    })
    const showAlert = ({msg, type="success"})=> setAlert({show: true, msg, type})
    const hideAlert = ()=> setAlert({...alert, show: false})
    
    const userLogin = ({ user, token })=>{
        setLoading(true)
        setUser({ user, token })
        setIsUser(true)
        localStorage.setItem('user', JSON.stringify(token))
        setLoading(false)
    }
    const logout = ()=>{
        setLoading(true)
        setUser({})
        setIsUser(false)
        localStorage.removeItem("user")
        showAlert({ msg: "you are logout, bye :) ", type: "success" })
        setLoading(false)
    }

    return (
        <UserContext.Provider value={{
            user,
            isUser,
            loading,
            height,
            alert,
            setLoading,
            logout,
            userLogin,
            showAlert,
            hideAlert
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider