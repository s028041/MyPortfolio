import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/main";
import {Link} from 'react-router-dom';
// import Nav from './Nav';
// import About from './About';
// import Shop from './Shop'Link;
// import ItemDetail from './ItemDetail';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Dominykas Kugelevičius" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="#">Link</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main>

            </Main>
        </Content>
    </Layout>
</div>
    // <Router>
    // <div className="App">
    //   <Nav />
    //   <Switch>
    //   <Route path = "/" exact component = {Home}/>
    //   <Route path= "/about" component = {About} />
    //   <Route path ="/shop" exact component = {Shop} />
    //   <Route path = "/shop/:id" component = {ItemDetail} />
    //   </Switch>
    // </div>
    // </Router>
  );
}



export default App;
