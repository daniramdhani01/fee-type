import { useFormik } from "formik"
import { Card, Form, Container } from "react-bootstrap"

// import component
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function EditFT() {
    return (
        <div className="d-flex flex-row">
            <Sidebar />
            <div className="d-flex flex-column w-100">
                <Header />
                <Container fluid className="px-5 py-4">
                    disini
                    <Card className="mx-5 my-4">
                        <Card.Body>
                            here
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>

    )
}