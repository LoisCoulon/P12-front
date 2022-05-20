export class UserMainData {
  constructor(jsonData) {
    this.id = jsonData.data.id;
    this.firstName = jsonData.data.userInfos.firstName;
    this.lastName = jsonData.data.userInfos.lastName;
    this.age = jsonData.data.userInfos.age;
    this.score = jsonData.data.score || jsonData.data.todayScore;
    this.calorieCount = jsonData.data.keyData.calorieCount;
    this.proteinCount = jsonData.data.keyData.proteinCount;
    this.carbohydrateCount = jsonData.data.keyData.carbohydrateCount;
    this.lipidCount = jsonData.data.keyData.lipidCount;
  }
}
