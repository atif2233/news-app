in this video i work on app.js , news.js , newsitem.js and i fetched news api from News Api https://newsapi.org/

first i import navbar and news component's then news import newsitem component 

this is my api key -  b95a1021963f4e49b901b724f73c9a62 

first i create account on newsapi then i get api key

then i get the top headlines from get started -> endpoint -> top-headlines (by that link i get the json formatted data of news )

then i create json file and copy the json data from top-headlines link and paste it to json file named - sampleOutput.json

then i create components named newsitem and news 
in newsItem component i paste the bootstrap card code and use it from news component by importing again and again newsItem component with props 


app.js component - 

import './App.css';
import React , {Component} from 'react';
import { Navbar } from './components/Navbar';
// import { Navitem} from './components/News';
import { News } from './components/News';

export default class App extends Component{
  render()
  {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}


news component - 
 <div className="container my-3">
        <h2> NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col md-4">
            <NewsItem
              title="this is title "
              description=" this is description"
            />
          </div>
          <div className="col md-4">
            <NewsItem
              title="this is title "
              description=" this is description"
            />
          </div>
          <div className="col md-4">
            <NewsItem
              title="this is title "
              description=" this is description"
            />
          </div>
        </div>
      </div>


newsItem component - 

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
          <a href="/newsItem" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}