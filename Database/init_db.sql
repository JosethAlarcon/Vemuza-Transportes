-- Crear base de datos si no existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'VEMUZA')
BEGIN
    CREATE DATABASE VEMUZA;
END
GO

-- Usar la base de datos
USE VEMUZA;
GO

-- Crear tabla Usuarios
IF OBJECT_ID('Usuarios', 'U') IS NULL
BEGIN
    CREATE TABLE Usuarios (
        Id INT PRIMARY KEY IDENTITY(1,1),
        Nombre NVARCHAR(MAX) NOT NULL,
        Correo NVARCHAR(MAX) NOT NULL,
        Contraseña NVARCHAR(MAX) NOT NULL,
        EsAdmin BIT NOT NULL
    );
END
GO

-- Crear tabla Reservas
IF OBJECT_ID('Reservas', 'U') IS NULL
BEGIN
    CREATE TABLE Reservas (
        Id INT PRIMARY KEY IDENTITY(1,1),
        UsuarioId INT NOT NULL,
        Tipo NVARCHAR(MAX) NOT NULL,
        DireccionInicio NVARCHAR(MAX) NOT NULL,
        DireccionDestino NVARCHAR(MAX) NOT NULL,
        Fecha DATETIME2 NOT NULL,
        Hora TIME NOT NULL,
        Descripcion NVARCHAR(MAX) NOT NULL,
        Confirmada BIT NOT NULL,
        FOREIGN KEY (UsuarioId) REFERENCES Usuarios(Id)
    );
END
GO

-- Insertar usuario de prueba (opcional)
INSERT INTO Usuarios (Nombre, Correo, Contraseña, EsAdmin)
VALUES ('Usuario1', 'usuari1@vemuza.cl', 'usuario123', 0);
GO
