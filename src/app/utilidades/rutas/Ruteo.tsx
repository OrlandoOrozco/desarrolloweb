import { Route, Routes } from "react-router-dom";

import { AcercaDe } from "../../componentes/otros/AcercaDe";

import { Inicio } from "../../componentes/contenedor/Inicio";

import { Resultados } from "../../componentes/paginas/Resultados";


import { Noticias } from "../../componentes/paginas/Noticias";

export const Ruteo = () => {
  return (
    <Routes>c
      <Route path="/" element={<Inicio />} />
      
      <Route path="/acerca" element={<AcercaDe />} />
      <Route path="/resultados" element={<Resultados />} />
      <Route path="/noticias" element={<Noticias />} />
    </Routes>
  );
};
