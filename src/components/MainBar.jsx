import React, { useEffect } from "react";
import { useFahv, usehandleLike } from "./ContextFileApp";

export default function MainBar({ devInfo }) {
  const liked = useFahv();
  const handleLiked = usehandleLike();

  const style = {
    backgroundImage: `url(${devInfo.backgroundImage})`,
    width: "200px",
    height: "120px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  };

  return (
    <div className="box">
      <div className="top" style={style}>
        <div className="icon" style={{ cursor: "pointer" }}>
          <i
            className={
              liked.has(devInfo) ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }
            style={liked.has(devInfo) ? { color: "red" } : undefined}
            onClick={() => handleLiked(devInfo)}
          ></i>
        </div>
      </div>
      <div className="bottom">
        <img
          src={devInfo.avater}
          alt={devInfo.name}
          width={40}
          height={40}
          className="avater"
        />
        <div className="bt">
          <div>
            <p className="name">{devInfo.name}</p>
            <p className="fees">{devInfo.fee}$</p>
          </div>
          <div className="hire">
            <a
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              <p>Hire</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
