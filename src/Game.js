import React, { Component } from 'react';
import facebook from './facebook.svg';
import reddit from './reddit.svg';
import naruto from './naruto_run.png';
import cloud from './cloud.png';
import ball from './ball.png';
import school from './school.png';
import graduation from './graduation.png';
import grass from './grass.png';
import './Game.css';
import rotate_mobile from './rotate_mobile.png';
import ImageInput from './ImageInput';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
var dr;
class Game extends Component  {

  state = {
    height: window.innerHeight - window.innerHeight*0.5,
    xjump: 5,
    direction: -1,
    speed: 0.25,
    obcount: 1,
    obpath: window.innerWidth-50,
    obstep: 0.5,
    obspeed: 0.25,
    alertcount: 1,
  }
  // draw = ()=>{
  //   var xm = this.state.x1;
  //   var xm1 = this.state.x2;
  //   var xm2 = this.state.xjump;
  //   //console.log(xm);
  //   //console.log(xm1);
  //   //console.log(xm2);
  //   const ctx = this.refs.canvas.getContext("2d");
  //   var stick = this.refs.stick;
  //   ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
  //   if(this.state.click==false)
  //     ctx.drawImage(stick,0,"this.refs.canvas.height-50",100,150);
  //   ctx.drawImage(stick,xm,this.refs.canvas.height-50,100,150);
  //   xm-=5;
  //   this.setState({x1:xm});
  //   if(xm<0){
  //     ctx.drawImage(stick,xm1,this.refs.canvas.height-50,50,50);
  //     xm1-=10;
  //     this.setState({x2:xm1});
  //   }
  //   if(this.state.click==true){
  //       if(this.state.xjump>55){
  //           var xm3 = this.state.x3;
  //           ctx.drawImage(stick,0,xm3,50,50);
  //           xm3+=5;
  //           this.setState({x3:xm3});
  //           if(this.state.x3==this.refs.canvas.height-50){
  //             //clearInterval(this.timerID2);
  //             ctx.drawImage(stick,0,this.refs.canvas.height-50,50,50);
  //             this.setState({x3:this.refs.canvas.height-50});
  //             this.setState({xjump:0});
  //             this.setState({click:false});
  //           }
  //         //clearInterval(this.timerID1);
  //         //this.timerID2 = setInterval(()=>this.down(),1);
  //         console.log(xm4);
  //       }else{
  //         var xm4 = this.state.xjump;
  //         ctx.drawImage(stick,0,this.refs.canvas.height-50-xm4,50,50);
  //         xm4+=5;
  //         this.setState({xjump:xm4});
  //         this.setState({x3:this.refs.canvas.height-50-xm4});
  //       }
  //   }
  //   var dr = requestAnimationFrame(this.draw);
  //   if(this.state.x1==0){
  //     if(this.state.x3==this.refs.canvas.height-50){
  //       alert('One More Chance');
  //     }
  //   }else if(this.state.x2==0){
  //     if(this.state.x3==this.refs.canvas.height-50){
  //       ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
  //       //window.removeEventListener("scroll", this.handleScroll);
  //       cancelAnimationFrame(dr);
  //       window.onscroll = function() {};
  //       this.setState({game_status:false});
  //       this.setState({x1:window.innerWidth});
  //       this.setState({x2:window.innerWidth});
  //       alert('Maccha/Macchi It\'s okay! Atleast you tried :)');
  //     }
  //   }else if(this.state.x2<0){
  //     ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
  //     //window.removeEventListener("scroll", this.handleScroll);
  //     cancelAnimationFrame(dr);
  //     window.onscroll = function() {};
  //     this.setState({game_status:false});
  //     this.setState({x1:window.innerWidth});
  //     this.setState({x2:window.innerWidth});
  //     //alert('Okay! You scroll now');
  //   }
  // }
  //
  // handleScroll = (event)=>{
  //   if(this.container.scrollHeight>0){
  //     window.onscroll = function() {
  //           window.scrollTo(0, window.innerHeight);
  //     };
  //   }
  // }
  //
  // getScrollHeight = (event) =>{
  //   alert(this.container.getScrollHeight);
  // }
  //
  // componentDidMount(){
  //   //window.addEventListener('scroll',this.getScrollHeight());
  //   var dr = requestAnimationFrame(this.draw);
  //   //var timerID = setInterval(()=>this.draw(),5);
  //   //console.log(this.state.x1);
  //   //window.addEventListener("scroll", this.handleScroll);
  // }
  //
  // leap = ()=>{
  //   //this.timerID1 = setInterval(()=>this.jump(),5);
  //   document.getElementsByClassName('App-body')[0].style.display = "flex";
  //   if(this.state.click==false)
  //     this.setState({click:true});
  //   if(this.state.game_status==false){
  //     this.setState({game_status:true});
  //     var dr = requestAnimationFrame(this.draw);
  //     //console.log(this.state.x1);
  //     //window.addEventListener("scroll", this.handleScroll);
  //   }
  //
  // <canvas ref="canvas" id="canvas">
  // <img  ref="stick" src={facebook} id="image1"/>
  // </canvas>
    // obstacle = () =>{
    //   var ob = window.requestAnimationFrame(this.obstacle);
    //   let ball = document.getElementById('ball');
    //   let facebook = document.getElementById('facebook');
    //   let graduation = document.getElementById('graduation');
    //   const ctx = document.getElementById('canvas2');
    //   ctx.width = window.innerWidth;
    //   ctx.height = window.innerHeight;
    //   const canvas = ctx.getContext("2d");
    //   canvas.drawImage(ball,0,0,300,300);
    // }

