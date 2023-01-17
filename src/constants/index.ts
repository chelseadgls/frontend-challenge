import axios from "axios";

export const API_URL = 'https://union-staging.barstoolsports.com/v2/stories/latest'

export const getFeed = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateFeed = async () => {
  try {
    const response = await axios.get('https://union-staging.barstoolsports.com/v2/stories/latest?page=2')
    return response.data;
  } catch (error) {
    throw error;
  }
}