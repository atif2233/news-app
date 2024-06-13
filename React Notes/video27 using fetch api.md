in this video i will fetch news api using fetch api because i want to access data directly and do not store data in array to other part 

for using fetch api i use componentDidMount method to use fetch api 

componentDidMount ----->

It is a life cycle method which is used to initialize state and fetch data from api 

this method will invoked immediately after the component rendered first time 

this method is commonly used to perform actions just after component is rendered 

see below example to understand componentDidMount method 
async componentDidMount()
  {
    let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles})
  }

here i use fetch api to fetch news api using that url variable 
after this i set the data using setState 
i also parsed the data into json format 


i also remove slice method which is cutting description and title method for shorting the news content in every box 
<NewsItem
              title={element.title ? element.title.slice(0,45) : ""}
              description={element.description ? element.description.slice(0,45) : ""}
              imageUrl = {element.urlToImage}
              newsUrl = {element.url}
            />

<NewsItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl = {element.urlToImage}
              newsUrl = {element.url}
            />


i use ternary operator in NewsItem Component in image because if image is not in api data then i add another image in image area ---------->
<img src={!imageUrl ? "https://assets1.cbsnewsstatic.com/hub/i/r/2024/02/16/9e326eea-5e6e-4a1c-be68-42cd09ab1870/thumbnail/1200x630/711d871e1eada1b956e024e1065924ce/0215-pt-full-2686680-640x360.jpg?v=2a01790210e495d24a119503c08f840d" : imageUrl} className="card-img-top" alt="..." />
       
