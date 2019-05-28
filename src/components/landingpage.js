import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';



class Landing extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
            <Cell col= {12}>
            <img src = "https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-9/53889043_2547167048645294_9102655581499424768_n.jpg?_nc_cat=100&_nc_ht=scontent.fvno3-1.fna&oh=e1621cd2a91174acc23f2fcc6f79cfb2&oe=5D9266A3"
            alt = "Avatar"
            className="avatar-img"/>
            <div className= "banner-text">
            <h1>Front-end Web Dev</h1>

            <hr/>
            <p>HTML/CSS | JavaScript | React | NodeJS | VueJS |</p>
            <div className="social-links">

            {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
            
            
            
            </div>

            </div>
            
            </Cell>

            </Grid>
                
            </div>
        )
    }
}

export default Landing;