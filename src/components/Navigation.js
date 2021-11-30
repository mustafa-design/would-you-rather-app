import React from 'react'
import {
    Navbar,
    Container,
    Button,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

function Navigation(props) {
    const handleLogout = (e) => {
        e.preventDefault()

        const { dispatch } = props

        dispatch(setAuthedUser(null))
    }

    const { users, authedUser } = props

    return (
        <div>
            <Navbar>
                <Container>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' exact activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Leaderboard' exact activeClassName='active'>
                                Leaderboard
                            </NavLink>
                        </li>
                    </ul>
                    <div className="authed-user">
                        <img
                            className="avatar"
                            alt="Avatar"
                            src={users[authedUser].avatarURL} />
                        <span className="user-name">Hello, {users[authedUser].name}</span>
                        <Button
                            variant="danger"
                            onClick={handleLogout}
                        >Logout</Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}


function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Navigation)
