in this video 25 mainly i learn state in class based component 

1 ------>
first i pass the image url using props from news.js component to newsitem.js component 
news.js component 
imageUrl = "https://ichef.bbci.co.uk/news/1024/branded_news/14613/production/_132557438_klangwechsel_22_internet-6d4bea11.jpg"

newsitem.js component 
<img src={imageUrl} className="card-img-top" alt="..." />


2------>
constructor 
constructor is a special method in react which is mainly used for 2 purposes ->
1--> initialization of state 
2--> bind event handlers 
constructor()
  {
    super();
    this.state = {
        articles : this.articles,
        loading : false 
    }
  }

we can set state by using -> this.setState   


3------>
State in class based component ->

state in class based component is built in feature.
State represents the current condition or data of a component, which can change over time due to user interactions, network responses, or other events.
we need to create this.state object within the constructor and after super method to manage and create state
in class based component. 

we make this.state object to create and manage state 
this.state = {
        articles : this.articles,
        loading : false 
    }