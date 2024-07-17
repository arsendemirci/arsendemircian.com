'use client';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import s from './page.module.scss';
import { TextField, Button } from '@mui/material';
import Icon from '@icon';
import { UnderConstruction } from '@/components';

const validation = {
  email: {
    required: 'Please enter a valid email',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email',
    },
  },
  subject: {
    required: 'Please enter your password!',
  },
  name: {
    required: 'Please enter your name!',
  },
  message: {
    required: 'Please enter your name!',
  },
  verificationCode: {
    required: 'Please enter the valid code!',
    pattern: { value: /\b\d{5}\b/, message: 'Please enter the valid code!' },
  },
};
type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Contact() {
  // const [nameValidation, setNameValidatin] = useState({
  //   error: false,
  //   msg: '',
  // });
  const [emailValidation, setEmailValidatin] = useState({
    error: false,
    msg: '',
  });
  // const [subjectValidation, setSubjectValidatin] = useState({
  //   error: false,
  //   msg: '',
  // });
  // const [messageValidation, setMessageNameValidatin] = useState({
  //   error: false,
  //   msg: '',
  // });

  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  const {
    register: registerContactForm,
    handleSubmit: handleContactForm,
    formState: { errors: submitErrors },
    reset: resetForm,
  } = useForm<FormDataType>({ mode: 'onBlur', reValidateMode: 'onChange' });

  const submitContactForm = (data: FormDataType) => {
    // const formData = {
    //   name,
    //   email,
    //   subject,
    //   message,
    // };
    console.log(data);
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
          return `Thanks for reaching out, your message is submitted successfully.`;
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
            error={!!submitErrors?.email || emailValidation.error}
            helperText={submitErrors?.email?.message || emailValidation.msg}
            {...registerContactForm('email', validation.email)}
          />
        </div>
        <div className={s.formcontrol}>
          <Image
            src="/image/icon/mail.png"
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
