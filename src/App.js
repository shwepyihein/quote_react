import React from 'react';
import './App.css';

const API ='https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';
class App extends React.Component{
  constructor(props){
    super(props);
      this.state={
        quotes:[
          {
            quote:"",
            author:""
          }
        ] ,
         index:0
    }
  }

    componentDidMount(){
      fetch(API)
      .then(data=>data.json())
      .then(quotes=>{
        this.setState({
          quotes
        },  this.getRandomIndex);
      })
    }


  getRandomIndex=()=>{
    const {quotes}=this.state;
    console.log(quotes)
    if(quotes.length>0){
         const index= Math.floor(Math.random()*quotes.length);
      console.log(index)
      this.setState({
        index:index
      })
    }
  }
  render(){
    const {quotes,index}= this.state;   
    const quote=quotes[index];
    console.log(quote)
    const tweetURL= `https://twitter.com/intent/tweet?${quote.quote}-${quote.author}`;
    
    return(      
        <div className="wrapper">
            <div className="box" id="quote-box">     
                <div className="quote_container">                     
                      {quote &&   <div className="quote_text" >
                          <p id="text"> {quote.quote} </p>
                          <cite style={{float:'right'}} id="author">- {quote.author}</cite> 
                         </div>                      
                      }                               
              <div className="soical">
                <div className="twitter" >
                 <a href={tweetURL} id="tweet-quote" target="_blank"><i class="fab fa-twitter" ></i> tweet</a> 
                </div>
                <div>
                <button onClick={this.getRandomIndex} id="new-quote"> <i class="fas fa-random"></i>    Next Quote</button>
                  </div>
              </div>
              </div>
            </div>        
        </div>        
    );
  }
}







export default App;
