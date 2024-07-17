'use client';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import s from './page.module.scss';
import { TextField, Button } from '@mui/material';
import { ContactFormDataType } from '@types';
import { validation } from '@/config/form';

export default function Contact() {
  const {
    register: registerContactForm,
    handleSubmit: handleContactForm,
    formState: { errors: submitErrors },
    reset: resetForm,
  } = useForm<ContactFormDataType>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const submitContactForm = (data: ContactFormDataType) => {
    const fetchPromise = fetch(
      'https://dnx4gzte9b.execute-api.eu-north-1.amazonaws.com/dev/submit',
      {
        // URL that represents the backend API endpoint to which the form data is going to be sent
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    toast.promise(
      fetchPromise,
      {
        loading: 'Please Wait...',
        success: () => {
          resetForm();
          return `Your message is submitted successfully.`;
        },
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      },
    );
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
      <hr />
      <form className={s.form} onSubmit={handleContactForm(submitContactForm)}>
        <h2> Contact Form</h2>
        <div className={s.formcontrol}>
          <Image src="/image/icon/user.png" alt="user" width={40} height={40} />
          <TextField
            fullWidth
            label="Full Name *"
            type="text"
            variant="standard"
            error={!!submitErrors?.name}
            helperText={submitErrors?.name?.message}
            {...registerContactForm('name', validation.name)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image src="/image/icon/mail.png" alt="mail" width={40} height={40} />
          <TextField
            fullWidth
            label="Email *"
            variant="standard"
            error={!!submitErrors?.email}
            helperText={submitErrors?.email?.message}
            {...registerContactForm('email', validation.email)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image
            src="/image/icon/subject.png"
            alt="subject"
            width={40}
            height={40}
          />
          <TextField
            fullWidth
            label="Subject *"
            variant="standard"
            error={!!submitErrors?.subject}
            helperText={submitErrors?.subject?.message}
            {...registerContactForm('subject', validation.subject)}
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
            label="Message *"
            variant="standard"
            multiline
            error={!!submitErrors?.message}
            helperText={submitErrors?.message?.message}
            {...registerContactForm('message', validation.message)}
          />
        </div>
        <div className={s.formaction}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
