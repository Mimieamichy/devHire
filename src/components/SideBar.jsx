import { Link } from "react-router-dom";
//import MainBarContent from "./MainBarContent";
//import Favourites from "./Favourites";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <h1>
        Dev<span style={{ color: "rgb(93, 131, 235)" }}>Hire</span>
      </h1>
      <div>
        <div>
          <span className="items">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </span>
        </div>
        <div>
          <span className="items">
            {" "}
            <i className="fa-regular fa-heart"></i>
            <Link to="/fahv">
              <h4>Favourites</h4>
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
}
