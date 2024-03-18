import React, {useLayoutEffect, useState, useMemo, createContext, useCallback} from 'react';
//components
import Planets from './Planets';
//helpers
import {
  planets,
  moons,
  handleInitActivePlanets,
  handleInitActiveMoons,
  getUpdatedMoonsData,
  getUpdatedPlanetsData,
} from './helpers';

export const SkyContext = createContext();

const Sky = () => {
  const [planetsData, setPlanetsData] = useState([]);
  const [moonsData, setMoonsData] = useState([]);

  useLayoutEffect(() => {
    setPlanetsData(handleInitActivePlanets(planets));
    setMoonsData(handleInitActiveMoons(moons));
  }, []);

  const handleClickMoon = useCallback(
    (clickedMoon) => {
      setMoonsData(getUpdatedMoonsData(moonsData, clickedMoon));
      setPlanetsData(getUpdatedPlanetsData(planetsData, clickedMoon));
    },
    [moonsData, planetsData]
  );

  const SkyContextValue = useMemo(() => {
    return {
      planetsData,
      moonsData,
      setPlanetsData,
      setMoonsData,
      handleClickMoon,
    };
  }, [planetsData, moonsData, handleClickMoon]);

  return (
    <div>
      <SkyContext.Provider value={SkyContextValue}>
        {planetsData.map((planet) => (
          <Planets key={planet.id} planet={planet} />
        ))}
      </SkyContext.Provider>
    </div>
  );
};

export default Sky;
