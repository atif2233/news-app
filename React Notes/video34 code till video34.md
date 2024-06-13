app.js 

import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  page = 9;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="general"pageSize={this.page} country="in" category="general" />}></Route>
              <Route exact path="/business" element={<News key="business"pageSize={this.page} country="in" category="business" />}></Route>
              <Route exact path="/entertainment" element={ <News key="entertainment"pageSize={this.page} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News key="general"pageSize={this.page} country="in" category="general" />}></Route>
              <Route exact path="/health" element={<News key="health"pageSize={this.page} country="in" category="health" />}></Route>
              <Route exact path="/science" element={<News key="science"pageSize={this.page} country="in" category="science" />}></Route>
              <Route exact path="/sports" element={<News key="sports"pageSize={this.page} country="in" category="sports" />}></Route>
              <Route exact path="/technology" element={<News key="technology"pageSize={this.page} country="in" category="technology" />}></Route>
            </Routes>
        </Router>
      </div>
    );
  }
}


news.js

import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter  = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;

  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews();
    });
  };
  

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews();
    });
  };
  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

newsItem.js

import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}>
            {source}
          </span>
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
              <small className="text-muted">
                By {!author ? "Unknown" : author} {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary bg-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

navbar.js

import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends  Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        )
    }
}

spinner.js

import React, {Component} from 'react'
import laoding from './loading.gif'

export class Spinner extends Component
{
    render()
    {
        return (
            <div className='text-center'>
                <img src={laoding} alt='Loading'/>
            </div>
        )
    }
}

export default Spinner