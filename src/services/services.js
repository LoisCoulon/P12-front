/**
 * Those functions allow the connection to the different endpoints of the Api
 * @returns data.json
 */

export function getApiList(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}`;

  return fetch(baseUrl).then((data) => data.json());
}

export function getApiActivity(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/activity`;

  return fetch(baseUrl).then((data) => data.json());
}

export function getApiDuration(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;

  return fetch(baseUrl).then((data) => data.json());
}

export function getApiRadar(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/performance`;

  return fetch(baseUrl).then((data) => data.json());
}
