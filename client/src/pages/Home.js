import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { API } from '../utils/apis'
import { Navbar } from '../components/general/Navbar'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Modal } from 'bootstrap'

export const Home = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(1)
    const [modal, setModal] = useState(null)
    const [input, setInput] = useState({
        post: ''
    })

    const exampleModal = useRef()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        fetchAll()
    }, [])

    useEffect(() => {
        setModal(
            new Modal(exampleModal.current)
        )
    }, [])

    const fetchAll = async () => {
        await fetchPosts()
        await fetchRelatedUser()
    }

    const fetchPosts = async () => {
        setLoad(1)
        const { data } = await axios.get(API.posts)
        setPosts(data)
    }

    const fetchRelatedUser = async () => {
        const { data } = await axios.get(API.users)
        setUsers(data)
        setLoad(2)
    }

    const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value })

    const handleSubmit = (e) => {
        e.preventDefault()

        const post = {
            ...input.post,
            owner: ''
        }
    }

    const renderAddButton = () => {
        if (isAuthenticated) return <button onClick={() => modal.show()} className="btn btn-outline-primary">Add Post</button>

        return (
            // 
            <p className="m-0">Please
                <Link to="/login" className="mx-1 text-decoration-none text-primary">LOGIN</Link>
             to share a post...</p>
        )
    }

    const renderPosts = () => {
        const sortedPost = posts.sort((a, b) => {
            if (a.timestamp_created < b.timestamp_created) return 1
            if (a.timestamp_created > b.timestamp_created) return -1
            return
        })

        const post = sortedPost.map((p) => {

            const foundUser = users.find((user) => user.id === p.owner)

            return (
                <div key={p.id} className='card my-2 post'>
                    {!!p.image &&
                        <div className='card-image' style={{ width: '100%' }}>
                            <img src={p.image} alt={p.post} height='300px' style={{ width: '100%', objectFit: 'cover' }} />
                        </div>
                    }
                    <div className='card-body'>
                        <div>
                            <small className="m-0" style={{ color: 'gray' }}>{foundUser.username}</small>
                        </div>
                        <div>
                            <p className='m-0'>{p.post}</p>
                        </div>
                        <small className="fw-light">created at: {new Date(p.timestamp_created).toLocaleDateString('en-MY')}</small>
                    </div>
                </div>
            )
        })

        return (
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <div>
                        {post}
                    </div>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        if (load === 1) return (
            <div className='container'>
                <h1>Loading...</h1>
            </div>
        )
        if (load === 2) return (
            <div className='d-flex flex-column align-items-center'>
                {renderAddButton()}
                {renderPosts()}
            </div>
        )
    }

    const renderModal = () => {
        return (
            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Post</h5>
                            <button type="button" className="btn-close" onClick={() => modal.hide()} aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="post" aria-describedby="emailHelp" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            {renderContent()}
            {renderModal()}
        </>
    )
}
