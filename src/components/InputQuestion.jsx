import React, {useState} from "react";
import styles from './css/InputQuestion.module.css';
import { HiPaperAirplane } from 'react-icons/hi'

export default function InputQuestion({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            return;
        }
        onAdd(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Send a message'
                    value={text}
                    onChange={handleChange}
                />
                <button className={styles.inputbtn}>
                    <HiPaperAirplane/>
                </button>
            </div>
        </form>
    );
}
