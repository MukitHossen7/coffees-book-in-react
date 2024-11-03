const getFavoriteCoffeeData = () => {
  const getCoffeeData = localStorage.getItem("fav-item");
  if (getCoffeeData) {
    const coffeeDataObj = JSON.parse(getCoffeeData);
    return coffeeDataObj;
  } else {
    return [];
  }
};
const setFavoriteCoffeeData = (data) => {
  const setCoffeeData = getFavoriteCoffeeData();
  if (setCoffeeData.includes(data)) {
    alert("Data aca");
  } else {
    setCoffeeData.push(data);
    const coffeeDataStr = JSON.stringify(setCoffeeData);
    localStorage.setItem("fav-item", coffeeDataStr);
  }
};
export { setFavoriteCoffeeData, getFavoriteCoffeeData };
