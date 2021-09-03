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
                <Route
                path="/Home"
                component={Home}
                />
                <Route
                path="/documentation"
                component={Documentation}
                />
               </PageWrap>
               </Router>
             )
    }
}

export default App;
