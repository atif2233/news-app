in this video i will learn how to iterate through all the articles which is present in articles array in
news.js component and pass them in newsitem.js component for sgowing in our website 

so for achieving this i will use state and iterate using map function and i will make that map function an arrow function 

now in this component i pass title  , description , imageUrl and newsUrl as props and i access there values article's element  = element.title , element.description and more as it is 
i also make key's for every news to access directly that news the key is news url 



after doing this i pass news url as props newsUrl to newsItem.js to read more button for whenever user want to read more about that particular news so they can read
i add this as props when calling newsItem component 
newsUrl = {element.url}

and accessing that newsUrl props in newsItem.js component like this 
<a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">

<div className="container my-3">
        <h2> NewsMonkey - Top Headlines</h2>
    <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0,45)}
              description={element.description.slice(0,88)}
              imageUrl = {element.urlToImage}
              newsUrl = {element.url}
            />
          </div>
          })}
    </div>
</div>
