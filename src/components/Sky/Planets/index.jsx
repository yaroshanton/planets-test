import React, {useContext} from 'react';
//context
import {SkyContext} from '../';
//components
import Planet from './Planet';
import Moons from '../Moons';
//styles
import styles from './Planets.module.scss';

const Planets = ({planet}) => {
  const {moonsData} = useContext(SkyContext);

  return (
    <div className={styles.content}>
      <Planet planet={planet} />

      {Array.from({length: planet.active}, (_, index) => (
        <div key={index} className={styles[`active${index + 1}`]}></div>
      ))}

      <div className={styles.moons}>
        {moonsData
          .filter((moon) => moon.planetId === planet.id)
          .map((moon) => (
            <Moons key={moon.id} moon={moon} />
          ))}
      </div>
    </div>
  );
};

export default Planets;
