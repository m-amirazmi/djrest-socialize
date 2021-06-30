import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export const Login = () => {

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const { login } = useAuth()
    const { push } = useHistory()

    const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value })

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(input)
        push('/')
    }

    return (
        <section style={{ width: '100%' }}>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card card-body" style={{ maxWidth: '450px' }}>
                    <div>
                        <h6 className="m-0 text-center">LOGIN</h6>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input type="username" className="form-control" id="username" onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleInput} />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
