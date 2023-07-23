using System;
using System.Collections.Generic;

namespace MVC_Calificaciones_Alumnos.Models;

public partial class Alumno
{
    public int AlumnoId { get; set; }

    public string? Nombre { get; set; }

    public string? ApellidoPaterno { get; set; }

    public string? ApellidoMaterno { get; set; }

    public decimal? CalificacionPromedio { get; set; }

    public string? Telefono { get; set; }

    public string? Direccion { get; set; }
}
