import Link from "./Link";
import MailForm from "./mailForm";

function Contact() {
  return (
    <div id="contact">
      <MailForm />
      <Link />
    </div>
  );
}
export default Contact;

const wrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
  justify-content: space-between;
  transition: all 0.5s;
  @media only screen and (max-width: 1023px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    height: 500px;
  }
`;

const S = {
  wrapper,
};
