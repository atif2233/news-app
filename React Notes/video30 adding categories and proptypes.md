first i add country using props so that i can change country dynamically when i want to see that particular country

i access country in every api url using props and pass country as props from app.js to news.js 
app.js
 <News pageSize = {5} country="in"/>

news.js 
 let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;


after this i do second this which is ->
i add default props and props type for our props in news.js using importing PropTypes from prop-types

import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 8
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number
  }


now i work on news category 
that if any one want to read news on thre interest like sports , sceince ,technology , and many others news 
then they can read 
so for this right now i pass the category as props from app.js to news.js and access that props in api url 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=1&pageSize=${this.props.pageSize}`;

so when i pass science as props from app.js then the science will show 
but it is not the correct way to show news because i don't change the props value everytime 
i want that when user want to read sport's news than user can touch the sport section in navbar and the user can read sport news 
so for achieving this functionality i add all the news categories in navbar section as list item in navbar.js 
but it will not work right now because i did not write the logic behind this i will do it after learning in upcoming videos 


      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Technology</a>
        </li>
      </ul>


and i also made some small changes in news.js like at heading i add margin so it make some gap between heading and the news content 

i also remove the width in newsitem.js in card container because it is not give good userinterface in mobile 