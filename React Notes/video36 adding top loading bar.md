In this video i will learn how to add top loading bar above the navbar

App.js

first-->
first i have to install topLoading in my directory using this command  --> npm i react-top-loading-bar (this command i get from this website --> https://www.npmjs.com/package/react-top-loading-bar)

then , i have to import  topLoading bar in my app.js using this statement -->  
import LoadingBar from 'react-top-loading-bar'

second --> 
i have to write code for topLoading bar so i copy that code from this website which is provide top loading bar
https://www.npmjs.com/package/react-top-loading-bar

the code is in app.js 
 <LoadingBar
        color='#f11946'
        progress={progress}
      />

third -->
after then i have to use state to set progress state initially 0 in app.js 
state = {progress: 0}

fourth -->
then i specify setProgress method after specifying state and then passing this method as props in every component calling so intially progress will be 0  
setProgress = (progress) =>
  {
    this.setState({progress : progress})
  }


fifth --> 
when we passing this method to compoent from app.js and then i will set State of progress as 40 , 70 100 in news .js after every statement of fetching data in updateNews function

i set state of progress as 10 40,70 100 for showing progress that when fetching api the progress is 10 when data comes progress is 40 when data parsed progress is 70 and when data whowed in screen then progress 100


  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();
    this.props.setProgress(70);

   
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  }


NewsItem.js
sixth --> 
i just remove previous styling of badge and add some new styling 
first put the badge in div and then give styling to giv container 
<div style={{display: 'flex', justifyContent: 'flex-end', position : 'absolute', right : '0'}}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>



Apart from these thing i solve the bug that if the content is load fully and there is no more content to load then the spinner of infinite scroll is also loading 

so this issue happening because when we call fethcMoreData function from infinite Scroll then in this function i set the state of page normally and setting state take some time to set the new state so when our data is fetch using api after then the state has set 

so for setting state on time i use promise object for setting state first then fetch data 
this way will make setState function asynchronous and set the state furst then go to the next steteent meand fetching data

 await new Promise(resolve => {
      this.setState(prevState => ({ page: prevState.page + 1 }), resolve);
  });