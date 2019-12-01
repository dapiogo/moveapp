import React from "react";
import bell from "../../assets/img/notification_bell.svg";
import styles from "./Notification.module.scss";

const Notification = ({ message }) => (
    <div className={styles.wrapper}>
        <img src={bell} alt="notification" />
        <p>{message}</p>
    </div >
);

export default Notification;