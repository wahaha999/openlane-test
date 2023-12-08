const SESSION_TIMEOUT = 100000000; // 60 seconds

export const setSessionStart = (): void => {
  const currentTime = new Date().getTime();
  localStorage.setItem('sessionStart', currentTime.toString());
};

export const checkSessionTimeout = (): boolean => {
  const sessionStartString = localStorage.getItem('sessionStart');
  if (!sessionStartString) {
    return true;
  }

  const sessionStart = parseInt(sessionStartString);
  const currentTime = new Date().getTime();

  return currentTime - sessionStart > SESSION_TIMEOUT;
};

export const clearSession = (): void => {
  localStorage.removeItem('sessionStart');
};
