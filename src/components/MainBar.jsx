
import React from "react";

export default function MainBar({backgroundImage, avater, name, fee }){
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    width: "200px",
    height: "120px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  };

  const [liked, setLiked] = React.useState(false);
  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="box">
      <div className="top" style={style}>
        <div className="icon" style={{ cursor: "pointer" }}>
          <i
            className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
            onClick={handleLiked}
            style={liked ? { color: "red" } : undefined}
          ></i>
        </div>
      </div>
      <div className="bottom">
        <img
          src={avater}
          alt={name}
          width={40}
          height={40}
          className="avater"
        />
        <div className="bt">
          <div>
            <p className="name">{name}</p>
            <p className="fees">{fee}$</p>
          </div>
          <div className="hire">
           <a href=""> <p>Hire</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
