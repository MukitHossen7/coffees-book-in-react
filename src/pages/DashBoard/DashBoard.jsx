import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { getFavoriteCoffeeData } from "../../utilites/localStroageDB";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [isDisplay, setIsDisplay] = useState([]);

  const localData = getFavoriteCoffeeData();
  const coffeesData = useLoaderData();

  const displayData = [];

  for (let singleData of localData) {
    coffeesData.filter((item) => {
      if (item.id === singleData) {
        displayData.push(item);
      }
    });
  }

  useEffect(() => {
    setIsDisplay(displayData);
  }, []);

  return (
    <div className="pt-10">
      <div>
        <Heading
          title="Welcome to Dashboard"
          description="Manage coffees that you have previously added as favorite. You can view or remove them from here."
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {isDisplay.map((coffee) => (
            <div key={coffee.id} className="card bg-base-100  shadow-xl">
              <figure>
                <img
                  src={coffee.image}
                  alt="Shoes"
                  className="h-72 w-full object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {coffee.name}</h2>
                <p>Category : {coffee.category}</p>
                <p>Type : {coffee.type}</p>
                <p>Origin : {coffee.origin}</p>
                <p>Ratting : {coffee.rating}</p>
                <p>Popular : {coffee.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
