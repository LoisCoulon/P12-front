/**
 * Those functions allow the connection to the mocked datas
 * @returns mocked data.json
 */
export function getList() {
  const baseUrl = "../mocked/mainData.json";

  return fetch(baseUrl).then((data) => data.json());
}

export function getActivity() {
  const baseUrl = "../mocked/activity.json";

  return fetch(baseUrl).then((data) => data.json());
}

export function getDuration() {
  const baseUrl = "../mocked/averageSession.json";

  return fetch(baseUrl).then((data) => data.json());
}

export function getRadar() {
  const baseUrl = "../mocked/performance.json";

  return fetch(baseUrl).then((data) => data.json());
}
