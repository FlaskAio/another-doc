import React,{Component} from 'react';
import Header from '../Common/Header'

class Home extends Component{
    render(){
        return (
        <div>
             <Header
             title="Navycut Website"
             subtitle="documentation For Navycut"
             buttonText="Click to Download"
             />
      
        </div>
        );
    }
}
export default Home;