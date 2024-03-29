import { Character } from "/src/assets/character_line.png";

function Content() {
  return (
    <div id="about">
      <div>
        <div>
          <p>안녕하세요. 저는 신입 프론트엔드를 꿈꾸는 백수빈입니다.</p>
          <br />
          <p>
            대학교 졸업을 앞두고 가족의 추천으로 웹개발 직군을 알게되었고
            웹개발에 흥미를 느끼게 되어 대학교 졸업 후 바로 국비 지원 프로그램을
            통해 처음 코딩을 배우게되었습니다. <br /> 웹 개발에 대해서 전혀
            몰랐지만 국비 프로그램에서 진행한 프로젝트를 통해 성취감을 느끼고 웹
            개발 실무에 대한 이해력를 높였습니다.
          </p>
          <br />
          <p>
            저를 이끌어 줄 회사를 만나 더욱 더 발전해나가 제가 만든 웹을
            사용자들이 편리하게 사용할 수 있는 성취감을 느끼고 싶습니다.{" "}
          </p>
        </div>
        <img src={Character} alt="characterImage" />
      </div>
    </div>
  );
}
export default Content;
