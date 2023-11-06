import axios from 'axios';

export async function getItems() {
  try {
    const response = await axios.get('https://becnpmm.vercel.app/api/novels');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching items');
  }
}

export async function getuser() {
  try {
    const response = await axios.get('https://webnovelapi.azurewebsites.net/api/accounts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}
