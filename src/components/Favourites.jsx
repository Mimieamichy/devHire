import { useEffect } from "react";
import { useFahv, usehandleLike } from "./ContextFileApp";
import MainBar from "./MainBar";

export default function Favourites() {
  const liked = useFahv();
  useEffect(() => {
    console.log(liked.keys());
  });

  return (
    <div className="fahvH">
      <h1>Hire Top Developers</h1>
      <div id="favorites" >
        {liked.size === 0 ? (
          <div className="non">No Selected Favourites....</div>
        ) : (
          <div className="fahv">
            {[...liked].map((data) => {
              return <MainBar key={data.id} devInfo={data} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
