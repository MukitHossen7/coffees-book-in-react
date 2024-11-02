import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const { coffeeId } = useParams();
  const coffeeDetails = useLoaderData();
  console.log(coffeeDetails);
  const findData = coffeeDetails.find(
    (coffeeData) => coffeeData.id === parseInt(coffeeId)
  );

  console.log(findData);
  return (
    <div>
      <h1> {findData.description} </h1>
      <img src={findData.image}></img>
    </div>
  );
};

export default CoffeeDetails;
