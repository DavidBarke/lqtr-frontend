import { Accordion, Button, Card } from "react-bootstrap"
// @ts-ignore
import { useMediaQuery } from "react-responsive"

interface SidePaneProps {

}

export function SidePane(props: SidePaneProps) {
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 1224 })

    return <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                Übersicht
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    Inhalt
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                Einstellungen
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    Einstellung
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
}