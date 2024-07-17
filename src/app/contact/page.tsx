'use client';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import s from './page.module.scss';
import { TextField, Button } from '@mui/material';
import Icon from '@icon';
import { UnderConstruction } from '@/components';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      subject,
      message,
    };

    fetch(
      'https://dnx4gzte9b.execute-api.eu-north-1.amazonaws.com/dev/submit',
      {
        // URL that represents the backend API endpoint to which the form data is going to be sent
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      },
    )
      .then(function (response) {
        if (response.ok) {
          // Redirect to the thank you page
          console.log('form submission successfull');
        } else {
          console.error('form submission failed', response);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert('Form submission failed. Please try again later.');
      });
  };
  return (
    <div className={s.main}>
      <div className={s.info}>
        <h2> Get In Touch</h2>
        <div className={s.infoItem}>
          <Image src="/image/icon/user.png" alt="user" width={38} height={38} />
          <label> Arsen Demirci</label>
        </div>
        <div className={s.infoItem}>
          <Image src="/image/icon/mail.png" alt="mail" width={38} height={38} />
          <label> demirci.arsen@gmail.com</label>
        </div>
        <div className={s.infoItem}>
          <Image
            src="/image/icon/phone.png"
            alt="phone"
            width={38}
            height={38}
          />
          <label> +90 554 253 03 42</label>
        </div>
        <div className={s.infoItem}>
          <Image
            src="/image/icon/location.png"
            alt="location"
            width={38}
            height={38}
          />
          <label> Istanbul, Turkey</label>
        </div>
        <div className={s.infoItem}>
          <Image
            src="/image/icon/resume.png"
            alt="user"
            width={38}
            height={38}
          />
          <label>
            <a download={true} href="/files/Arsen-Resume.pdf">
              Download Resume
            </a>
          </label>
        </div>
      </div>
      <div className={s.form} onSubmit={handleSubmit}>
        <h2> Contact Form</h2>
        <div className={s.formcontrol}>
          <Image src="/image/icon/user.png" alt="user" width={40} height={40} />
          <TextField
            fullWidth
            label="Full Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image src="/image/icon/mail.png" alt="mail" width={40} height={40} />
          <TextField
            fullWidth
            label="Email *"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image src="/image/icon/mail.png" alt="mail" width={40} height={40} />
          <TextField
            fullWidth
            label="Subject *"
            variant="standard"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image
            src="/image/icon/message.png"
            alt="message"
            width={40}
            height={40}
          />
          <TextField
            fullWidth
            label="Message"
            variant="standard"
            multiline
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={s.formaction}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
