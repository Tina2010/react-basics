import React from 'react'
import './../style/NavigationSideBar.css'
import { Container, ListGroup } from 'react-bootstrap'

export default function NavigationSideBar() {
    return (
        <Container className="navi">
            <ListGroup>
                <ListGroup.Item>
                    <a href="#aufbau-react-app">
                        Aufbau einer rudimentären React-App
                    </a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href="#react-anwendung-erstellen">
                        React-Anwendung erstellen
                    </a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href="#react-libraries">Interessante React Libraries</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href="#vergleich-angular-vue">
                        Vergleich React mit Angular und Vue
                    </a>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
