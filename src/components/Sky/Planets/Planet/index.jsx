import React from 'react';
//styles
import styles from './Planet.module.scss';

const Planet = ({planet}) => {
  return (
    <div key={planet.id} className={styles.planet}>
      <div>{planet.title}</div>
    </div>
  );
};

export default Planet;
