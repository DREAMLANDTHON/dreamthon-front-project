import React from "react";
import {Link} from "react-router-dom";
import styles from './css/Welcome.module.css';

export default function Welcome() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src='/logo.png' alt='logo'/>
            <h1 className={styles.title}>민트스팟</h1>
            <div className={styles.info}>
                <p className={styles.description}>
                    누구에게도 말 못할 성 고민이 있으신가요?
                    나의 몸 상태에 대해 빠르게 진단 받고 싶으신가요?
                    누구의 눈치도 보지 말고 민트 스팟에게 모든 것을 물어보세요
                </p>
                <p className={styles.caption}>
                    ⚠️주의: 비방, 비하, 욕설 등에 대한 질문은 이용이 자동으로 제한됩니다.
                </p>
            </div>
            <div className={styles.buttonposition}>
                <Link to={'/Chatbot'}>
                    <button className={styles.btn}>Start</button>
                </Link>
            </div>
        </div>
    );
}
