import React from 'react'
import { connect } from 'react-redux'
import {
    Card
} from 'react-bootstrap'
import QuestionPeak from './QuestionPeak'

function QuestionCard(props) {
    const { author, question } = props

    return (
        <div className="user-card">
            <Card className="my-4 card-box">
                <Card.Header as="h5">{author.name} asks:</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <img
                            className="card-avatar"
                            alt="Avatar"
                            src={author.avatarURL}
                        />
                    </Card.Title>
                    <QuestionPeak
                        question={question}
                    />
                </Card.Body>


            </Card>
        </div>
    )
}

function mapStateToProps({ users, questions }, { questionId }) {
    const question = questions[questionId]

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
}

export default connect(mapStateToProps)(QuestionCard)