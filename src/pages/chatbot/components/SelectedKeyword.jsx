import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Button from "../../../components/Button";
import User from "../../../components/User";
import {useAuthContext} from "../../../context/AuthContext";
import styles from './css/SelectedKeyword.module.css';
import { FiArrowRight } from "react-icons/fi";

export default function SelectedKeyword() {

    const {user, login, logout} = useAuthContext();
    const [keywords, setKeywords] = useState(['몸', '성생활', '성적 자아', '실전']);
    return (
        <div className={styles.top}>
            <header className={styles.header}>
                {!user && <Button text={'Log in'} onClick={login}>Log in</Button>}
                {user && <div className={styles.profile}><User user={user}/></div>}
                {user && <div className={styles.logoutbtn}><Button text={'Log out'} onClick={logout}/></div>}
            </header>
            <main className={styles.maincontainer}>
                <h1 className={styles.title}>민트스팟 컨텐츠</h1>
                <p className={styles.description}>
                    궁금한 컨텐츠를 선택하여 MiniSpot에게 질문해보세요!
                </p>
                <section className={styles.options}>
                    {keywords.map((keyword, index) =>
                            <div>
                                <Link to={`/Chatbot/${keyword}`} key={index}>
                                    <button className={styles.option}>{keyword}</button>
                                </Link>
                                <FiArrowRight></FiArrowRight>
                            </div>
                    )}
                </section>
            </main>
        </div>
    );
}
