using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VemuzaAPI.Data;
using VemuzaAPI.Models;

namespace VemuzaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly VemuzaDbContext _context;

        public AuthController(VemuzaDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest req)
        {
            var user = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Correo == req.Correo && u.Contraseña == req.Contraseña);

            if (user == null)
                return Unauthorized("Credenciales incorrectas");

            return Ok(new { user.Id, user.Nombre, user.EsAdmin });
        }
        [HttpPost("registro")]
        public async Task<IActionResult> Registrar([FromBody] Usuario nuevoUsuario)
        {
            // Verificar si el correo ya existe
            var existe = await _context.Usuarios.AnyAsync(u => u.Correo == nuevoUsuario.Correo);
            if (existe)
                return BadRequest("Ya existe una cuenta con ese correo");

            nuevoUsuario.EsAdmin = false; // Forzamos que no se registre como admin
            _context.Usuarios.Add(nuevoUsuario);
            await _context.SaveChangesAsync();

            return Ok(new { mensaje = "Usuario registrado correctamente" });
        }
    }

    public class LoginRequest
    {
        public string Correo { get; set; }
        public string Contraseña { get; set; }
    }
}

