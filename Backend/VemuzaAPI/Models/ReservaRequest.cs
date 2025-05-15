namespace VemuzaAPI.Models
{
    public class ReservaRequest
    {
        public int UsuarioId { get; set; }
        public string Tipo { get; set; }
        public string DireccionInicio { get; set; }
        public string DireccionDestino { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Descripcion { get; set; }
    }
}
