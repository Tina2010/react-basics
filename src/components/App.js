import './../style/App.css'
import './../style/LinkStyle.css'
import './../style/ButtonStyle.css'
import HeaderBar from './HeaderBar'
import NavigationSideBar from './NavigationSideBar'
import MainPage from './MainPage'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCircleUp } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCircleUp)

function App() {
    return (
        <Container fluid className="App" id="top">
            <HeaderBar />
            <Row>
                <Col sm={3} md={2}>
                    <NavigationSideBar />
                </Col>
                <Col className="marginLeft" sm={7} md={8}>
                    <MainPage />
                </Col>
                <Col>
                    <div className="backToTopContainer">
                        <a href="#top">
                            <div className="backToTopButton">
                                <text>Back to Top &nbsp;</text>
                                <FontAwesomeIcon icon={['fas', 'circle-up']} />
                            </div>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App
