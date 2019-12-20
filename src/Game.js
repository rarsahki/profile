import React, { Component } from 'react';
import facebook from './facebook.svg';
import reddit from './reddit.svg';
import './Game.css';

class Game extends Component  {

  state = {
    xjump: 0,
    x1: window.innerWidth,
    x2: window.innerWidth,
    x3: window.innerWidth,
    click: false,
    game_status: true,
  }

  draw = ()=>{
    var xm = this.state.x1;
    var xm1 = this.state.x2;
    var xm2 = this.state.xjump;
    //console.log(xm);
    //console.log(xm1);
    //console.log(xm2);
    const ctx = this.refs.canvas.getContext("2d");
    var stick = this.refs.stick;
    ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
    if(this.state.click==false)
      ctx.drawImage(stick,0,this.refs.canvas.height-50,50,50);
    ctx.drawImage(stick,xm,this.refs.canvas.height-50,50,50);
    xm-=5;
    this.setState({x1:xm});
    if(xm<0){
      ctx.drawImage(stick,xm1,this.refs.canvas.height-50,50,50);
      xm1-=10;
      this.setState({x2:xm1});
    }
    if(this.state.click==true){
        if(this.state.xjump>55){
            var xm3 = this.state.x3;
            ctx.drawImage(stick,0,xm3,50,50);
            xm3+=5;
            this.setState({x3:xm3});
            if(this.state.x3==this.refs.canvas.height-50){
              //clearInterval(this.timerID2);
              ctx.drawImage(stick,0,this.refs.canvas.height-50,50,50);
              this.setState({x3:this.refs.canvas.height-50});
              this.setState({xjump:0});
              this.setState({click:false});
            }
          //clearInterval(this.timerID1);
          //this.timerID2 = setInterval(()=>this.down(),1);
          console.log(xm4);
        }else{
          var xm4 = this.state.xjump;
          ctx.drawImage(stick,0,this.refs.canvas.height-50-xm4,50,50);
          xm4+=5;
          this.setState({xjump:xm4});
          this.setState({x3:this.refs.canvas.height-50-xm4});
        }
    }
    var dr = requestAnimationFrame(this.draw);
    if(this.state.x1==0){
      if(this.state.x3==this.refs.canvas.height-50){
        alert('One More Chance');
      }
    }else if(this.state.x2==0){
      if(this.state.x3==this.refs.canvas.height-50){
        ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
        window.removeEventListener("scroll", this.handleScroll);
        cancelAnimationFrame(dr);
        window.onscroll = function() {};
        this.setState({game_status:false});
        this.setState({x1:window.innerWidth});
        this.setState({x2:window.innerWidth});
        alert('Maccha/Macchi It\'s okay! Atleast you tried :)');
      }
    }else if(this.state.x2<0){
      ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
      window.removeEventListener("scroll", this.handleScroll);
      cancelAnimationFrame(dr);
      window.onscroll = function() {};
      this.setState({game_status:false});
      this.setState({x1:window.innerWidth});
      this.setState({x2:window.innerWidth});
      alert('Okay! You scroll now');
    }
  }

  handleScroll = ()=>{
    if(this.container.scrollHeight>0){
      window.onscroll = function() {
            window.scrollTo(0, window.innerHeight);
      };
    }
  }

  componentDidMount(){
    var dr = requestAnimationFrame(this.draw);
    //var timerID = setInterval(()=>this.draw(),5);
    //console.log(this.state.x1);
    window.addEventListener("scroll", this.handleScroll);
  }

  leap = ()=>{
    //this.timerID1 = setInterval(()=>this.jump(),5);
    if(this.state.click==false)
      this.setState({click:true});
    if(this.state.game_status==false){
      this.setState({game_status:true});
      var dr = requestAnimationFrame(this.draw);
      //console.log(this.state.x1);
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  render()  {
    return  (
      <div id="Game" ref={ el => this.container = el}>
        <button id="leap" onClick={this.leap}>
          Click to <i>LEAP</i>
        </button>
        <canvas ref="canvas" id="canvas">
        <img  ref="stick" src={facebook} id="image1"/>
        </canvas>
      </div>
    );
  }
}
export default Game;
