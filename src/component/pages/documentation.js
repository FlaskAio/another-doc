import React,{Component} from  'react';

class documentation extends Component{
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
   copyCodeToClipboard = () => {
    const el = this.pipCopy;
    el.select()
    document.execCommand("copy")
  }
    render(){
     
        return (
          <div className="wrapper">
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
                     {this.state.dropdown0===true
                     ?
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
                      :null }

                  </div>
               <div className="dropdown2">
                      <button className="clicked_drop1 clicked_drop" onClick={()=>this.showDrop(1)}>
                          Installation
                      </button>
                  {this.state.dropdown1===true ?
                  <div className="dropdown">
                  <ul>
                      <li><a href="#installation-content1">Using pypi & pip</a></li>
                      <li><a href="#installation-content2">Using Source Code</a></li>
                      <li><a href="#installation-content3">Verfiy</a></li>
                  </ul>
              </div>
              :  null
                  }
                      
                </div>
                  <div className="dropdown3">
                      <button className="clicked_drop2 clicked_drop"  onClick={()=>this.showDrop(2)}>
                          Introduction 
                      </button>
                      {this.state.dropdown2=== true?
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
                    : null
                      }                    
                  </div>
             </ul>
          </div>
          <div className="documentation">
              <section className="overview" id="overview">
                <h1>Overview</h1>
                <p>With Navycut, you can take Web applications from concept to launch in a
                     matter of hours. Navycut takes care of much of the hassle of Web development, 
                     so you can focus on writing your app without needing to reinvent the wheel. 
                     It’s free and open source.
                </p>
                <div className="overview_content1" id="overview-content1"> 
                    <h2>Why Navycut</h2>
                    <p>
                      Navycut provides the Flask based fullstack web development platform to create
                       an interactive website instantly.
                    </p>
                </div>
                <div className="overview_content2" id="overview-content2">
                    <h2>
                        Fullstack Support
                    </h2>
                    <p>
                      Navycut has the Flask based backend system as well as the Jinja2 Based template 
                      rendering system to design the frontend.
                    </p>
                </div>
                <div className="overview_content3" id="overview-content3">
                    <h2>
                      Ridiculously Fast
                    </h2>
                    <p>
                      Navycut was designed to help developers take applications from concept
                       to completion as quickly as possible.
                    </p>
                </div>
                <div className="overview_content4" id="overview-content4">
                    <h2>
                      Fully Loaded
                    </h2>
                    <p>
                       Navycut includes dozens of extras you can use to handle common Web development
                       tasks. Navycut takes care of user authentication, content administration, site 
                       maps, RSS feeds, and many more tasks — right out of the box.
                    </p>
                </div>
                <div className="overview_content5" id="overview-content5">
                    <h2>
                      Reassuringly Secure
                    </h2>
                    <p>
                       Navycut takes security seriously and helps developers avoid many common security
                       mistakes, such as SQL injection, cross-site scripting, cross-site request forgery
                        and clickjacking. Its user authentication system provides a secure way to manage
                         user accounts and passwords.
                    </p>
                </div>
                <div className="overview_content6" id="overview-content6">
                    <h2>
                      Incredibly Versatile
                    </h2>
                    <p>
                      Companies, organizations and governments have used Django to build all sorts of 
                      things — from content management systems to social networks to scientific computing 
                      platforms.
                    </p>
                </div>
              </section>
              <section className="installation">
                  <h1>
                      Installation
                  </h1>
                  <p>
                      Being a Python Web framework, Python requires Python. You must need to
                       use Python version 3.6 or later. Python includes a lightweight database
                        called SQLite so you won’t need to set up a database just yet. Get the latest 
                        version of Python at https://www.python.org/downloads/ or with your operating 
                        system’s package manager. You can verify that Python is installed by typing python 
                        from your shell;<br/>
                       you should see something like:
                  </p>
                  <div className="code-block">
                      <pre>
                              Python 3.x.y<br/>
                              [GCC 4.x] on linux<br/>
                              Type "help", "copyright", "credits" or "license" for more information.<br/>
                              >>> 
                      </pre>
                  </div>
                  <div className="installation_content1" id="installation-content1" >
                      <h2>
                          Install navycut from pypi using pip:
                      </h2>
                      <div className="code-block">
                          <pre id="Text1" >
                              <textarea ref={(pipCopy)=>this.pipCopy=pipCopy}>
                              pip install -U navycut 
                              </textarea>
                          </pre>
                          <button id="pip" onClick={()=>this.copyCodeToClipboard()}>Copy <i className="far fa-clipboard"></i></button>
                      </div>
                  </div>
                  <div className="installation_content2" id="installation-content2"  >
                      <h2>
                          Install navycut from source code:
                      </h2>
                      <div className="code-block">
                          <pre id="copy-Text2">
                              git clone https://github.com/navycut/navycut.git
                              cd navycut
                              python setup.py install 
                                          
                          </pre>
                          <button onClick="copyCode()" id="clone" >Copy <i className="far fa-clipboard"></i></button>
                      </div>
                  </div>
                  <div className="installation_content3" id="installation-content3" >
                      <h2>
                          Verify Installation
                      </h2>
                      <div className="code-block">
                          <pre>
                              Python 3.x.y <br/>
                              [GCC 4.x] on linux
                              Type "help", "copyright", "credits" or "license" for more information.<br/>
                             <span>></span> <span>></span> <span>></span>
                          </pre>
                      </div>
                  </div>
              </section>
              <section className="introduction">
                  <h1>
                      Introduction To Navycut
                  </h1>
                  <p>
                      The basic introduction about the stack and features of Navyvut project.
                  </p>
                  <div className="introduction-content1" id="introduction-content1">
                      <h2>
                          Object relational mapper
                      </h2>
                      <p>
                          Deﬁne your data models entirely in Python using SQLAlchemy. You get
                           a rich, dynamic database-access API for free — but you can still write SQL if needed
                      </p>
                      <div className="code-block">
                          <pre>
                              from navycut.orm import sql<br/>
  
                              class Band(sql.Model):<br/>
                                  """A model of a rock band."""<br/>
                                  id = sql.fields.Integer(pk=True)<br/>
                                  name = sql.fields.Char(max_length=200)<br/>
                                  can_rock = sql.fields.Boolean(default=True)<br/>
  
  
                              class Member(sql.Model):<br/>
                                  """A model of a rock band member."""<br/>
                                  id = sql.fields.Integer(pk=True)<br/>
                                  name = sql.fields.Char(help_text="Member's name", max_length=200)<br/>
                                  instrument = sql.fields.Char(choices=(<br/>
                                          ('g', "Guitar"),<br/>
                                          ('b', "Bass"),<br/>
                                          ('d', "Drums"),<br/>
                                      ),<br/>
                                      max_length=1<br/>
                                      )<br/>
                                      band = sql.fields.ForeignKey("Band")
                          </pre>
                      </div>
                  </div>
                  <div className="introduction-content2" id="introduction-content2">
                      <h2>
                          Urls and Views
                      </h2>
                      <p>
                          A clean, elegant URL scheme is an important detail in a 
                          high-quality Web application. Navycut encourages beautiful 
                          URL design and doesn’t put any cruft in URLs, like .php or 
                          .asp. To design URLs for an application, you create a Python
                           module called a URLconf. Like a table of contents for your app,
                            it contains a simple mapping between URL patterns and your views.
                      </p>
                      <div className="code-block">
                          <pre>
                              from navycut.urls import path, url, include<br/>
                              from . import views<br/>
  
                              """<br/>
                              The default url_prefix is the app name i.e "/band" for this case.<br/>
                              If you want to change it and use your own customized name then<br/>
                              plese update the url_prefix for a particular app on the sister.py file<br/>
                              under the AppSister class.<br/>
                              """<br/>
  
                              urlpatterns = [<br/>
                                  path('/', views.BandView, name='band-list'),<br/>
                                  <br/>
                                  url('<span>/</span><span>{'<'}</span>int<span>:</span>id<span>></span>', views.band_detail, name='band-detail'),<br/>
                                  url('/search/?id=1', views.band_search, name='band-search'),<br/>
                                  include('/polls', 'polls.urls') # include urlpatterns from another app<br/>
                              ]
                          </pre>
                          
                      </div>
                      <div className="code-block">
                          <pre>
                              from navycut.urls import MethodView<br/>
                              from .models import Band<br/>
  
                              class BandView(MethodView):<br/>
                                  def get(self):<br/>
                                      bands = Band.query.all()<br/>
                                      return self.render('bands/band_listing.html',)<br/>
  
                              def band_details(req, res, id):<br/>
                                  band = Band.query.get(id)<br/>
                                  return res.json(band)<br/>
  
                              def band_search(req, res):<br/>
                                  id = int(req.args.get('id'))<br/>
                                  band = Band.query.get(id)<br/>
                            return res.json(band)<br/>
                          </pre>
                      </div>
                  </div>
                  <div className="introduction-content3" id="introduction-content3">
                      <h2>
                         Templates
                      </h2>
                      <div className="template">
                          <script src="https://gist.github.com/marktennyson/fd2c00691f2282a604252cb8a2aff9b2.js"></script>
                          <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-eae3f338e9b8dca4490f3e8422af7f3b.css"/>
                      </div>
                  </div>
                  <div className="introduction-content4" id="introduction-content4">
                      <h2>
                          Forms
                      </h2>
                      <p>
                          Navycut provides a powerful form library using wt-form that
                           handles rendering forms as HTML, validating user-submitted data, 
                           and converting that data to native Python types. Navycut also provides
                            a way to generate forms from your existing models and use those forms to 
                            create and update data.
                      </p>
                      <div className="code-block">
                          <pre>
                              from navycut.contrib import forms<br/><br/><br/>
  
                              class RegistrationForm(forms.Form):<br/><br/><br/>
                                  username = forms.StringField('Username', [forms.validators.Length(min=4, max=25)])<br/><br/><br/>
                                  email = forms.StringField('Email Address', [forms.validators.Length(min=6, max=35)])<br/><br/><br/>
                                  password = forms.PasswordField('New Password', [<br/><br/><br/>
                                      forms.validators.DataRequired(),<br/><br/><br/>
                                      forms.validators.EqualTo('confirm', message='Passwords must match')<br/><br/><br/>
                                  ])
                                  confirm = forms.PasswordField('Repeat Password')<br/><br/><br/>
                                  accept_tos = forms.BooleanField('I accept the TOS', [forms.validators.DataRequired()])
                                                              
  
                          </pre>
                      </div>
                  </div>
                  <div className="introduction-content5" id="introduction-content5">
                      <h2>
                          Authentication
                      </h2>
                      <p>
                          Navycut comes with a full-featured and secure authentication system. 
                          It handles user accounts, groups, permissions and cookie-based user sessions.
                           This lets you easily build sites that allow users to create accounts and safely log in/out.
                      </p>
                      <div className="code-block">
                          <pre>
                              from navycut.auth import login_required, current_user<br/><br/>
                              from navycut.http import JsonResponse<br/><br/>
                              from navycut.urls import MethodView<br/><br/>
  
                              class AuthView(MethodView):<br/><br/>
                                  @login_required<br/><br/>
                                  def get(self):<br/><br/>
                                      return JsonResponse(logged_in_username=current_user.username)<br/><br/>
                          </pre>
                      </div>
                  </div>
                  <div className="introduction-content6" id="introduction-content6">
                      <h2>
                          Admin
                      </h2>
                      <p>
                          One of the most powerful parts of Navycut is its automatic
                           admin interface. It reads metadata in your models to provide
                            a powerful and production-ready interface that content producers
                             can immediately use to start managing content on your site. 
                             It’s easy to set up and provides many hooks for customization. 
                             Basically Navycut uses the default flask_admin module to provide this service.
                      </p>
                      <div className="code-block">
                          <pre>
                              from navycut.admin import admin<br/>
                              from navycut.admin.site.views import NCAdminModelView<br/>
                              from .models import Band, Member<br/>
  
                              class MemberAdminModelView(NCAdminModelView):<br/>
                                  """Customize the look of the auto-generated admin for the Member model"""<br/>
                                  excluded_fields = ['name',]<br/>
  <br/>
                              admin.register_model(Band) # Use the default options<br/>
                              admin.register_model(Member, MemberAdminModelView)  # Use the customized options<br/>
                  
                          </pre>
                      </div>
                  </div>
                  <div className="introduction-content7" id="introduction-content7">
                      <h2>Internationalization</h2>
                      <p>
                          Services are in Progress.
                      </p>
                  </div>
                  <div className="introduction-content8" id="introduction-content8">
                      <h2>
                          Security
                      </h2>
                      <p>
                          Navycut provides multiple protections against:
                      </p>
                      <ul>
                          <li>Clickjacking</li>
                          <li>Cross-site scripting</li>
                          <li>Cross Site Request Forgery (CSRF)</li>
                          <li>SQL injection</li>
                          <li>Remote code execution</li>
                      </ul>
                  </div>
              </section>
          </div>
      </div>
        )
    }
}

export default documentation;