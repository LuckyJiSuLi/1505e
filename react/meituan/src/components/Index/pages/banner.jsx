import React, { Component } from 'react'
import {reqBanner} from "../actions.js"
import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';

import style from "../index.css"

class Banner extends Component{
  constructor(props){
    super(props)
      this.state = {
        data: ['', '', ''],
        initialHeight: 200,
      }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  beforeChange(from, to){
    console.log(from,to)
  }
  afterChange(from, to){
    console.log(from,to)
  }
  render(){
    return (
           <WingBlank>
            <div className="sub-title">normal</div>
            <Carousel
              className="my-carousel"
              autoplay={false}
              infinite
              selectedIndex={1}
              swipeSpeed={35}
              beforeChange={(from, to) => {this.beforeChange(from, to)}}
              afterChange={(from, to) => {this.afterChange(from, to)}}
            >
                <div className="v-item" className={style.bannerI1}>Carousel 1</div>
          <div className="v-item" className={style.bannerI2}>Carousel 2</div>
          <div className="v-item" className={style.bannerI3}>Carousel 3</div>
            </Carousel>
       
       </WingBlank>
    );
   
  }
}





export default Banner
