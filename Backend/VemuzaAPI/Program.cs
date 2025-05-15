using Microsoft.EntityFrameworkCore;
using VemuzaAPI.Data; // Asegúrate de que el namespace coincida con donde esté tu DbContext

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Aquí se configura el DbContext y la conexión a SQL Server
builder.Services.AddDbContext<VemuzaDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("VemuzaConnection")));

// Servicios básicos
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("PermitirFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();

