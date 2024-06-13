in this video i learn how to refactor some code and learning react component life cycle and life cycle method 


so first-->
i change title dynamically in contructor block if the news is of technology then the title is Technology - NewsMonkey and if the news is of health the title is Health - NewsMonkey constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;

  }

second -->
i also write a function for capitalizing first letter of title and the calling that function with the title name so then the function will return me title with first letter capital 

capitalizeFirstLetter  = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



and third -->
I learned about react compoenent life cycle and theire methods and i write down every main point in my copy or register of react. want to see goto the copy note of react 