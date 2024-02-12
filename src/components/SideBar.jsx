

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
            <a href="#mainContent" target="parent">
              <h4>Home</h4>
            </a>
          </span>
        </div>
        <div>
          <span className="items">
            {" "}
            <i className="fa-regular fa-heart"></i>
            <a href="#favorites" target="parent">
              <h4>Favourites</h4>
            </a>
          </span>
        </div>
      </div>
    </aside>
  );
}
