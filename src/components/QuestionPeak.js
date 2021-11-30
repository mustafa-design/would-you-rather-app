import React, { Component } from 'react'
import {
    Card,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionPeak extends Component {
    render() {
        const { question } = this.props

        return (
            <div >
                <Card className="ques-peak">
                    <h4 className="app-name">Would You Rather?</h4>
                    <p>
                        {question.optionOne.text}
                        <br />
                        or ...
                    </p>
                    <Link to={`/questions/${question.id}`}>
                        <Button
                            onClick={this.handleClick}
                            variant="primary">
                            View Question
                        </Button>

                    </Link>
                </Card>
            </div>
        )
    }
}

export default QuestionPeak
