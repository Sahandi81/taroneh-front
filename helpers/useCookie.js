import jsCookie from 'js-cookie';

export function getCookie(key) {
  let result = [];
  if (key) {
    const localData = jsCookie.get(key);
    if (localData && localData.length > 0) {
      result = JSON.parse(localData);
    }
  }

  return result;
}

export function setCookie(key, value, expire) {
  jsCookie.set(key, JSON.stringify(value), {
    expires: expire,
    secure: process.env.NODE_ENV !== 'development'
  });
}