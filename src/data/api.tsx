import axios from 'axios';
export async function getItems() {
  try {
    const response = await axios.get('https://becnpmm.vercel.app/api/novels/');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching items');
  }
}
export async function getNewlist() {
  try {
    const response = await axios.get('https://becnpmm.vercel.app/api/novels/novel/newupdate');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching items');
  }
}
export async function getTops() {
  try {
    const response = await axios.get('https://becnpmm.vercel.app/api/novels/novel-toprating');
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
export async function getChapterByNumber(tentruyen: string | undefined, chapnum: string | number) {
  try {
    const response = await axios.get(
      `https://becnpmm.vercel.app/api/novels/novel/${tentruyen}/chuong/${chapnum}`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching story');
  }
}
export async function getNameChapters(url: string) {
  try {
    const response = await axios.get(
      `https://becnpmm.vercel.app/api/novels/novel//novels/novel/${url}/mucluc`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching story');
  }
}
