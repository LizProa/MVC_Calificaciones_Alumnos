using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MVC_Calificaciones_Alumnos.Models;

public partial class ReactMvcCalificacionesAlumnosContext : DbContext
{
    public ReactMvcCalificacionesAlumnosContext()
    {
    }

    public ReactMvcCalificacionesAlumnosContext(DbContextOptions<ReactMvcCalificacionesAlumnosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=ReactMVC_CalificacionesAlumnos;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.AlumnoId).HasName("PK__Alumno__E049FC04D2DD8B44");

            entity.ToTable("Alumno");

            entity.Property(e => e.AlumnoId).HasColumnName("Alumno_ID");
            entity.Property(e => e.ApellidoMaterno)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Apellido_Materno");
            entity.Property(e => e.ApellidoPaterno)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Apellido_Paterno");
            entity.Property(e => e.CalificacionPromedio)
                .HasColumnType("money")
                .HasColumnName("Calificacion_Promedio");
            entity.Property(e => e.Direccion)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(15)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
