import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  img: string;
  fullDescription: string;
}

export const Noticias = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const news: NewsItem[] = [
    {
      id: 1,
      title: "Colombia pierde una figura: Daniel Muñoz fue expulsado contra Uruguay",
      description: "Una muy mala noticia recibió este miércoles 10 de julio la Selección Colombia durante el partido frente a Uruguay por las semifinales ...",
      img: "https://estaticos.elcolombiano.com/binrepository/848x565/0c0/780d565/none/11101/UNAC/expulsion-daniel-munoz_45556984_20240711105911.jpg",
      fullDescription: "Después de que Jefferson Lerma abriera el marcador en el minuto 39, el equipo nacional mantuvo la intención ofensiva y se lanzó sobre el arco charrúa con el objetivo de ampliar la ventaja  Sin embargo, en el minuto 45+1, el lateral derecho Daniel Muñoz, una de las figuras de Colombia durante toda la Copa América, cayó en la provocación de los jugadores de Uruguay. ",
    },
    {
      id: 2,
      title: "Darwin Núñez, delantero de Uruguay, apareció luego de pelea con hinchas colombianos y se tomó fotos: 'Ahora sí'",
      description: "El futbolista ha estado recuperándose y entrenando para el último partido....",
      img: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/07/11/668feddc74429.jpeg",
      fullDescription: "La Selección de Uruguay enfrentará a Canadá para definir el tercer y cuarto puesto de la Copa América. Se prepara luego de que perdiera su paso a la final contra Colombia en un partido que terminó en una serie de agresiones. Jugadores uruguayos resultaron implicados en una gresca con hinchas colombianos en el estadio Bank of America de Charlotte, Carolina del Norte (Estados Unidos). Darwin Núñez, una de las estrellas del conjunto, les lanzó una silla a los fanáticos y hasta se trepó a la tribuna junto a su compañero Ronald Araújo.",
    },
    {
      id: 3,
      title: "¡Colombia jugará la Final de la Copa América USA 2024!",
      description: "El partido se jugó como se decía; una final anticipada. Propuestas diferentes como tan parecidas en cuanto a la intensidad. Con dos selecciones grandes...",
      img: "https://fcf.com.co/wp-content/uploads/2024/07/FINALISTAS-WEB-1024x576.png",
      fullDescription: "El partido se jugó como se decía; una final anticipada. Propuestas diferentes como tan parecidas en cuanto a la intensidad. Con dos selecciones grandes que dejaron todo en el Bank of America Stadium, lleno de emociones y de opciones para unos y otros.Uruguay quiso el balón, lo buscó presionando a Colombia por toda la cancha. Colombia corrió y se defendió con ímpetu en cada duelo hasta que fue equilibrando el compromiso y dominó el choque de fuerzas. Tuvieron que pasar 39 minutos para que, de nuevo de los pies de James como asistidor, Lerma rematará un centro de Rodríguez que tocó la red. Si los dirigidos por Lorenzo no acabaron con más ventaja fue por falta de suerte.",
    },
    {
      id: 4,
      title: "Argentina - Colombia, en vivo: novedades y última hora de hoy en la final de la Copa América 2024",
      description: "El partido se jugó como se decía; una final anticipada. Propuestas diferentes como tan parecidas en cuanto a la intensidad. Con dos selecciones grandes...",
      img: "https://img.asmedia.epimg.net/resizer/v2/NHX2CK756FEKXBDDYBVX2OW2C4.jfif?auth=4fe43fa194ce5a159c3106f6a83025247b67cee3d19ac18d998c4d7d3e4f46ff&width=644&height=362&focal=590%2C370",
      fullDescription: "Richard Ríos (1°) y Luis Díaz (2°) son los jugadores con más regates completos en toda la #CopaAmérica.⚔️ Además, el jugador de Palmeiras es el 10° con más duelos terrestres ganados, mientras que el del Liverpool ocupa el primer puesto.",
    }
  ];

  const openModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className='row my-4'>
      {news.map(item => (
        <div key={item.id} className="ccol-lg-4 col-md-6 mb-4">
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <button onClick={() => openModal(item)} className="btn btn-primary fw-bold rounded-4">
              Ver Más
            </button>
          </div>
        </div>
      ))}

      {modalVisible && selectedNews && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-btn">X</button>
            <div className="movie-details">
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
