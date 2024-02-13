import { devInfo } from "../constants/data";
import MainBar from "./MainBar";

export default function MainBarContent() {
  return (
    <div className="maincontent" id="mainContent">
      <h1>Hire Top Developers</h1>
      <div className="content">
        {devInfo.map((data) => {
          return <MainBar key={data.id} devInfo={data} />;
        })}
      </div>
    </div>
  );
}
