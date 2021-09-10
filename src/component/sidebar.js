import React, {Component} from 'react';
class sidebar extends Component{
     constructor(props)
   {
       super(props);
       this.state={
        dropdown0:true,
        dropdown1:true,
        dropdown2:true,
       }
   }
   showDrop=(x)=>{
       if(x===0)
       {
             if(this.state.dropdown0===false)
             {
                 this.setState({dropdown0:true});
             }
             else{
                 this.setState({dropdown0:false});
             }
        }    
      else if(x===1)
      {
        if(this.state.dropdown1===false)
        {
            this.setState({dropdown1:true});
        }
        else{
            this.setState({dropdown1:false});
        }
      }
      else{
        if(this.state.dropdown2===false)
        {
            this.setState({dropdown2:true});
        }
        else{
            this.setState({dropdown2:false});
        }
      }
   }
    render()
    {
        return (
            <div className="sidebar">
                <div className="search">
                        <input type="text" className="search" placeholder="Search Docs"/>
                        <button><i className="fas fa-search search-icon" id="icon-drop"></i></button>
                </div>
                <ul>
              
              <div className="dropdown1">
                  <button className=" clicked_drop" onClick={()=>this.showDrop(0)} >   
                      Overview  
                  </button>                     
                 {this.state.dropdown0 &&
                 <div className="dropdown">
                      <ul>
                          <li><a href="#overview-content1">Why Navycut</a></li>
                          <li><a href="#overview-content2">FullStack Support</a></li>
                          <li><a href="#overview-content3">Ridiculously Fast</a></li>
                          <li><a href="#overview-content4">Fully Loaded</a></li>
                          <li><a href="#overview-content5">Reassuringly Secure</a></li>
                          <li><a href="#overview-content6">Incredibly Versatile</a></li>
                      </ul>
                  </div>
                  }

              </div>
           <div className="dropdown2">
                  <button className="clicked_drop" onClick={()=>this.showDrop(1)}>
                      Installation
                  </button>
              {this.state.dropdown1 &&
              <div className="dropdown">
              <ul>
                  <li><a href="#installation-content1">Using pypi & pip</a></li>
                  <li><a href="#installation-content2">Using Source Code</a></li>
                  <li><a href="#installation-content3">Verfiy</a></li>
              </ul>
          </div>
          
              }
                  
            </div>
              <div className="dropdown3">
                  <button className="clicked_drop"  onClick={()=>this.showDrop(2)}>
                      Introduction 
                  </button>
                  {this.state.dropdown2 &&
                   <div className="dropdown dropdown3">
                   <ul>
                       <li><a href="#introduction-content1">Object Relational Mapper</a></li>
                       <li><a href="#introduction-content2">Url And Views</a></li>
                       <li><a href="#introduction-content3">Templates</a></li>
                       <li><a href="#introduction-content4">Forms</a></li>
                       <li><a href="#introduction-content5">Authentication</a></li>
                       <li><a href="#introduction-content6">Admin</a></li>
                       <li><a href="#introduction-content7">Internationalization</a></li>
                       <li><a href="#introduction-content8">Security</a></li>
                   </ul>
               </div>
                  }                    
              </div>
         </ul>
            </div>
        )
    }
}
export default sidebar;