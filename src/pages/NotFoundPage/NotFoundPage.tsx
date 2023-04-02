import React, { FC } from 'react';

import styles from './NotFoundPage.module.css';

const NotFoundPage: FC = () => {
  return (
    <div>
      <h1 className={`${styles.neon} ${styles.number} text text_type_main-large`}>404</h1>
      <h2 className={`${styles.neon} ${styles.text} text text_type_main-large`}>Page not found</h2> 
    </div>
  );
};

export default NotFoundPage;