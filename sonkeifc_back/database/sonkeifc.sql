-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2024 a las 02:22:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sonkeifc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenamiento`
--

CREATE TABLE `entrenamiento` (
  `id_entrenamiento` int(11) NOT NULL,
  `lugar` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `entrenamiento`
--

INSERT INTO `entrenamiento` (`id_entrenamiento`, `lugar`, `fecha`, `hora`) VALUES
(1, 'Complejo deportivo Campos de Batalla', '2024-06-24', '20:00:00'),
(2, 'Complejo deportivo Campos de Batalla', '2024-06-25', '20:00:00'),
(3, 'Complejo deportivo Campos de Batalla', '2024-06-27', '20:00:00'),
(4, 'Estadio Santiago Bueras', '2024-06-29', '12:00:00'),
(5, 'Estadio Santiago Bueras', '2024-06-30', '10:00:00'),
(6, 'Complejo deportivo Campos de Batalla', '2024-07-01', '20:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `id_jugador` int(11) NOT NULL,
  `posicion` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `profesion` varchar(50) NOT NULL,
  `rrss` varchar(100) NOT NULL,
  `imagen` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`id_jugador`, `posicion`, `nombre`, `profesion`, `rrss`, `imagen`) VALUES
(1, 'Portero', 'Marcos Stegen', 'Futbolista', 'https://www.instagram.com/mterstegen1/?hl=es', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/065aed35-fbcb-441a-9951-b35e38ecd654/01-MARC-ANDRE_TER_STEGEN.jpg?width=940&height=940'),
(2, 'Defensa', 'Cristian Andres', 'Futbolista', 'https://www.instagram.com/andreaschristensen3/?hl=es', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/414458b8-82b7-4913-a1ea-839410f6e10f/15-ANDREAS_CHRISTENSEN.jpg?width=940&height=940'),
(3, 'Defensa', 'Juan Cancelado', 'Futbolista', 'https://www.instagram.com/jpcancelo/?hl=es', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/57225d94-0fe9-42a4-9123-5499e390c727/jugador_fitxa-cancelo.jpg?width=940&height=940'),
(4, 'Centrocampista', 'Sergio Roberto', 'Futbolista', 'https://www.instagram.com/sergiroberto/?hl=es-la', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/d07ea506-60fb-4beb-a016-ba22d7a18b6e/20-S_ROBERTO.jpg?width=940&height=940'),
(5, 'Delantero', 'Rafael Diaz', 'Futbolista', 'https://www.instagram.com/raphinha/?hl=es', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/8accdb83-c06d-4dcd-bbd1-c9978690b5cd/22-RAPHINHA.jpg?width=940&height=940'),
(6, 'Delantero', 'Juan Feliz', 'Futbolista', 'https://www.instagram.com/joaofelix79/', 'https://www.fcbarcelona.com/photo-resources/2023/10/03/a59c808c-1068-45bd-a861-db3d785e200a/jugador_fitxa-felix.jpg?width=940&height=940');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testimonio`
--

CREATE TABLE `testimonio` (
  `id_testimonio` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `opinion` varchar(100) NOT NULL,
  `imagen` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `testimonio`
--

INSERT INTO `testimonio` (`id_testimonio`, `nombre`, `opinion`, `imagen`) VALUES
(1, 'Vinicius Sr', 'Me aliste hace unos años y fue una experiencia extraordinaria, fue un gran paso en mi vida personal ', 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9040a59e-3a60-4d44-9435-6e9388109070/_80x501_VINI_15.app.png?preferwebp=true&width=288&height=384'),
(2, 'Carlos Ancelotti', 'Inscribi a mi hijo para que tuviera una actividad los fines de semanas y fue la mejor decisión. Ha c', 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--c225f3fe-237f-4aea-a2f0-4dfcf71b1830/ancelotti_carita_380x501.app.png?preferwebp=true&width=288&height=384'),
(3, 'Miguel Allende', 'Todos los findes de semana llevo a mis hijos a entrenar y durante la semana me toca a mí salir a la ', 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--6fa90506-59f9-4e6b-ac4f-6386585aa1da/_80x501_KEPA_15.app.png?preferwebp=true&width=288&height=384');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entrenamiento`
--
ALTER TABLE `entrenamiento`
  ADD PRIMARY KEY (`id_entrenamiento`);

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`id_jugador`);

--
-- Indices de la tabla `testimonio`
--
ALTER TABLE `testimonio`
  ADD PRIMARY KEY (`id_testimonio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entrenamiento`
--
ALTER TABLE `entrenamiento`
  MODIFY `id_entrenamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `id_jugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `testimonio`
--
ALTER TABLE `testimonio`
  MODIFY `id_testimonio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
