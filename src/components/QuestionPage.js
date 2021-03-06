import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import QuestionResult from './QuestionResult';
import {
    Card
} from 'react-bootstrap'
import NoMatch from './NoMatch';

class QuestionPage extends Component {
    render() {
        const { quesId, answeredQues, author, question } = this.props

        if (question === null) {
            return <NoMatch />
        }

        return (
            <div className="question text-center">
                <Card className="my-4">
                    <Card.Header as="h5">{author.name} asks:</Card.Header>
                    <Card.Body>
                        <Card.Title className="answer-section">
                            <img
                                className="card-avatar"
                                alt="Avatar"
                                src={author.avatarURL}
                            />
                            {answeredQues ?
                                <QuestionResult
                                    id={quesId}
                                /> :
                                <Question
                                    id={quesId}
                                />
                            }
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
    const quesId = match.params.question_id
    const userAnswers = users[authedUser].answers
    const answeredQues = userAnswers.hasOwnProperty(quesId)
    const question = questions[quesId]
    return {
        answeredQues,
        quesId,
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
}

export default connect(mapStateToProps)(QuestionPage)