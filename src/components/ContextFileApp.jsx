import React, { createContext, useContext, useEffect, useState } from "react";

export const FahvContext = createContext();
export const HandleLikeContext = createContext();

export function useFahv() {
  return useContext(FahvContext);
}
export function usehandleLike() {
  return useContext(HandleLikeContext);
}

export default function ContextFileApp({ children }) {
  const [liked, setLiked] = useState(new Set());

  const handleLiked = (likedProfile) => {
    if (liked.has(likedProfile)) {
      liked.delete(likedProfile);
      setLiked(new Set([...liked]));
    } else {
      setLiked(new Set([...liked, likedProfile]));
    }
  };

  useEffect(() => {
    console.log(liked);
  }, [liked]);
  return (
    <FahvContext.Provider value={liked}>
      <HandleLikeContext.Provider value={handleLiked}>
        {children}
      </HandleLikeContext.Provider>
    </FahvContext.Provider>
  );
}
