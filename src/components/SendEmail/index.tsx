import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SendEmailContainer, SendEmailContent, SendEmailForm } from './styles';
import { MyContacts } from './components/MyContacts';

export function SendEmail() {
  const form = useRef(null);

  const sendEmail = (event: any) =>  {
    event.preventDefault();

    emailjs.sendForm('service_87hwhld', 'template_ahrjuii', event.target, 'kkd5sJSbLADr7Q2yw')
      .then(() => {
          alert("E-mail enviado com sucesso");
      }, (error) => {
        alert(error.message);
      });
      event.target.reset();
  };

  return (
    <SendEmailContainer>
      <h2>Contatos</h2>
      <SendEmailContent>
        <SendEmailForm ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input type="text" name="name" required />

            <label>E-mail</label>
            <input type="email" name="email"required />

            <label>Mensagem</label>
            <textarea name="message" required />
            <button type="submit">Enviar e-mail</button>
        </SendEmailForm>

        <MyContacts />
      </SendEmailContent>
    </SendEmailContainer>
  );
};