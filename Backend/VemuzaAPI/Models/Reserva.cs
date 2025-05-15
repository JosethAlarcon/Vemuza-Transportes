namespace VemuzaAPI.Models
{
    public class Reserva
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
        public string Tipo { get; set; }
        public string DireccionInicio { get; set; }
        public string DireccionDestino { get; set; }
        public DateTime Fecha { get; set; }
        public TimeSpan Hora { get; set; }
        public string Descripcion { get; set; }
        public bool Confirmada { get; set; }
    }
}
