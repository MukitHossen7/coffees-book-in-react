import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Heading/Heading";
import Tab from "../../components/Tab/Tab";

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
      {/* categories btn dynamically */}
      <Tab categories={categories}></Tab>

      {/* coffee data dynamically */}

      <Outlet></Outlet>

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
