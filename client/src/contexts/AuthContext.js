import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../utils/apis'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [load, setLoad] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState()


    const login = async ({ username, password }) => {
        const { data: token } = await axios.post(API.login, {
            username: username,
            password: password,
        })

        setIsAuthenticated(token.key)
        if (!!token) {
            localStorage.setItem('t', token.key)
            localStorage.setItem('user_username', username)

        }
    }

    useEffect(async () => {
        setLoad(false)
        const token = await localStorage.getItem('t')
        if (isAuthenticated) setLoad(true)
        if (!!token) {
            setIsAuthenticated(token)
            setLoad(true)
        }
        if (!token) {
            setIsAuthenticated(false)
            setLoad(true)
        }
    }, [isAuthenticated])

    const value = { isAuthenticated, login }

    return (
        <AuthContext.Provider value={value}>
            {load && children}
        </AuthContext.Provider>
    )
}
