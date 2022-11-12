import './index.css'
import React, { useEffect, useState } from 'react';
import { Form, Modal, Button, Header, Icon, Popup } from 'semantic-ui-react'
import { send } from 'emailjs-com';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [sendButtonClicked, setSendButtonClicked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const [emailCopied, setEmailCopied] = useState(false);

  const [confirmModal, setConfirmModal] = useState(false);
  const [emptyInfoModal, setEmptyInfoModal] = useState(false);

  const emailToSend = {
    email: email,
    name: name,
    subject: subject,
    message: message
  };

  useEffect(() => {

  }, [confirmModal]);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (email.length > 0 && message.length > 0) {
      send(
        'service_touczur',
        'template_3rpqij6',
        emailToSend,
        'QafodhtEKVTt4ph66'
      ).then((response) => {

        setConfirmModal(true);

        setEmailSent(true);
        setSendButtonClicked(false);

        clearForm();
      }).catch((err) => {
        alert(err);
      });
    } else {
      setEmptyInfoModal(true);
      setSendButtonClicked(false);
    }
  }

  const clearForm = () => {
    setEmail('');
    setName('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className='Contact' id='contact'>
      <div className='centered div4'>
        <h2 className='title' style={{color: 'rgb(0, 88, 189)'}}>Contact me</h2>
        <p style={{
          color: 'gray',
          fontSize: '18px',
          textAlign: 'left',
          margin: '0px 0px 30px 0px'
        }}
        >
          Do you need help? <br />
          Do you have a problem? <br />
          Or do you have a brilliant idea that you want to bring to life? <br />
          Get in touch with me and let me know! <br />
          If not for any of the above, then send me an email just to say hello. <br />
          I'm always happy to meet new people. <br /><br />
          <Popup trigger={
            <a
              className='my email'
              onClick={() => {
                navigator.clipboard.writeText('christosbis@gmail.com');
                setEmailCopied(true);
              }}
            >
              <strong>
                <Icon name='mail outline' color='blue' />christosbis@gmail.com
                {emailCopied === true && <Icon name='checkmark' color='green' />}
              </strong>
            </a>
          }>
            <Popup.Content><Icon name='copy outline' />Copy email to clipboard</Popup.Content>
          </Popup>
        </p>
        <Form style={{
          fontSize: '18px',
          textAlign: 'left',
          margin: '0px 0px 30px 0px'
        }}
        >
          <Form.Input
            label='Email'
            type='email'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Form.Input
            label='Name'
            type='text'
            placeholder="What's you name?"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Form.Input
            label='Subject'
            placeholder="What's the subject?"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <Form.TextArea
            label='Message'
            placeholder='What can I do for you?'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          {sendButtonClicked === false &&
            <Form.Button 
              style={{backgroundColor: 'rgb(0, 88, 189)', 
                      color: 'aliceblue', 
                      width:'120px', 
                      height:'50px', 
                      fontSize: '18px'}} 
              onClick={(e) => { setSendButtonClicked(true); 
                                sendEmail(e);
                                setEmailSent(false); 
                              }}
            >
              <Icon name='send'/>Send
            </Form.Button>
          }
          {(sendButtonClicked === true && emailSent === false) &&
            <Form.Button 
              loading 
              style={{backgroundColor: 'rgb(0, 88, 189)', 
                      color: 'aliceblue', 
                      width:'120px', 
                      height:'50px', 
                      fontSize: '18px'}}
              >
                <Icon name='send'/>Send
              </Form.Button>
          }
          
        </Form>

        <Modal
          basic
          onClose={() => setConfirmModal(false)}
          onOpen={() => setConfirmModal(true)}
          open={confirmModal}
          size='small'
        >
          <Header>
            Success
          </Header>
          <Modal.Content>
            <p>
              Your email was sent successfully! Christos will get back to you as soon as possible.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' inverted onClick={() => setConfirmModal(false)}>
              OK
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal
          onClose={() => setEmptyInfoModal(false)}
          onOpen={() => setEmptyInfoModal(true)}
          open={emptyInfoModal}
        >
          <Modal.Header>Email form error</Modal.Header>
          <Modal.Content>
              <p>
                Email or message field is empty. 
                Please fill out both fields before resubmitting the form.
              </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={() => setEmptyInfoModal(false)}>
              OK
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
}