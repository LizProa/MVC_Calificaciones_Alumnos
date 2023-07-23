/* eslint-disable eqeqeq */
import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Button, Label, Input } from "reactstrap"


const modeloAlumno = {
    alumnoId: 0,
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    calificacionPromedio: "",
    telefono: "",
    direccion: ""
}

const ModalAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno, editar, verAlumno, editarAlumno }) => {

    const [alumno, setAlumno] = useState(modeloAlumno);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAlumno({
            ...alumno,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = () => {
        if (alumno.alumnoId == 0) {
            guardarAlumno(alumno)
        }
        else {
            editarAlumno(alumno)
        }
    }


    useEffect(() => {
        if (editar != null && editar != false) {
            setAlumno(editar)
        } else {
            setAlumno(modeloAlumno)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        verAlumno(null)
    }


    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>{alumno.alumnoId == 0 ? "Nuevo Alumno" : "Editar Alumno"}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Paterno</Label>
                        <Input name="apellidoPaterno" onChange={(e) => actualizarDato(e)} value={alumno.apellidoPaterno} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Materno</Label>
                        <Input name="apellidoMaterno" onChange={(e) => actualizarDato(e)} value={alumno.apellidoMaterno} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Calificacion</Label>
                        <Input name="calificacionPromedio" onChange={(e) => actualizarDato(e)} value={alumno.calificacionPromedio} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={alumno.telefono} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Direccion</Label>
                        <Input name="direccion" onChange={(e) => actualizarDato(e)} value={alumno.direccion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>

            </ModalFooter>
        </Modal>
    );
}

export default ModalAlumno;