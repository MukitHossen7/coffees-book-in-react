import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Tab = ({ categories }) => {
  return (
    <div className="pt-12">
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((categorie) => (
          <NavLink
            to="/cards"
            key={categorie.id}
            role="tab"
            className="tab font-medium text-xl"
          >
            {categorie.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
Tab.propTypes = {
  categories: PropTypes.array,
};
export default Tab;
