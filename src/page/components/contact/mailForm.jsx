import emailjs from "@emailjs/browser";
import { useRef } from "react";

function MailForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_350y0dv",
        "template_ljww8dp",
        form.current,
        "tA1naiqAbUWT-SwB3"
      )
      .then(
        (result) => {
          alert("전송되었습니다");
          console.log(result.text);
        },
        (error) => {
          alert("전송 실패했습니다");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" name="user_name" placeholder="Name" />
        </div>
        <div>
          <input type="email" name="user_email" placeholder="Email Adress" />
        </div>
        <text name="message" placeholder="Message" />
        <btn type="submit" value="Send" />
      </form>
    </div>
  );
}
export default MailForm;