    draw = () => {
      dr = window.requestAnimationFrame(this.draw);
      let grass = document.getElementById('grass');
      let naruto = document.getElementById('naruto');
      let ball = document.getElementById('ball');
      let facebook = document.getElementById('facebook');
      let school = document.getElementById('school');
      let graduation = document.getElementById('graduation');
      const ctx = document.getElementById('canvas');
      ctx.width = window.innerWidth;
      ctx.height = window.innerHeight;
      const canvas = ctx.getContext("2d");
      var x = this.state.height + (this.state.xjump*this.state.direction);
      var x1 = this.state.obpath - this.state.obstep;
      this.setState({obpath:x1})
      this.setState({height:x});
      if(this.state.height < 0){
        this.setState({direction:1})
      }else if (this.state.height > window.innerHeight - window.innerHeight*0.5){
        this.setState({xjump:0});
        this.setState({speed:0});
        this.setState({direction:-1});
        this.setState({height:window.innerHeight - window.innerHeight*0.5})
      }
      if(this.state.height > window.innerHeight - window.innerHeight*0.5 && this.state.obcount===5){
        window.cancelAnimationFrame(dr);
      }
      var speed = this.state.xjump+this.state.speed;
      var obstep = this.state.obstep+this.state.obspeed;
      this.setState({obstep:obstep});
      this.setState({xjump:speed});
      canvas.drawImage(grass,0, (window.innerHeight) - (window.innerHeight*0.5), (window.innerWidth), (window.innerHeight*0.5));
      canvas.drawImage(naruto,0,this.state.height, (window.innerWidth*0.25), (window.innerHeight*0.5));
      if(this.state.obcount===1)
        canvas.drawImage(ball,this.state.obpath, (window.innerHeight) - (window.innerHeight*0.2), (window.innerWidth*0.09), (window.innerHeight*0.15));
      else if(this.state.obcount===2){
        canvas.drawImage(facebook,this.state.obpath, (window.innerHeight) - (window.innerHeight*0.2), (window.innerWidth*0.09), (window.innerHeight*0.15));
      }
      else if(this.state.obcount===3){
        canvas.drawImage(school,this.state.obpath, (window.innerHeight) - (window.innerHeight*0.2), (window.innerWidth*0.09), (window.innerHeight*0.15));
      }else if (this.state.obcount===4){
        canvas.drawImage(graduation,this.state.obpath, (window.innerHeight) - (window.innerHeight*0.2), (window.innerWidth*0.09), (window.innerHeight*0.15));
      }
      if(this.state.height>= (window.innerHeight) - (window.innerHeight*0.55) && this.state.obpath<=(window.innerWidth*0.09) && this.state.obcount<=3 && this.state.alertcount===1){
        alert('Keep Going!');
        this.setState({alertcount:0});
      }
      if(this.state.obpath<=(window.innerWidth*0.09) && this.state.obcount===4 && this.state.alertcount===1){
        alert('Actually I haven\'t graduated yet');
        this.setState({alertcount:0});
      }
      if(this.state.obpath<=0){
        this.setState({alertcount:1});
        var count = this.state.obcount;
        count+=1;
        this.setState({obcount:count});
        var path = window.innerWidth-50;
        this.setState({obpath:path});
        this.setState({obspeed:0.25});
        this.setState({obstep:1});
      }
    }

    leap = (event) => {
      if(this.state.obcount>=5){
        document.getElementsByClassName('App-body')[0].style.display = "flex";
        document.getElementsByClassName('App-body')[0].scrollIntoView({behavior: 'smooth'});
      }
      else{
        let cloud = document.getElementById('cloud');
        cloud.style.display = "flex";
        cloud.style.position = "absolute";
        cloud.style.left = "10vw";
        let grass = document.getElementById('grass');
        cloud.style.display = "flex";
        cloud.style.position = "absolute";
        let button = document.getElementById('leap');
        button.style.position = "absolute";
        button.style.top = "130vh";
        button.style.left = "40vw";
        button.textAlign = "center";
        this.setState({xjump:1});
        this.setState({speed:0.1});
        this.setState({obspeed:0.25});
        this.setState({obstep:0.5});
        window.cancelAnimationFrame(dr);
        this.draw();
      }
    }

  render()  {
    return  (
      <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
          <div>
            <div id="Game">
            <img src={cloud} id="cloud"/>
              <button id="leap" onClick={this.leap}>
                  Click to <i>LEAP</i>
              </button>
              <canvas ref="canvas" id="canvas">
                <img src={grass} id="grass"/>
                <img  src={naruto} id="naruto"/>
                <img  src={ball} id="ball"/>
                <img  src={facebook} id="facebook"/>
                <img  src={school} id="school"/>
                <img  src={graduation} id="graduation"/>
              </canvas>
            </div>
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait'>
          <div>
            <img src={rotate_mobile} id="rotate_mobile" alt="Rotate your device" style="vertical-align:middle"/>
          </div>
        </Orientation>
      </DeviceOrientation>
    );
  }
}
export default Game;
