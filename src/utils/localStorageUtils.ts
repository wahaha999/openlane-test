// localStorageUtil.ts
const setItem = <T>(key: string, value: T): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  const getItem = <T>(key: string): T | undefined => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue !== null ? JSON.parse(serializedValue) as T : undefined;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return undefined;
    }
  };
  
  const removeItem = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };
  
  const clear = (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };
  
  export const localStorageUtil = { setItem, getItem, removeItem, clear };
  