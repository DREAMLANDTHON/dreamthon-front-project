import React, {useContext, useEffect, useState} from "react";
import InputQuestion from "../../../components/InputQuestion";
import {getDialogAnswer, getGptAnswer} from "../../../api/Dialog";
import styles from './css/Chats.module.css';
import {FiPlusCircle} from "react-icons/fi";
import User from "../../../components/User";
import {useAuthContext} from "../../../context/AuthContext";
import {useLocation} from "react-router-dom";

export default function Chats() {
    const [chats, setChats] = useState([
        {
            question: "안녕?",
            answer: "오! 안녕하세요!"
        }
    ]);

    // const messages = useRef(null);
    // const scrollToBottom = () => {
    //     messages.currnet?.scrollIntroView({ behavior: 'smooth'});
    // };
    //
    // useEffect(() => {
    //     scrollToBottom();
    // }, [chats]);

    const pathname = useLocation().pathname;
    const keyword = decodeURIComponent(
        pathname.replace('/Chatbot/', '')
    );

    const chatbotProfile = "https://archeage.xlgames.com/board/attachments/8a948b8246d1aa200146d375af62001e";
    let chatbotName = keyword + " 전문가";
    console.log(keyword);

    if (keyword === "몸") {
        chatbotName = "몸짱님";
    } else if (keyword === "성생활") {
        chatbotName = "성성숙님";
    } else if (keyword === "실전") {
        chatbotName = "실전 전문가";
    } else {
        chatbotName = "전문가"
    }

    const {user, login, logout} = useAuthContext();

    async function handleAdd(answer){
        const result = await getDialogAnswer(answer);
        setChats([...chats, result]);
    }

    async function handleGPT(answer) {
        const result = await getGptAnswer(answer);
        setChats([...chats, result]);
    }

    return (
            <section className={styles.container}>
                <div className={styles.chatting}>
                    {
                        chats.map((message, index) => {
                            return (
                                <div>
                                    <div className={`${styles.question} ${styles.chatdetail}`}>
                                        <div className={styles.profilearea}>
                                            <div className={styles.iimg}>
                                                <User user={user}></User>
                                            </div>
                                            <p className={styles.nickname}>{user.nickname}</p>
                                        </div>
                                        <div className={styles.chatcontent}>{message.question}</div>
                                    </div>

                                    <div className={`${styles.answer} ${styles.chatdetail}`}>
                                        <div className={styles.profilearea}>
                                            <div className={styles.iimg}>
                                                <User user={{profileImgUrl: chatbotProfile, nickname: chatbotName}}></User>
                                            </div>
                                            <p className={styles.nickname}>{chatbotName}</p>
                                        </div>
                                        <div className={styles.chatcontent}>{message.answer}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={styles.inputarea}>
                    <InputQuestion onAdd={(keyword === '몸') ? handleGPT : handleAdd}/>
                    <div className={styles.btn1}>
                        <FiPlusCircle/>
                    </div>
                </div>

            </section>
    );
}
