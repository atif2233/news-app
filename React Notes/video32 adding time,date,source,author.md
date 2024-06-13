In thisvideo i will learn how to add source , date , author of our news in our newsMonkey app

so for achieving this i have to work on news.js and newsItem.js 

first -->
In this news.js component i pass source author and date as props to newsItem.js component 

 author ={element.author}
              date = {element.publishedAt}
              source = {element.source.name}

second-->
i will specify author, date, source in news.js as array destructuring for accessing them directly by it's name as  i destructure them as this.props

let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;


third -->
Now i access them and let's show them on our news card at after description in newsItem.js 
<p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} {new Date(date).toGMTString()}
              </small>
            </p>

fourth -->
now i showed date and author now i have to show source also as badge of our news card on newsItem.js component

i showed source as badge of bootstrap at after div "card"
<span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}>
            {source}
          </span>

and i also make small changes on this badge that is i remove start-100% class because some part of source is hidden in other news card so i remove this start-100% class 
and use separate style for this badge i left this badhe 85% from 100%
and i add add z-Index style also to appear in every card on top and doesn't hidden this badge 

 <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}>
            {source}
          </span>