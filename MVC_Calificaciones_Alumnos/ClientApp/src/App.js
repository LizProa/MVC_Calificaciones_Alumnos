import { useEffect, useState } from "react";
import { Col, Container, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap"
import ModalAlumno from "./components/ModalAlumnos";
import TablaAlumnos from "./components/TablaAlumnos"

const App = () => {
    const [Alumnos, setAlumnosApp] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editarApp, verAlumnoApp] = useState(false);

    const mostrarAlumnos = async () => {
        const response = await fetch("api/calificacionesalumnos/Lista_Alumnos");

        if (response.ok) {
            console.log(response);
            const data = await response.json();
            setAlumnosApp(data)
        }
        else {
            console.log("Error al consultar la lista de alumnos")
        }
    }

    useEffect(() => {
        mostrarAlumnos()
    }, [])

    const NuevoAlumnoApp = async () => {
        verAlumnoApp()
        setMostrarModal(!mostrarModal)
    }

    const guardarAlumnoApp = async (alumno) => {
        const response = await fetch("api/calificacionesalumnos/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const editarAlumnoApp = async (alumno) => {
        const response = await fetch("api/calificacionesalumnos/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const eliminarAlumnoApp = async (id) => {

        var respuesta = window.confirm("Desea eliminar el alumno?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/calificacionesalumnos/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarAlumnos();
        }
    }

    const [IdAlumnoApp, setIdAlumnoApp] = useState("")

    const actualizarDatoID = (e) => {
        setIdAlumnoApp(e.target.value)
        console.log(e.target.value)
    }

    const consultarAlumnoApp = async () => {
        console.log(IdAlumnoApp)
        var Ids = "";
        if (IdAlumnoApp === "") {
            Ids = 0;
        }
        else if (IdAlumnoApp === []) {
            Ids = 0;
        }
        else if (IdAlumnoApp === "undefined") {
            Ids = 0;
        }
        else {
            Ids = IdAlumnoApp;
        }

        const Id = (IdAlumnoApp === "" || IdAlumnoApp === [] || IdAlumnoApp === "undefined") ? 0 : IdAlumnoApp;
        console.log(Ids)
        console.log(Id)

        const response = await fetch("api/calificacionesalumnos/Consultar/" + Id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })

        if (response.ok) {
            console.log(response);
            const data = await response.json();
            setAlumnosApp(data)
            setIdAlumnoApp()
        }
        else {
            console.log("Error al consultar el alumno")
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Alumnos</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col sm="10" md="4">
                                    <Form>
                                        <FormGroup>
                                            <Label>Buscar Alumno por ID</Label>
                                            <Input id="Txt_Buscar_Alumno" onChange={(e) => actualizarDatoID(e)} value={IdAlumnoApp} />
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col sm="2" md="2">
                                    <br />
                                    <Button size="sm" color="secondary" onClick={() => consultarAlumnoApp()}>Buscar</Button>
                                </Col>
                                <Col sm="12" md="6" text-align="right" color="primary">
                                    <br />
                                    <Button size="sm" color="info" onClick={() => NuevoAlumnoApp()}>Nuevo Alumno</Button>
                                </Col>
                            </Row>
                            <hr></hr>
                            <TablaAlumnos
                                data={Alumnos}
                                verAlumno={verAlumnoApp}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarAlumno={eliminarAlumnoApp}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <ModalAlumno
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarAlumno={guardarAlumnoApp}
                    editar={editarApp}
                    verAlumno={verAlumnoApp}
                    editarAlumno={editarAlumnoApp}
                />
            </Row>
        </Container >
    );
}
export default App;