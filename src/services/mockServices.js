export function getList() {
  const baseUrl = "../mocked/mainData.json";

  return fetch(baseUrl).then((data) => data.json());
}
