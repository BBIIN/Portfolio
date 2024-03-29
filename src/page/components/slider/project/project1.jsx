import oracle from "@assets/images/Oracle_SQL.png";
import springboot from "@assets/images/springboot.png";
import thymeleaf from "@assets/images/thymeleaf.png";
import link from "@assets/icon/link.png";
import triple from "@assets/images/Triple.png";
import html from "@assets/images/html.png";
import js from "@assets/images/javascript.png";
import css from "@assets/images/css.png";

function Project1() {
  return (
    <div className="project">
      <h2 className="title">
        Triple clone coding
        <a href="https://github.com/BBIIN/Project_Triple">
          <img src={link} />
        </a>
      </h2>
      <div className="wrapper">
        <img src={triple} className="pic" />
        <div className="text">
          <p>
            여행 어플리케이션 Triple은 사이트가 존재하지않아 사용자 경험을
            반영한 웹페이지를 작성하여 서비스의 질을 향상한다는 목적을 가지고
            사이트를 구현해보고자 하였습니다.
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
              <img src={js} />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={springboot} />
              <p>Spring Boot</p>
            </li>
            <li>
              <img src={thymeleaf} />
              <p>thymeleaf</p>
            </li>
            <li>
              <img src={oracle} />
              <p>oracle SQL</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Project1;
