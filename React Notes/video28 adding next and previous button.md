in this video i learn how to add Previous & Next Buttons to populate NewsItems

first -> 

first i will createa div container and create two buttons within this div container in the news.js component

 <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" >&larr; Previous</button>
          <button type="button" className="btn btn-dark" >Next &rarr;</button>
        </div>


second ->>

second i will create arrow for next and previous buttons from w3schools where i get code to make arrow

code for previous arrow - > &larr;
code for next arrow - > &rarr;

third ->

third i use onClick event listener in both of the buttons and make two function for next and previous buttons
in the news.js component

 <div className="container d-flex justify-content-between">
          <button disabled ={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

handlePrevClick = async () =>  {
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   this.setState({
    page : this.state.page - 1,
    articles : parseData.articles
   })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {

    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   this.setState({
    page : this.state.page + 1,
    articles : parseData.articles
   })
    }
    

four ->
 the fourth thing i did is adding disabled functionality in previous button when the page is equal or less than page 1 

 <div className="container d-flex justify-content-between">
          <button disabled ={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

fifth ->>>

fifth thing i did in the news.js component is i also disabled next button (not totally disable but it will not work ) because i want that if the there is no data or no other page after the present page then i don't want to see empty data page where no content is available 

so for achieving this i use pageSize parameter which is provded by newsAPi 
In the context of the News API you're using, the pageSize parameter specifies the number of results (articles) that should be returned per page in the API response.

so i add this parameter in every url
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page-1}&pageSize=20`;


the i use  Math.ceil method in the news.js component's handleNextClick function to achieve that if the there is no page after the present page then we willnot go to the other page where no data is present 

so if the page + 1 is greater than totalresult then do nothing
if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {

    }

    else
    {
      let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   this.setState({
    page : this.state.page + 1,
    articles : parseData.articles
   })
    }
    

  }

and else if there page is not greater than totalresult then execute else statement





i also add totalresults in the initial state totalResults provided by newsAPi data which shows that how much data is present 

    this.setState({articles : parseData.articles, totalResults : parseData.totalResults})

