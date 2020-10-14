import React from "react";
import "./styles.scss";

export default function ReviewCard({ quality, author, desc, ...props }) {
  return (
    <div className="review-card">
      <div className="quality-author">
        <h4>{quality}</h4>
        <div>
          <p>{author}</p>
          <p>{props.duration}</p>
        </div>
      </div>
      <div className="desc">
        <p>{desc}</p>
        <p>{props.secondaryDesc}</p>
      </div>
    </div>
  );
}
