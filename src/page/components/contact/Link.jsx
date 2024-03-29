import email from "@assets/images/email.png";
import git from "@assets/images/github.png";

function Link() {
  return (
    <div>
      <ul>
        <li>
          <img src={email} />{" "}
          <S.a href="mailto:tiktok0416@gmail.com">tiktok0416@gmail.com</S.a>
        </li>
        <li>
          <img src={git} />
          <S.a href="https://github.com/BBIIN">github.com/BBIIN</S.a>
        </li>
      </ul>
    </div>
  );
}
export default Link;

const wrapper = styled.div`
  font-family: "font-semibold";
  align-self: center;
  & ul {
    display: flex;
    flex-direction: column;
    height: 20vh;
    min-height: 150px;
    text-align: center;
    justify-content: space-around;
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: row;
      transform: translateY(15rem);
    }
    @media only screen and (max-width: 767px) {
      flex-direction: row;
      transform: translateY(5rem);
      height: 100px;
    }
  }
  & li {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.second};
    height: 55px;
    padding: 10px;
    border-radius: 15px;
    @media only screen and (max-width: 767px) {
      height: 30px;
      font-size: 14px;
    }
  }
  & img {
    width: 40px;
    margin-right: 10px;
    @media only screen and (max-width: 767px) {
      width: 25px;
    }
  }
`;
const a = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.first};
  :visited {
    color: ${({ theme }) => theme.palette.first};
  }
`;
const S = {
  wrapper,
  a,
};
