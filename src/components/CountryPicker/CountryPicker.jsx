import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries().country);
    };

    fetchAPI();
  }, []);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries.map((country) => <option key={country.countryInfo._id}>{country.country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
