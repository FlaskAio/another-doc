import React,{Component} from 'react';
import Header from '../Common/Header'
import image from '../../assets/header-bg.jpg'

class Home extends Component{
    render(){
        return (
        <div>
             <Header
             title="Welcome"
             subtitle="Getting Started With NavyCut"
             buttonText="Install Latest Version 2.0"
             showButton={true}
              image={image}
             />
      
        </div>
        );
    }
}
export default Home;