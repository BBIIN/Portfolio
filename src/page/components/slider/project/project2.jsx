import link from "@assets/icon/link.png";
import movietrailer from "@assets/images/movie.png";
import html from "@assets/images/html.png";
import css from "@assets/images/css.png";
import react from "@/assets/images/react.svg";

function Project2() {
  return (
    <div className="project">
      <h2 className="title">
        Movie Trailer
        <a href="https://63cab0756c641950c2b932d6--neon-mooncake-8f2fc4.netlify.app/">
          <img src={link} />
        </a>
      </h2>
      <div className="wrapper">
        <img className="pic" src={movietrailer} />
        <div className="text">
          <p>
            상영중인 영화를 확인할 수 있는 사이트를 구현해보고자 하였습니다.
          </p>
          <p>지속적인 업데이트하는 중입니다.</p>
          <ul className="logo">
            <li>
              <img src={html} />
              <p>HTML</p>
            </li>
            <li>
              <img src={css} />
              <p>CSS</p>
            </li>
            <li>
              <img src={react} />
              <p>REACT</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Project2;
