so now in this video i learn how to import router and how to use it so router is used to build single page application it means that when we do navigation or we want to go to another page of our website or app so the page will not take time for loading we can access that page as like we touch the page and then we get the data of the page 


so now to acieve this functionality 
i want that when i want to read news category wise then i get  that particular news as sson as i touch the category in the website 
so for acieving this i use router , within the router i fetch news componet with different category 

first --> 
in navbar i add categories as list item
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


second -->
now the second thing is i import router in app.js 
so why i import in app.js ? because our app mainly always run from app.js and every component is fetch from app.js 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



third -->
now now i use router syntax , within the router i fetch news componet with different category many times 
i use key props because in runtime i want to navigate easily without refresh the page so key is used to you can navigate to many pages everytime you want without refreshing the page

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={8} country="in" category="general" />}></Route>
              <Route exact path="/business" element={<News key="business" pageSize={8} country="in" category="business" />}></Route>
              <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News key="general" pageSize={8} country="in" category="general" />}></Route>
              <Route exact path="/health" element={<News key="health" pageSize={8} country="in" category="health" />}></Route>
              <Route exact path="/science" element={<News key="science" pageSize={8} country="in" category="science" />}></Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={8} country="in" category="sports" />}></Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={8} country="in" category="technology" />}></Route>
            </Routes>
        </Router>
      </div>
    );
  }
}


fourth -->
now i import link in navbar.js for linking the category to the news component category from app.js 

import { Link } from 'react-router-dom';

fifth -->
now i replace all the anchor tag to Link tag and href attribute as to atribute 
i have done this because when user click on the particular category then this will link to the exact path of compoennt which i specufy in app.js when i fetch news compoenent


the path i give to navbar.js to atribute is same as the path i give app.js exact path attribute using this i can acccess all the data of every category
navbar.js
 <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>  


app.js 
              <Route exact path="/" element={<News key="general" pageSize={8} country="in" category="general" />}></Route>
