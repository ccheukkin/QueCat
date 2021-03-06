import React from 'react'
import style from "../styles/Banner.module.css"

class Banner extends React.Component{
    render(){
        return(
            <div className={style.bannerBox}>
                <div className={style.logo}></div>
                <div className={style.big}>QueCat</div>
                <div className={style.small}>Scroll down to know what you can do on this website</div>
                <a href="#jump"><div className={style.arrow}></div></a>
            </div>
        );
    }
}

export default Banner;