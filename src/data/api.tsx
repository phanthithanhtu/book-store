import axios from 'axios';

export async function getItems() {
  try {
    const response = await axios.get('https://becnpmm.vercel.app/api/novels');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching items');
  }
}

export async function getStory(url: string) {
  try {
    const response = await axios.get(`https://becnpmm.vercel.app/api/novels/novel/${url}`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching story');
  }
}
