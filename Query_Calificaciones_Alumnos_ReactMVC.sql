--Fernanda Lizbeth Vargas Proa.
--CREACION DE BASE DE DATOS Y TABLA
CREATE DATABASE ReactMVC_CalificacionesAlumnos;

USE ReactMVC_CalificacionesAlumnos;

CREATE TABLE Alumno(
	Alumno_ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Nombre VARCHAR(250),
	Apellido_Paterno VARCHAR(100),
	Apellido_Materno VARCHAR(100),
	Calificacion_Promedio MONEY,
	Telefono VARCHAR(15),
	Direccion VARCHAR(500)
);

--Agregar registros a la tabla
INSERT INTO Alumno(Nombre, Apellido_Paterno, Apellido_Materno, Calificacion_Promedio, Telefono, Direccion)
VALUES ('Angel', 'Ramirez', 'Lopez', 8.76, '4621234567', 'Atzacualco');

INSERT INTO Alumno(Nombre, Apellido_Paterno, Apellido_Materno, Calificacion_Promedio, Telefono, Direccion)
VALUES ('Jesus', 'Vargas', 'Sanchez', 9.35, '4626797523', 'Higuera');

INSERT INTO Alumno(Nombre, Apellido_Paterno, Apellido_Materno, Calificacion_Promedio, Telefono, Direccion)
VALUES ('Jose', 'Camacho', 'Raya', 7.9, '4620976578', 'Leon');

SELECT * FROM Alumno;

--Cadena de Conexion
--Scaffold-DbContext "Server=(localdb)\MSSQLLocalDB; DataBase=ReactMVC_CalificacionesAlumnos;Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models