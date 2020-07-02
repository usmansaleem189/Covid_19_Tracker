import React from 'react';

import { Cards } from './components/Cards/Cards';
import { Chart } from './components/Chart/Chart';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';
import { fetchContinentData } from './api';
import { Tables } from './components/Table/Table';


export const App = () => {

    const [state, setState] = useState({ data: {}, country: '' });

    const [continents_array, setContinent_array] = useState([]);
    // let continents_array = [];

    useEffect(() => {
        const fetchedData = async () => {
            const acquiredData = await fetchData();
            setState({ data: acquiredData });
            const tempData = await fetchContinentData();
            //console.log(tempData);
            setContinent_array(tempData.map((continent) => [continent.continent, continent.cases, continent.recovered, continent.deaths]));
            // console.log(continents_array);
        }
        fetchedData();
    }, []
    );

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setState({ data: fetchedData, country: country });

    }

    const { data, country } = state;


    return (
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
            <div>
                <Tables continent={continents_array} />
            </div>
        </div>
    )
}


