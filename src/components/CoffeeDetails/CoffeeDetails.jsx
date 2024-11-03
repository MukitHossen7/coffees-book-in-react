import { useLoaderData, useParams } from "react-router-dom";
import nutrition from "../../assets/nutrition.png";
import { setFavoriteCoffeeData } from "../../utilites/localStroageDB";
const CoffeeDetails = () => {
  const { coffeeId } = useParams();
  const coffeeDetails = useLoaderData();
  console.log(coffeeDetails);
  const findData = coffeeDetails.find(
    (coffeeData) => coffeeData.id === parseInt(coffeeId)
  );

  const handleFavoriteData = (data) => {
    setFavoriteCoffeeData(data);
  };

  return (
    <div className="pt-10">
      <h1 className="text-4xl font-light"> {findData.description} </h1>
      <div className=" shadow-xl">
        <img
          src={findData.image}
          className="w-full object-cover  pt-5 rounded-xl "
        ></img>
      </div>
      <div className="flex justify-between items-center pt-7">
        <div>
          <h1 className="font-thin text-3xl">{findData.name}</h1>
          <p className="font-medium">Popularity: {findData.popularity}</p>
          <p className="font-medium">Rating : {findData.rating}</p>
        </div>
        <button
          onClick={() => handleFavoriteData(findData.id)}
          className="bg-yellow-300 font-semibold btn px-8"
        >
          Add Favorite
        </button>
      </div>
      <div className="pt-14">
        <h2 className="font-thin text-2xl">Making Process:</h2>
        <p className="font-medium">{findData.making_process}</p>
      </div>
      <div className="pt-14 flex items-center justify-between">
        <div>
          <div className="">
            <h2 className="font-thin text-2xl">Ingredients:</h2>
            <ul className="list-disc ml-14 pt-6">
              {findData.ingredients.map((ingre, idx) => (
                <li key={idx}>{ingre}</li>
              ))}
            </ul>
          </div>
          <div className="pt-6">
            <h2 className="font-thin text-2xl">Nutrition:</h2>
            <ul className="list-disc ml-14 pt-6">
              <li>calories :{findData?.nutrition_info?.calories} </li>
              <li>fat: {findData?.nutrition_info?.fat} </li>
              <li>carbohydrates: {findData?.nutrition_info?.carbohydrates}</li>
              <li>protein: {findData?.nutrition_info?.protein}</li>
            </ul>
          </div>
        </div>
        <img src={nutrition} className="h-96  object-cover"></img>
      </div>
    </div>
  );
};

export default CoffeeDetails;
