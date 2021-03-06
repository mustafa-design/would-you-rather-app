import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card
} from 'react-bootstrap'

class Leaderboard extends Component {
    render() {
        const { users } = this.props
        const usersData = Object.values(users).map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionsCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
            .sort((a, b) => b.total - a.total)

        return (
            <div className="leaderboard">
                {usersData.map(user => (

                    <Card key={user.id}>
                        <Card.Body>
                            <Card.Title className="board-content">
                                <img
                                    className="card-avatar"
                                    alt="Avatar"
                                    src={user.avatarURL} />
                                <div className="questions-count">
                                    <h3>{user.name}</h3>
                                    <div>answered quesitons: {user.answerCount}</div>
                                    <div>created quesitons: {user.questionsCount}</div>
                                </div>
                                <div className="score">
                                    <h3>Score</h3>
                                    <span>{user.total}</span>
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)