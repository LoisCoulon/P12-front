import { UserActivity } from "../models/UserActivity";
import { UserAverageSession } from "../models/UserAverageSession";
import { UserMainData } from "../models/UserMainData";
import { UserPerformance } from "../models/UserPerformance";

/**
 * Get the user informations (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiList(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}`;

  return fetch(baseUrl)
    .then((data) => data.json())
    .then((dataJson) => new UserMainData(dataJson));
}

/**
 * Get the user activities (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiActivity(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/activity`;

  return fetch(baseUrl)
    .then((data) => data.json())
    .then((dataJson) => new UserActivity(dataJson));
}

/**
 * Get the user average sessions (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiDuration(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;

  return fetch(baseUrl)
    .then((data) => data.json())
    .then((dataJson) => new UserAverageSession(dataJson));
}

/**
 * Get the user performances of (Api)
 * @param {string} userId
 * @returns object
 */
export function getApiRadar(userId) {
  const baseUrl = `http://localhost:3000/user/${userId}/performance`;

  return fetch(baseUrl)
    .then((data) => data.json())
    .then((dataJson) => new UserPerformance(dataJson));
}
