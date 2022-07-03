import React from 'react'

export default function CreateReact() {
    return (
        <>
            <div className="header" id="react-anwendung-erstellen">
                React-Anwendung erstellen
            </div>
            <div>
                <div>
                    Grundsätzlich ist es natürlich möglich die für React
                    angedachte Struktur selbstständige von Grund auf aufzubauen,
                    was wenn es die Zeit hergibt, eine sehr gute Gelegenheit
                    ist, um React besser kennen zu lernen.
                    <br />
                    Für die Erstellung einer Single-Page-App 
                    möchte ich jedoch eine Bibliothek vorstellen, die genau das 
                    kurzfristig ermöglicht:
                </div>

                <br />

                <div>
                    <a
                        href="https://create-react-app.dev/"
                        className='link'
                    >Create-React-App</a>
                </div>

                <br />

                <div>
                    Mit Create-React-App wird innerhalb kürzester Zeit
                    vollautomatisch die passende Ordner-Struktur, notwendige
                    Packages und Dependencies angelegt. Ist der Vorgang beendet,
                    kann man die Anwendung direkt über den Start-Befehl (zB für
                    npm: npm start) starten und die von React vorgefertigte
                    Single-Page betrachten.
                </div>

                <br />

                <div>Überblick</div>

                <br />

                <ul>
                    <li>
                        Befehle:
                        <ul>
                            <li>
                                npx create-react-app my-app //installiert die
                                App
                            </li>
                            <li>
                                cd my-app //führt in den Ordner der vorher
                                angelegt wurde
                            </li>
                            <li>npm start //startet die App</li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="https://webpack.js.org/"
                            className='link'
                        >webpack</a> und{' '}
                        <a
                            href="https://babeljs.io/"
                            className='link'
                        >Babel</a> sind integriert
                    </li>
                    <li>
                        <a
                            href="https://nodejs.org/en/"
                            className='link'
                        >Node</a> 14.0.0 oder
                        höhere Versionen sind notwendig
                    </li>
                    <li>
                        Folgende Ordnerstruktur wird angelegt:
                        <ul>
                            <li>my-app</li>
                            <ul>
                                <li>README.md</li>
                                <li>node_modules</li>
                                <li>package.json</li>
                                <li>.gitignore</li>
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
                                        <li>logo.svg</li>
                                        <li>serviceWorker.js</li>
                                        <li>setupTests.js</li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
