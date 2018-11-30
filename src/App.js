import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import Card from './components/Card.js';

const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: require('./img/data.json'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

class App extends Component {
  state = {
    startViewState: "titleText titleTextNotAnimated",
    projectViewState: "titleText projectTitleText",
    x: 0, y: 0,
    isStopped: false, 
    isPaused: false,
    projects: [
    {title:"Booking system", subHeader:"Bookingsystem for barbershops. Built with react and usertested with HotJar.", url: "https://marwil96.github.io/barberBooking/", medium:"Website"},
    {title:"Lyric search", subHeader:"Search for lyrics and get an report on how positive the text is. Built with react, lottie, musixmatch api.", url: "https://marwil96.github.io/Lyricdisplay/", margin:"64px", medium:"Website"},
    {title:"Learning Vue", subHeader:"Learning Vue by building a gifsearcher. Built with Vue and giphys api.", url: "https://github.com/Marwil96/GifSearchVue", margin:"-32px", medium:"Github"},
    {title: "Phases \n of \n Starvation", subHeader:"Made this concept design while learning Flinto.", url: "https://www.behance.net/gallery/58864945/Concept-Site-The-Phases-of-Starvation", medium:"Behance"},
    ]
  }

  changeState() {
    this.setState({
      startViewState: "titleText titleTextAnimated",
      loading:true
    })
    setTimeout(
    function() {
        this.setState({
          loading: false,
          projectViewState: "titleText projectTitleText titleTextNotAnimated",
        });
      }
      .bind(this),
        2000
    );
  }

  renderOctopus() {
    return(
      null
      )
  }

  startView() {
    var width = (window.innerWidth);
    var titletext = "Playground"
    if(width < 880) {
       titletext = "Play-ground"
    } else {
      titletext = "Playground"
    }
    return(
      <div className={this.state.startViewState}>
          <h1 style={this.state.shadowAtt}> {titletext} </h1>
          <h3> Here is every side project i either work on or have finished. </h3>
          <div className="button" onClick={this.changeState.bind(this)}> <h1 className="buttonText"> Look at em! </h1> </div>
        </div>  
      )
  }
   projectView() {
    return(
      <div className={this.state.projectViewState}>
          <h1 style={this.state.shadowAtt}> Playground </h1>
          <div className="cardContainer">
          { this.state.projects.map(data =>{
           return <Card data={data} />
          })}
          </div>
        </div>  
      )
  }
    _onMouseMove(e) {
    this.setState({ x: (e.screenX/50), y: (e.screenY/50), shadowAtt:{textShadow:"#F44336 " + (e.screenX/50) +"px " + (e.screenY/50) + "px" + " 0px"} });
    console.log(e, e.screenX, e.screenY,{textShadow:"#F44336 " + (e.screenX/50) +"px " + (e.screenY/50) + "px" + " 0px"})
  }
  render() {
    var height = (window.innerHeight/100) * 100;
    var width = (window.innerWidth/100) * 100;
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        {this.startView()}
        {this.projectView()}
        {this.state.loading ? (
        <div className="animationContainer">
        <Lottie options={defaultOptions}
              height={height}
              width={width}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
        </div> ) :(null) }
        }
      </div>
    );
  }
}

export default App;
