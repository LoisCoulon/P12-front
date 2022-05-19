/**
 * Get the user informations (mocked)
 * @returns object
 */
export function getList() {
  const baseUrl = "../mocked/mainData.json";

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user activities (mocked)
 * @returns object
 */
export function getActivity() {
  const baseUrl = "../mocked/activity.json";

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user average sessions (mocked)
 * @returns object
 */
export function getDuration() {
  const baseUrl = "../mocked/averageSession.json";

  return fetch(baseUrl).then((data) => data.json());
}

/**
 * Get the user performances of (mocked)
 * @returns object
 */
export function getRadar() {
  const baseUrl = "../mocked/performance.json";

  return fetch(baseUrl).then((data) => data.json());
}
