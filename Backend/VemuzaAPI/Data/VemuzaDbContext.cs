using Microsoft.EntityFrameworkCore;
using VemuzaAPI.Models;

namespace VemuzaAPI.Data
{
    public class VemuzaDbContext: DbContext
    {
        public VemuzaDbContext(DbContextOptions<VemuzaDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Reserva> Reservas { get; set; }

    }
}
