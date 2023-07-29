import React from "react";
import styles from './css/User.module.css';


export default function User({ user: { profileImgUrl, nickname }}) {
    return (
        <img
            className={styles.profileImage}
            src={profileImgUrl}
            alt={nickname}
        />
    );
}
