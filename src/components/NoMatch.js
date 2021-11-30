import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class NoMatch extends Component {
    render() {
        return (
            <div>
                <Container className="text-center mt-5">
                    <h1>
                        404 ERROR <br/> NO MATCH FOUND
                    </h1>
                </Container>
            </div>
        )
    }
}
