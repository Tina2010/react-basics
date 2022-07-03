import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './../style/ContentWrapper.css'
import CreateReact from './contentComponents/CreateReact'
import StructurReactApp from './contentComponents/StructurReactApp'
import ReactLibraries from './contentComponents/ReactLibraries'
import ComparisonAngularVue from './contentComponents/ComparisonAngularVue'

export default function ContentWrapper() {
    return (
        <Container className="content">
            <Col>
                <Row>
                    <StructurReactApp />
                </Row>
                <Row>
                    <CreateReact />
                </Row>
                <Row>
                    <ReactLibraries />
                </Row>
                <Row>
                    <ComparisonAngularVue />
                </Row>
            </Col>
        </Container>
    )
}
