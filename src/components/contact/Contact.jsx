import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Loader from 'react-loader-spinner';

import './contact.scss';

export default function Contact() {
  const [sendingStatus, setSendingStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const onChangeEmail = ({ target }) => setEmail(target.value);
  const onChangeMessage = ({ target }) => setMessage(target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_gnx305c',
        'template_w2w75m6',
        form.current,
        'user_gDsyKgWtWdeFlIDqUlbqk'
      )
      .then(
        (result) => {
          console.log('log--result ', result);
          setSendingStatus(true);
        },
        (error) => {
          alert(error.text || 'Something went wrong!');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            placeholder='Email'
            name='user_email'
            onChange={onChangeEmail}
          />
          <textarea
            placeholder='Message'
            name='message'
            onChange={onChangeMessage}
          ></textarea>
          <button type='submit' disabled={loading || !email || !message}>
            {loading ? (
              <Loader
                type='Puff'
                color='#00BFFF'
                height={20}
                width={20}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            ) : (
              'Send'
            )}
          </button>
          {sendingStatus && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
