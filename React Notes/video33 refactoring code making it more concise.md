Refactoring News component to use the same function every time with different page 

first-->
i make newsUpdate function and fetching api from this function only and add page in the url as this.state.page
so in all other function like handlePrevClick , handleNextClick , and componentDidMount in all of these function i remove everything like fetchin api or parsing data or settting state i remove everything and i only set page using setState function and calling newsUpdate function only so for doing this our page daoing same but in a vry concise way and using less code 


  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95a1021963f4e49b901b724f73c9a62&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

second --> 
removeing all unnecessary code from all this function and changing only state for page and calling the updateNews function 

   async componentDidMount() {
    this.updateNews();
  }

  
   handlePrevClick = async () => {
     this.setState({ page: this.state.page - 1 });
     this.updateNews();
   };
  
  
   handleNextClick = async () => {
     await this.setState({ page: this.state.page + 1 });
     this.updateNews();
   };



third -->
i make change from my side also because when i calling newsUpdate function from handleNextClick and HandlePrevClick , in next page the same news showing as previous page was showing because setState take some time to change page but compiler do not in this scenerio so newsupdate will call without changing the page numberso for solving this issue i take help from chatpt and make a call abck function and put newsUpdate in call back function argument 

handlePrevClick = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews();
    });
  };
  

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews();
    });
  };