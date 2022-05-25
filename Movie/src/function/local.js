import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoriteLocal = async (id, isLike) => {
  try {
    const item = { id, isLike };
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(`@storage_Like`, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getFavoriteLocal = async (callBack) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@storage_Like`);
    const value = JSON.parse(jsonValue);
    callBack(value);
  } catch (e) {
    console.log(e);
  }
};
