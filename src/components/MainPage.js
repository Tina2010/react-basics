import React from 'react'
import ContentWrapper from './ContentWrapper'
import WelcomeChapter from './WelcomeChapter'

import './../style/MainPage.css'
import { Container } from 'react-bootstrap'

export default function MainPage() {
    return (
        <Container className="main">
            <WelcomeChapter />
            <ContentWrapper />
        </Container>
    )
}
