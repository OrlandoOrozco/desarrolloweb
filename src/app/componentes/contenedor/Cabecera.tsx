import { NavLink } from "react-router-dom";
import logoPro from "../../../assets/img/b0af06a4c1a8e7a31ce379250130d26c-pelota-de-futbol-pentagono-silueta.webp";

export const Cabecera = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white" data-bs-theme="white">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logoPro} alt="Logo proyecto"style={{ width: '50px', height: 'auto' }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page" style={{ fontWeight: 'bold' }}>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/resultados" className="nav-link" aria-current="page">
                    Resultados
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/noticias" className="nav-link" aria-current="page">
                    Noticias
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/acerca" className="nav-link">
                    Equipo
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
