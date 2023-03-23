"use client";
import { useState } from "react";

export function LikeButtom({ id }) {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} style={{marginTop:'10px'}}>
        {liked ? "❤️" : "🤍"}
    </button>
  );
}
