👨‍💼 Autor
Joseth Alarcón

# 🚚 Vemuza Transportes

**Sistema web completo para reservas de fletes y mudanzas.**  
Incluye frontend desarrollado en React, backend en C# con ASP.NET Core, y base de datos en SQL Server.

## 📁 Estructura del Proyecto

Frontend/ → Aplicación React para los usuarios
Backend/ → API REST en C# (.NET)
Database/ → Scripts SQL para crear y poblar la base de datos
README.md → Este archivo

### 1. Clonar el repositorio

```bash
git clone https://github.com/JosethAlarcon/Vemuza-Transportes.git
cd VemuzaTransportes_Completo

**### 2. Configurar la base de datos**

Abre SQL Server Management Studio (SSMS).

Abre y ejecuta el archivo Database/init_db.sql.

Verifica que la base de datos VEMUZA se haya creado correctamente con sus tablas.

**### 3. Ejecutar el backend (API C#)**

1. Abre la carpeta Backend/ con Visual Studio.

2. Edita appsettings.json para conectar a tu base de datos:

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=VEMUZA;Trusted_Connection=True;"
}

3. Ejecuta el proyecto (F5 o botón verde ▶️).

**### 4. Ejecutar el frontend (React)**

cd Frontend
npm install
npm start

