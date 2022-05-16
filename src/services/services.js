/**
 * Get the user informations (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiList(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}`;

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user activities (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiActivity(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/activity`;

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user average sessions (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiDuration(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user performances of (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiRadar(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/performance`;

  return fetch(baseUrl).then((data) => data.json());
}
