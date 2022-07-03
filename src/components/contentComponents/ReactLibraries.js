import React from 'react'

export default function ReactLibraries() {
    return (
        <>
            <div className="header" id="react-libraries">
                Interessante React Libraries
            </div>
            <div>
                <div>
                    Folgende React Libraries habe ich während der Bearbeitung
                    meiner Projekte verwendet und kann sie daher unverbindlich
                    empfehlen:
                </div>
                <ul>
                    <li>
                        <a
                            href="https://create-react-app.dev/"
                            className='link'
                        >
                            Create-React-App
                        </a> - Quick Start Up einer Single-Page-Anwendung
                    </li>
                     <li>
                        <a
                            href="https://enzymejs.github.io/enzyme/"
                            className='link'
                        >
                            Enzyme
                        </a> - Testingtool für React
                    </li>
                    <li>
                        <a
                            href="https://react-redux.js.org/"
                            className='link'
                        >
                            Redux
                        </a> - Ermöglicht Erstellung eines Stores (State Container)
                    </li>
                    <li>
                        <a
                            href="https://react-bootstrap.github.io/"
                            className='link'
                        >
                            React-Bootstrap
                        </a> - Styling Erweitung von Bootstrap für React
                    </li>
                </ul>
            </div>
        </>
    )
}
