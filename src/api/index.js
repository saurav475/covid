import axios from 'axios';

const url = 'https://corona.lmao.ninja/v2/countries';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = 'https://corona.lmao.ninja/v2/countries/:country';
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/historical');

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get('https://corona.lmao.ninja/v2/countries/:country');

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
