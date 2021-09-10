import React,{Component} from  'react';
//components
import Sidebar from '../sidebar';
import Document from '../document';

class documentation extends Component{
    render(){
     
        return (
          <div className="wrapper">
          <Sidebar/>
          <Document/>
         </div>
        )
    }
}

export default documentation;