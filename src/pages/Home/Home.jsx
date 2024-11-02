import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Heading/Heading";
import Tab from "../../components/Tab/Tab";
// import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Home = () => {
  // const coffees = useLoaderData();
  const categories = useLoaderData();

  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/coffees");
  };

  return (
    <div>
      <Banner></Banner>
      <Heading
        title="Browse Coffees by Category"
        description="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
      <Tab categories={categories}></Tab>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-14 gap-8">
        {[...coffees].slice(0, 6).map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
        ))}
      </div> */}
      <button
        onClick={handleViewAll}
        className="btn bg-yellow-300 font-bold px-10 mt-10"
      >
        View All
      </button>
    </div>
  );
};

export default Home;
