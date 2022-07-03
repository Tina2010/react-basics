import React from 'react'
import { Table } from 'react-bootstrap'
import '../../style/ComparisonAngularVue.css'

export default function ComparisonAngularVue() {
    return (
        <>
            <div className="header" id="vergleich-angular-vue">
                Vergleich React mit Angular und Vue
            </div>
            <div>
                Zuerst einmal muss klargestellt werden, dass es bei diesem Vergleich keinen 'Gewinner' oder 'Verlierer' gibt.
                Es geht wie immer im Vergleich von Entwicklungstools darum, was für das eigene Projekt am geeignetsten ist.
                <br />
                <br />
                Damit wir die drei Kandidaten also vergleichen können, werde ich ihre Vor- und Nachteile auflisten und dabei wesentliche Charakteristiken
                kennzeichen.
                <br />
                <br />
                <Table responsive striped hover>
                    <thead>
                        <tr className="headerNames">
                            <th style={{color: '#6adff7'}} colSpan={2}>React</th>
                            <th style={{color: '#de1934'}} colSpan={2}>Angular</th>
                            <th style={{color: '#2bab7b'}} colSpan={2}>Vue</th>
                        </tr>
                        <tr>
                            <th>Vorteile</th>
                            <th>Nachteile</th>
                            <th>Vorteile</th>
                            <th>Nachteile</th>
                            <th>Vorteile</th>
                            <th>Nachteile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Performante Umsetzung und unproblematischer Optimierung</td>
                            <td>Enorme Vielfalt erschwert Wahl der optimalen Lösungsstrategie</td>
                            <td>Unterstützt und entwickelt durch Google</td>
                            <td>Erhöhter Aufwand zu Beginn durch komplexes Interface</td>
                            <td>Übersichtlichkeit durch Trennung zwischen Templates, JavaScript und CSS</td>
                            <td>Kleines Team mit wenig finanziellen Mitteln</td>
                        </tr>
                        <tr>
                            <td>Flexibilität und erhöhte Kompatibilität mit externen Bibliotheken</td>
                            <td>Keine Trennung zwischen HTML und JavaScript bei JSX-Syntax nötig, was Risiko für Fehlerquellen birgt</td>
                            <td>Mobil und Desktop Programmierung möglich</td>
                            <td>Gedacht und entwickelt für große und umfangreiche Projekte</td>
                            <td>Bidirektionale Anbindung von Daten</td>
                            <td>Geringe Auswahl an Plugins und Erweiterungen</td>
                        </tr>
                        <tr>
                            <td>Einstiegszeit: schnell</td>
                            <td>Muss in andere Tools integriert werden</td>
                            <td>Kann bereits ohne weitere Tools Projekte umsetzen</td>
                            <td>Einstiegszeit: verzögert durch Umfang</td>
                            <td>Einstiegszeit: schnell</td>
                            <td>Kleinere Community</td>
                        </tr>
                    </tbody>
                </Table>

                <br />
                <br />

                Ein Fazit was sich aus der vorangegangen Tabelle ziehen lässt ist sicherlich, dass ein Hauptargument für die Wahl zwischen den drei Frameworks 
                die Größe des eigenen Projektes ist.
                <br />
                <br />
                Vue stellt hierbei geeignet für sehr kleine, React ebenfalls für kleine bis mittelständige und Angular für umfangreiche Projekte.
            </div>
        </>
    )
}
