import React, {useEffect, useState, useMemo} from 'react';
import { useSelector } from 'react-redux';
import s from './Modal.module.css';

const Modal = () => {  
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
            window.addEventListener('keydown', e => handleKeyDown(e))
    });

    const handleKeyDown = e => {
        (e.code === 'Escape') && toggleModal();
    };

    const toggleModal = () => setShowModal(!showModal);

    const messages = useSelector(store => store.message.items);

    const lastMessage = useMemo(() => {
        return messages[messages.length - 1]
    }, [messages]);

    // lastMessage && const { name, message } = lastMessage.data.newMessage; 

//     if (!!lastMessage) {
//      const { name, message } = lastMessage.data.newMessage; 
//   }
    

    useEffect(() => {
        if (messages.length) {
            setShowModal(true)
        }
    }, [messages]);

    return (
        showModal ?
            (<div className={s.Overlay} onClick={toggleModal}>
                <div className={s.Modal}>
                    <p className={s.title}>Уважаемый {lastMessage.data.newMessage.name}!</p>
                    <p className={s.mess}>Получена Ваша заявка:</p>
                    <p className={s.order}>{lastMessage.data.newMessage.message}</p>
                    <p className={s.mess}>Она будет выполнена сразу после проплаты. Банковские реквизиты и сумму мы сообщим Вам отдельным письмом. Ваш емейл нам известен :)</p>
                </div>
            </div>) :
            null
    );
};

export default Modal;

