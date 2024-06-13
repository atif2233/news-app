// import { color } from "framer-motion";
import React from "react";
import './newsItem.css'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://assets1.cbsnewsstatic.com/hub/i/r/2024/02/16/9e326eea-5e6e-4a1c-be68-42cd09ab1870/thumbnail/1200x630/711d871e1eada1b956e024e1065924ce/0215-pt-full-2686680-640x360.jpg?v=2a01790210e495d24a119503c08f840d"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="author">
              By {!author ? "Unknown" : author} {new Date(date).toGMTString()}
            </small>
          </p>
          <a 
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn"
          >
            <span>
            Read More
            </span>
            <i></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem