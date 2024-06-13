import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {motion} from "framer-motion";
import logo from "./newsMonkeyLogo.png";
// import './news.scss'
import './news.css';

const News = (props) => {
  
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3.5,
      staggerChildren: 0.1,
    },
  },
};

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalREsults] = useState(0);

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  props.setProgress(40);
  let parseData = await data.json();
  props.setProgress(70);

  setArticles(parseData.articles);
  setTotalREsults(parseData.totalResults);
  setLoading(false);

  props.setProgress(100);
};
useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  updateNews();
  // eslint-disable-next-line 
}, []);

const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  let data = await fetch(url);
  let parseData = await data.json();
  setArticles(articles.concat(parseData.articles))
  setTotalREsults(parseData.totalResults)
 
};

return (
  <>
    <motion.h1 className="text-center" style={{ margin: "30px 0px" , marginTop: '90px' }} variants={textVariants} initial="initial" animate="animate">
      NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      <img className="logo" src={logo} style={{backgroundSize: "cover" , width: "230px" , height: "210"}}></img>
    </motion.h1>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  </>
);
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
