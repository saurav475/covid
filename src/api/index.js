import axios from 'axios';

const url = 'https://corona.lmao.ninja/v2/countries';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = 'https://corona.lmao.ninja/v2/countries/:country';
  }

  try {
    const { data: { cases, recovered, deaths, updated } } = await axios.get(changeableUrl);

    return { active: cases, recovered, deaths, updated };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/historical');

    return data.map(({ cases, recovered, deaths }) => ({ confirmed: cases, recovered, deaths }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get('https://corona.lmao.ninja/v2/countries');

    return countries.map((country) => country);
  } catch (error) {
    return error;
  }
};
