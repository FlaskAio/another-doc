import React,{Component} from 'react';
import PageWrap from './component/pageWrap'
import Home from './component/pages/Home'
import Documentation from './component/pages/documentation';
import { BrowserRouter as Router,Route} from "react-router-dom";
class App extends Component{
    render()
    {
           return (
              <Router>
               <PageWrap>
                <Route exact
                path="/"
                component={Home}
                />
                <Route 
                path="/documentation"
                component={Documentation}
                />
                <Route
                path="/expert"
                 render={()=>
                {
                  return (
                    <div>Under Construction</div>
                  )
                }}
                
                />
                 <Route
                path="/download"
                 render={()=>
                {
                  return (
                    <div>Under Construction</div>
                  )
                }}
                
                />
                
                 <Route
                path="/blog"
                 render={()=>
                {
                  return (
                    <div>Under Construction</div>
                  )
                }}
                
                />
                  <Route
                path="/version"
                 render={()=>
                {
                  return (
                    <div>Under Construction</div>
                  )
                }}
                />
               </PageWrap>
               </Router>
             )
    }
}

export default App;
