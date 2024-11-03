import toast from "react-hot-toast";

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
    toast.error("Already exits this items");
  } else {
    setCoffeeData.push(data);
    const coffeeDataStr = JSON.stringify(setCoffeeData);
    localStorage.setItem("fav-item", coffeeDataStr);
    toast.success("Coffee added to favorite items");
  }
};
export { setFavoriteCoffeeData, getFavoriteCoffeeData };
