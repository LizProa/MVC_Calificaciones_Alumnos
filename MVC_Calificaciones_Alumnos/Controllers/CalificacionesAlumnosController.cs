using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVC_Calificaciones_Alumnos.Models;
using System.Diagnostics.Contracts;

namespace MVC_Calificaciones_Alumnos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalificacionesAlumnosController : ControllerBase
    {
        private readonly ReactMvcCalificacionesAlumnosContext db;

        public CalificacionesAlumnosController(ReactMvcCalificacionesAlumnosContext context)
        {
            db = context;
        }

        [HttpGet]
        [Route("Lista_Alumnos")]
        public async Task<IActionResult> Lista_Alumnos()
        {
            List<Alumno> lista = await db.Alumnos.OrderBy(c => c.AlumnoId).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Alumno request)
        {
            Console.WriteLine(request);
            await db.Alumnos.AddAsync(request);
            await db.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Alumno request)
        {
            db.Alumnos.Update(request);
            await db.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Alumno persona = db.Alumnos.Find(id)!;
            if (persona != null)
            {
                db.Alumnos.Remove(persona);
                await db.SaveChangesAsync();
            }
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPost]
        [Route("Consultar/{id:int}")]
        public async Task<IActionResult> Consultar(int id)
        {
            List<Alumno> lista = new List<Alumno>();
            if (id != 0)
            {
                lista = await db.Alumnos.Where(x => x.AlumnoId == id).OrderBy(c => c.AlumnoId).ToListAsync();
            }
            else
            {
                lista = await db.Alumnos.OrderBy(c => c.AlumnoId).ToListAsync();
            }
            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}
