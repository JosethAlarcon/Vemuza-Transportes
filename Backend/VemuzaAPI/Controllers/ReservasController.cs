using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VemuzaAPI.Data;
using VemuzaAPI.Models;

namespace VemuzaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservasController : ControllerBase
    {
        private readonly VemuzaDbContext _context;

        public ReservasController(VemuzaDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CrearReserva([FromBody] ReservaRequest reservaDto)
        {
            var reserva = new Reserva
            {
                UsuarioId = reservaDto.UsuarioId,
                Tipo = reservaDto.Tipo,
                DireccionInicio = reservaDto.DireccionInicio,
                DireccionDestino = reservaDto.DireccionDestino,
                Fecha = DateTime.Parse(reservaDto.Fecha),
                Hora = TimeSpan.Parse(reservaDto.Hora),
                Descripcion = reservaDto.Descripcion,
                Confirmada = false
            };

            _context.Reservas.Add(reserva);
            _context.SaveChanges();

            return Ok(new { mensaje = "Reserva guardada correctamente" });
        }

        [HttpGet("usuario/{idUsuario}")]
        public IActionResult ObtenerPorUsuario(int idUsuario)
        {
            var reservas = _context.Reservas
                .Where(r => r.UsuarioId == idUsuario)
                .OrderByDescending(r => r.Fecha)
                .ToList();

            return Ok(reservas);
        }


        [HttpGet("todas")]
        public IActionResult ObtenerTodas()
        {
            var reservas = _context.Reservas
                .Include(r => r.Usuario) 
                .OrderByDescending(r => r.Fecha)
                .Select(r => new
                {
                    r.Id,
                    r.UsuarioId,
                    UsuarioNombre = r.Usuario.Nombre,
                    r.Tipo,
                    r.DireccionInicio,
                    r.DireccionDestino,
                    r.Fecha,
                    r.Hora,
                    r.Descripcion,
                    r.Confirmada
                })
                .ToList();

            return Ok(reservas);
        }
        [HttpPut("confirmar/{id}")]
        public IActionResult Confirmar(int id)
        {
            var reserva = _context.Reservas.Find(id);
            if (reserva == null)
                return NotFound();

            reserva.Confirmada = true;
            _context.SaveChanges();

            return Ok(new { mensaje = "Reserva confirmada" });
        }
    }
}
