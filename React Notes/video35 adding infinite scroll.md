In this video i will learn how to add infinite scroll 

first-->
the first thing i have to do is i have to install react infinite scroll component in my directory using this command npm i react-infinite-scroll-component (i get this command from this npm command side) https://www.npmjs.com/package/react-infinite-scroll-component or you can also just write react infinite scroll this website will showing top of the searchs  

so let's open second powershell using + sign in below bar of right hand side
then run this command npm i react-infinite-scroll-component
in this directory  C:\Users\dell\front end container\React\newsapp>  


second -->
then second i write this code in news.js and place all content you want to show infinite within <InfiniteScroll> closing tag and i also have to import infiniteScroll from react using this statement --
import InfiniteScroll from "react-infinite-scroll-component";


specify all thing like
dataLength -- dataLength={this.state.articles.length}

and which function will call when i want to show infinite data -- next={this.fetchMoreData}

and how many time i want to show data so i put condition that if length is not equal to totalresults then keep going  (means add more data)  --- hasMore={this.state.articles.length !== this.state.totalResults}


what i have to show in down of all content when content is not loaded ---- loader={<Spinner/>}


 <InfiniteScroll
            dataLength={this.state.articles.length} 
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
        >

        all content 


        </InfiniteScroll>


third --> 
then i write function to add more data in this i just increment tha page by one and then fetch more data using api 

 fetchMoreData = async ()=>
  {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parseData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });

  }



fourth -->
i also remove the next and previous button because if news comes by scrolling then what is work of these buttons 


fifth -- >
 i also remove this line from news.js components div of row
!this.state.loading &&

i remove above line from this below roe div 
<div className="row">
          {
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



sixth --->

i wrap the above div into another div classNamme  container because there was horizontall scroll bar is sowing in the bottom of our screen meand our news is going outside the screen so there horizontal scroll is coming to slide and see extra part of news  

so i wrap news content in another div within infiniteScroll tag in news.js like this

 <div className="container">

       
        <div className="row">
          {
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
        </div>