export function getList() {
  const baseUrl = "../mocked/mainData.json";

  return fetch(baseUrl).then((data) => data.json());
}

export function getActivity() {
  const baseUrl = "../mocked/activity.json";

  return fetch(baseUrl).then((data) => data.json());
}
