using Microsoft.EntityFrameworkCore;
using VemuzaAPI.Data; // Aseg�rate de que el namespace coincida con donde est� tu DbContext

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

// Aqu� se configura el DbContext y la conexi�n a SQL Server
builder.Services.AddDbContext<VemuzaDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("VemuzaConnection")));

// Servicios b�sicos
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

