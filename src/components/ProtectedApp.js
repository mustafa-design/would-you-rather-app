import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Home from './Home'
import Navigation from './Navigation'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import QuestionCard from './QuestionCard'
import QuestionPage from './QuestionPage'

class ProtectedApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Fragment>
                        <Navigation />
                        <Container style={{ width: "35%" }}>
                            <Switch>

                                <Route exact path='/' component={Home} />
                                <Route path="/questions/bad_id" component={NoMatch} />
                                <Route path="/questions/:question_id" component={QuestionPage} />
                                <Route path='/add' component={NewQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Container>
                    </Fragment>
                </Router>
            </div>
        )
    }
}

export default ProtectedApp