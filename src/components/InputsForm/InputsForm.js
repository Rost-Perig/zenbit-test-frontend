import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; 
import  { addMessage } from 'redux/messages/messages-operations';
import s from './InputsForm.module.css';

export default function InputsForm() { 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const contactToServer = ({name, email, message}) => dispatch(addMessage({name, email, message}));  

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'subscriber':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'message':
        setMessage(e.currentTarget.value);
        break;
      default:
        break;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    contactToServer({name, email, message});
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <div className={s.frame}>
      <form
        onSubmit={handleSubmit}
        className={s.form}
        autoComplete="on">
            <h2>Reach out to us!</h2>
            <label >
              <input
                className={s.input}
                type="text"
                name="subscriber"
                placeholder="Your name*"
                value={name}
                onChange={handleInputChange}  
                pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, цифр, апострофа, тире и пробелов."
                required
              />
            </label>

            <label>
                <input
                className={s.input}
                type="email"
                name="email"
                placeholder="Your e-mail*"
                value={email}
                onChange={handleInputChange} 
                required
              />
            </label> 

        <label >
              <textarea
                className={s.input}
                style={{height: 189, paddingTop: 31}}
                type="text"
                // maxlength="120"
                name="message"
                placeholder="Your message*"
                value={message}
                onChange={handleInputChange}  
                pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Сообщение может содержать не более 120 знаков и состоять только из букв, цифр, апострофа, тире и пробелов."
                required>
              </textarea>
            </label>
        <button type="submit" className={s.btn}>Send message</button>
        </form> 
      </div>
    )
  };

InputsForm.propTypes = {
  subscriber: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string
};
