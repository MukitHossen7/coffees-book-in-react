import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Tab = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted mt-12 font-medium">
      {categories.map((cate) => (
        <NavLink
          to={`/categories/${cate.category}`}
          key={cate.id}
          role="tab"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
        >
          {cate.category}
        </NavLink>
      ))}
    </div>
  );
};
Tab.propTypes = {
  categories: PropTypes.array,
};
export default Tab;
