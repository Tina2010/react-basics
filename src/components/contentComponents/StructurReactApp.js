import React, {useState, useRef} from 'react'
import { Button, Row, Col, Overlay } from 'react-bootstrap'
import '../../style/StructurReactApp.css'

export default function StructurReactApp() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const onCopy = () => {
        var code = document.getElementById('codeToCopy').textContent
        navigator.clipboard.writeText(code)
        setShow(!show)
        return 
    }

    return (
        <>
            <div className="header" id="aufbau-react-app">
                Aufbau einer rudimentären React-App
            </div>
            <div>
                <div>
                    Zuerst einmal die Frage:
                    Was überhaupt ist React?
                    <br />
                    <a className='link' href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> ist die aktuell wohl beliebteste JavaScript-Bibliothek zur Entwicklung von Webanwendungen.
                </div>
                <br />
                <div>
                    Für das einfache Einbinden von React ist im Prinzip nur ein
                    Dom-Element notwendig und JavaScript um dieses Element zu
                    rendern. Dadurch könnte das kleinste Aufkommen von React in
                    einem Projekt z.B. so aussehen:
                </div>

                <br />

                
                <Row className="codeRow">
                    <Col>
                    <pre className="codeContainer">
                        <code id="codeToCopy">
                            const root =
                            ReactDOM.createRoot(document.getElementById('root'));
                            <br />
                            root.render(&lt;h1&gt;Hello, world!&lt;/h1&gt;);&nbsp;
                        </code>
                    </pre>
                    </Col>
                    <Col
                    style={{textAlign: 'right'}}
                    >
                        <Button type="button" ref={target} onClick={onCopy} onBlur={() => setShow(false)} >Kopieren</Button>
                        <Overlay target={target.current} show={show} placement="top">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                            <div
                                {...props}
                                style={{
                                position: 'absolute',
                                backgroundColor: 'rgb(5, 107, 129)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                                }}
                            >
                                Kopiert!
                            </div>
                            )}
                        </Overlay>
                    </Col>
                </Row>

                <a
                    className='link'
                    href="https://reactjs.org/docs/hello-world.html"
                >
                    (Quelle: https://reactjs.org/docs/hello-world.html)
                </a>

                <br /><br />

                <div>
                    Wenn man allerdings ein neues Projekt mit React erstellen
                    möchte und daher einen neuen Ordner anlegen muss, ist
                    folgende Ordner-Struktur unverbindlich zu empfehlen. Sie ist
                    zwar nicht Zwang bei der Erstellung einer React-Anwendung,
                    sie dient jedoch einem sauberen Start und kann einfach
                    erweitert werden:
                </div>
                <ul>
                    <li>my-app</li>
                    <ul>
                        <li>node_modules*</li>
                        <li>package.json*</li>
                        <li>package-lock.json*</li>
                        <li>.gitignore**</li>
                        <li>
                            public
                            <ul>
                                <li>favicon.ico</li>
                                <li>index.html</li>
                                <li>manifest.json</li>
                            </ul>
                        </li>
                        <li>
                            src
                            <ul>
                                <li>App.css</li>
                                <li>App.js</li>
                                <li>App.test.js</li>
                                <li>index.css</li>
                                <li>index.js</li>
                            </ul>
                        </li>
                    </ul>
                </ul>
                <div>Hinweise:</div>
                <ul>
                    <li>* wird durch den Package-Manager verwaltet</li>
                    <li>
                        ** nur notwendig, wenn GitHub verwendet wird, sollte
                        alles enthalten was nicht veröffentlicht wird
                    </li>
                </ul>
            </div>
        </>
    )
}
