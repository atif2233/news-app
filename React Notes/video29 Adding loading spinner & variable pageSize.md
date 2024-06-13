in this video i work mostly in news.js and a little bit in app.js 

1-->
in this video i learned how to make newsMonkey heading in center using bootstrap text-center class
<h1 className="text-center">NewsMonkey - Top Headlines</h1>


2--> 
then i disabled the next button if there is no content in next page using condition that if page +1 is greater than math.ceil results  means - > mytotal result is 20 and my page size is 5 then i divide 20/5 it will give me 4 so math.ceil will give 4 if we are at last page and now our page + 1 will 5 so this.state.page will greater than math.ceil result hence the nextwill disabled here 

<button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


3 --> 
then after this i change the page size dynamically using props and give pagesize = 5 in app.js and pass it to news.js as props so in every api url we are access page size dynamically using props so that we will see only 5 news in 1 page then other five news in nextpage or second page and so on 

news.js every api url 
let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;


app.js 
News pageSize = {5}/>


4 --> 

now i learn how to add spinner or loading image when our page loading some content 

first i download spinner gif from this website https://loading.io/
second i add this file in our compoenent folder as loading.gif 
third i make separate component in component's folder for this spinner and access that loading.gif in Spinner component 

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


fourth thing is i access spinner.js component in news.js component just afterheading of our newmonkey app to show spinner there and make spinner in center using bootstrap text ceter class
<h1 className="text-center">NewsMonkey - Top Headlines</h1>
{this.state.loading && <Spinner />}


fifth - now our spinner is loading everytime so i have to make if visible only when any content is loading in our app 

for this i have to remove else statement in handleNextClick function after that add (!) before condition because if this if statement codition is true only the code of if block will execute 
if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))

after that before fetching api in every function or in everywhere whenever we fetch api i have to say loading state is true using setState 
 this.setState({loading : true})
and make loading false using setState everywhere after fetching data 
this.setState({
    page : this.state.page + 1,
    articles : parseData.articles,
    loading : false
   })


Now the last thing to do thatif content is in loading phase then i don't want to show anything nad i want to show blank screen

for this when i accessing newsItem component or calling nestItem component i make condition that when oading is false only then the content should be visible 
i access this functionality usinf this ->!this.state.loading && before this -->this.state.articles.map((element)=>{

{!this.state.loading && this.state.articles.map((element)=>{