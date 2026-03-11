export const getApiResponce = async (url) => {
  try {
     const response = await fetch(url)
    if (!response.ok) {
      console.error("ошибка:", response.status)
      return false;
    }

    const data = response.json();

    return data;
  } catch (error) {
    console.error("Ошибка:", error.message);
    return false;
  }  
};