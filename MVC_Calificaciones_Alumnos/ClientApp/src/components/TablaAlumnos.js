import { Table, Button } from "reactstrap"

const TablaAlumnos = ({ data, verAlumno, mostrarModal, setMostrarModal, eliminarAlumno }) => {

    const AbrirModal = (alumno) => {
        verAlumno(alumno)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Apellido Paterno</td>
                    <td>Apellido Materno</td>
                    <td>Calificacion</td>
                    <td>Telefono</td>
                    <td>Direccion</td>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="6">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.alumnoId}>
                                <td>{item.alumnoId}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apellidoPaterno}</td>
                                <td>{item.apellidoMaterno}</td>
                                <td>{item.calificacionPromedio}</td>
                                <td>{item.telefono}</td>
                                <td>{item.direccion}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => AbrirModal(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarAlumno(item.alumnoId)}>Eliminar</Button>

                                </td>
                            </tr>)
                        )
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaAlumnos;