'use client';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import s from './page.module.scss';
import { TextField } from '@mui/material';
import Icon from '@icon';
import { UnderConstruction } from '@/components';

export default function Contact() {
  const captchaRef = useRef(null);
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
      <form className={s.form}>
        <h2> Contact Form</h2>
        <div className={s.formcontrol}>
          <Image src="/image/icon/user.png" alt="user" width={40} height={40} />
          <TextField fullWidth label="Full Name" variant="standard" />
        </div>
        <div className={s.formcontrol}>
          <Image src="/image/icon/mail.png" alt="mail" width={40} height={40} />
          <TextField fullWidth label="Email *" variant="standard" />
        </div>
        <div className={s.formcontrol}>
          <Image
            src="/image/icon/message.png"
            alt="message"
            width={40}
            height={40}
          />
          <TextField fullWidth label="Message" variant="standard" multiline />
        </div>
        <div className={s.formaction}>
          <ReCAPTCHA
            sitekey="6LdkM9cjAAAAAAAjf8-hBEBJEIYzFl2MTp4yXAX7"
            ref={captchaRef}
          />
          <a download={true} href="/files/Arsen-Resume.pdf">
            <Icon width={28} height={28} icon="download" />
            Download Resume
          </a>
        </div>
      </form>
    </div>
  );
}
