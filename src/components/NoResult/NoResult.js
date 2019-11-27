import React from 'react';
import noResult from '../../assets/img/noresult.png';
import styles from './NoResult.module.scss';

const NoResult = ({error}) => (
    <div className={styles.wrapper}>
        <img src={noResult} alt="no result" width="100"/>
        <h2 className={styles.wrapper__message}>{error}</h2>
    </div>
);

export default NoResult;