import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import useInput from '../../hooks/use-input';
import emailjs from 'emailjs-com';
import classes from './Contact.module.scss';
import { CodePenIcon, GitHubIcon, LinkedInIcon } from '../icons';

const isNotEmpty = (value: any) => value.trim() !== '';
const isEmail = (value: any) => value.includes('@') && value.includes('.');

toast.configure();

const Contact = (props: any) => {
  const form = useRef<null | HTMLFormElement>(null);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputIsInvalid,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
    reset: resetMailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputIsInvalid,
    valueChangeHandler: subjectInputChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputIsInvalid,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    nameInputBlurHandler();
    mailInputBlurHandler();
    subjectInputBlurHandler();
    messageInputBlurHandler();

    if (
      !enteredNameIsValid ||
      !enteredMailIsValid ||
      !enteredSubjectIsValid ||
      !enteredMessageIsValid
    )
      return;

    if (!form.current) return;

    const id = toast.loading('Sending...', {
      position: toast.POSITION.TOP_CENTER,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      hideProgressBar: true,
    });

    emailjs
      .sendForm(
        'service_p2rj43o',
        'template_tni32te',
        form.current,
        'user_yxlB9jsBIB4hr8akK898b'
      )
      .then(
        (resolve) => {
          resetNameInput();
          resetMailInput();
          resetSubjectInput();
          resetMessageInput();

          toast.update(id, {
            render: 'Mail successfully sent!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
        },
        (error) => {
          toast.update(id, {
            render: 'An error occurred!',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <Fragment>
      <div className={classes.contact}>
        <form ref={form} onSubmit={formSubmissionHandler}>
          <div>
            <input
              type='text'
              name='name'
              placeholder='name'
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
            {nameInputIsInvalid && <p>Name must not be empty.</p>}
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='yourmail@gmail.com'
              onChange={mailInputChangeHandler}
              onBlur={mailInputBlurHandler}
              value={enteredMail}
            />
            {mailInputIsInvalid && <p>Please enter a valid format! (@, .)</p>}
          </div>
          <div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              onChange={subjectInputChangeHandler}
              onBlur={subjectInputBlurHandler}
              value={enteredSubject}
            />
            {subjectInputIsInvalid && <p>Subject must not be empty.</p>}
          </div>
          <div>
            <textarea
              name='message'
              placeholder='message'
              onChange={messageInputChangeHandler}
              onBlur={messageInputBlurHandler}
              value={enteredMessage}
            />
            {messageInputIsInvalid && <p>Message must not be empty.</p>}
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
      <div className={classes.social}>
        <div>
          <h2>Marko Tasic</h2>
          <span>
            <a
              href='https://github.com/markotasic'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/markotasicc/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
            <a
              href='https://codepen.io/your-work'
              target='_blank'
              rel='noreferrer'
            >
              <CodePenIcon />
            </a>
          </span>
        </div>
        <div>
          <h2>ZlatkoR</h2>
          <span>
            <a href='dsa'>
              <GitHubIcon />
            </a>
            <a href='dsa'>
              <LinkedInIcon />
            </a>
            <a href='dsa'>
              <CodePenIcon />
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
