import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Resultados = () => {
  const equipos = [
    { grupo: 'Colombia', PJ: 3, G: 2, E: 1, P: 0, puntos: 7 },
    { grupo: 'Brasil', PJ: 3, G: 1, E: 2, P: 0, puntos: 5 },
    { grupo: 'Costa Rica', PJ: 3, G: 1, E: 1, P: 1, puntos: 4 },
    { grupo: 'Paraguay', PJ: 3, G: 0, E: 0, P: 3, puntos: 6 },
    { grupo: 'Argentina', PJ: 3, G: 3, E: 0, P: 0, puntos: 9 },
    { grupo: 'Canada', PJ: 3, G: 1, E: 1, P: 1, puntos: 4 },
    { grupo: 'chile', PJ: 3, G: 0, E: 2, P: 1, puntos: 2 },
    { grupo: 'peru ', PJ: 3, G: 0, E: 1, P: 2, puntos: 1 },
    { grupo: 'Venezuela', PJ: 3, G: 3, E: 0, P: 0, puntos: 9 },
    { grupo: 'Ecuador', PJ: 3, G: 1, E: 1, P: 1, puntos: 4 },
    { grupo: 'Mexico', PJ: 3, G: 1, E: 1, P: 1, puntos: 4 },
    { grupo: 'Jamaica', PJ: 3, G: 0, E: 0, P: 3, puntos: 0 },
    { grupo: 'Uruguay', PJ: 3, G: 3, E: 0, P: 0, puntos: 9 },
    { grupo: 'Panama', PJ: 3, G: 2, E: 0, P: 1, puntos: 6},
    { grupo: 'Estados Unidos', PJ: 3, G: 1, E: 0, P: 2, puntos: 3 },
    { grupo: 'Bolivia', PJ: 3, G: 0, E: 0, P: 3, puntos: 5 },
  ];
  const matches = [
    {
        date: '14/07/2024',
        team1: {
          name: 'Colombia',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Escudo_de_la_Federaci%C3%B3n_Colombiana_de_F%C3%BAtbol.png'
        },
        team2: {
          name: 'Argentina',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Selecci%C3%B3n_de_f%C3%BAtbol_de_Argentina.png'
        },
        result: 'Final'
      },
      {
        date: '13/07/2024',
        team1: {
          name: 'Canada',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Canada-Badge-Outline.png/1200px-Canada-Badge-Outline.png'
        },
        team2: {
          name: 'Uruguay',
          logo: 'https://seeklogo.com/images/U/uruguay-asociacion-uruguaya-de-futbol-logo-005FEFF9D2-seeklogo.com.png'
        },
        result: '3rd Puesto'
      },
      {
        date: '10/07/2024',
        team1: {
          name: 'Colombia',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Escudo_de_la_Federaci%C3%B3n_Colombiana_de_F%C3%BAtbol.png'
        },
        team2: {
          name: 'Uruguay',
          logo: 'https://seeklogo.com/images/U/uruguay-asociacion-uruguaya-de-futbol-logo-005FEFF9D2-seeklogo.com.png'
        },
        result: '1 - 0'
      },
      {
        date: '9/07/2024',
        team1: {
          name: 'Argentina',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Selecci%C3%B3n_de_f%C3%BAtbol_de_Argentina.png'
        },
        team2: {
          name: 'Canada',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Canada-Badge-Outline.png/1200px-Canada-Badge-Outline.png'
        },
        result: '2 - 0'
      },
      
    ];

  return (

    
    <div className="tabla mt-2">
        <h1 className="title">Resultados</h1>
<div className="match-card">
      {matches.map((match, index) => (
        <div key={index} className="card mx-auto">
          <div className="date">{match.date}</div>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="team">
              <img src={match.team1.logo} alt={match.team1.name} className="team-logo" />
              <div className="team-name">{match.team1.name}</div>
            </div>
            <div className="vs">vs</div>
            <div className="team">
              <img src={match.team2.logo} alt={match.team2.name} className="team-logo" />
              <div className="team-name">{match.team2.name}</div>
            </div>
          </div>
          <div className="result mt-3">{match.result}</div>
        </div>
      ))}
    </div>
      {/* Logo de la competencia */}
      <div className="text-center mb-3">
        <img
          src="https://a2.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F83.png"
          alt="Logo de la competencia"
          style={{ maxWidth: '100px', height: 'auto' }}
        />
      </div>

      {/* Tablas de posiciones */}
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Grupo A</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {equipos.slice(4, 8).map((equipo, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{equipo.grupo}</td>
                    <td>{equipo.PJ}</td>
                    <td>{equipo.G}</td>
                    <td>{equipo.E}</td>
                    <td>{equipo.P}</td>
                    <td>{equipo.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Grupo B</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {equipos.slice(8, 12).map((equipo, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{equipo.grupo}</td>
                    <td>{equipo.PJ}</td>
                    <td>{equipo.G}</td>
                    <td>{equipo.E}</td>
                    <td>{equipo.P}</td>
                    <td>{equipo.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* Segunda fila de tablas */}
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Grupo C</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {equipos.slice(12, 16).map((equipo, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{equipo.grupo}</td>
                    <td>{equipo.PJ}</td>
                    <td>{equipo.G}</td>
                    <td>{equipo.E}</td>
                    <td>{equipo.P}</td>
                    <td>{equipo.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Grupo D</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {equipos.slice(0, 4).map((equipo, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{equipo.grupo}</td>
                    <td>{equipo.PJ}</td>
                    <td>{equipo.G}</td>
                    <td>{equipo.E}</td>
                    <td>{equipo.P}</td>
                    <td>{equipo.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};
