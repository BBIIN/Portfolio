import pic from "@assets/images/pic.png";
import html from "@assets/images/html.png";
import css from "@assets/images/css.png";
import react from "@assets/images/react.svg";
import link from "@assets/icon/link.png";

function Project5() {
  return (
    <div className="project">
      <h2 className="title">
        Portfolio site
        <a href=" https://BBIN.github.io">
          <img src={link} />
        </a>
      </h2>
      <div className="wrapper">
        <image src={pic} className="pic" />
        <div className="text">
          <p>
            저를 소개하기 위해 리액트를 활용해 만든 포트폴리오 홈페이지입니다.
          </p>
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
export default Project5;
