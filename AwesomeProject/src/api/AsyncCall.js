
import React from 'react';
import { Text } from 'react-native';
import axios from 'axios';


const apiUrl = 'https://api.github.com/users/hacktivist123/repos';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const loginAPI =async () => {
    try {
      const url = baseUrl+'/1';
      console.log(url);
      const response = await fetch(
        url
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const singupAPIUsingAxios = async () => {
      
    try {
        const url = baseUrl+'/1';
        console.log(url);
        const response = await axios.get(url);
        console.log(response);
        const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

const fetchAPI = () => {

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
      

//   return (
//     <Text>Fetch api example!</Text>
//   );

}

export default loginAPI;
