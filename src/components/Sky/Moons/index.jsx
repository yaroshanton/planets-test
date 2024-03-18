import React, {useContext} from 'react';
import cx from 'classnames';
//context
import {SkyContext} from '../';
//styles
import styles from './Moons.module.scss';

const Moons = ({moon}) => {
  const {handleClickMoon} = useContext(SkyContext);

  return (
    <div
      key={moon.id}
      className={cx(styles.moon, moon.active && styles.moon_active)}
      onClick={() => handleClickMoon(moon)}
    >
      {moon.title}
    </div>
  );
};

export default Moons;
