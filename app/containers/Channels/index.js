/*
 *
 * Channels
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';

 import './style.css';
 import './styleM.css';
 import FAComments from 'react-icons/lib/fa/comments';
 import FaList from 'react-icons/lib/fa/list';
 import FaTh from 'react-icons/lib/fa/th';
 import FaGroup from 'react-icons/lib/fa/group';
 import FaSearch from 'react-icons/lib/fa/search';
 import FaSignIn from 'react-icons/lib/fa/sign-in';
 import SignIn from 'components/SignIn';
 import SignUp from 'components/SignUp';


 export default class Channels extends React.PureComponent {
   constructor () {
     super();
     this.state={
       openSignUp:false,
       openSignIn:false
     }
   };
   render() {
     return (
       <div className="container">
         <Helmet title="Channels" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>

         <Link className="siteTitle" to="/ForumPage">
          <FaTh/>
           <header>Channels
           </header>
         </Link>

         <navBar className="desktopNavBar">

           <Link className="navButtons" to="/ForumPage">
               <FAComments/>
               <header>Recent
               </header>
           </Link>

           <Link className="navButtons" to="/Channels">
               <FaTh/>
               <header>Channels
               </header>
           </Link>

           <Link className="navButtons" to="/Users">
               <FaGroup/>
               <header>Users
               </header>
           </Link>

           <Link className="navButtons" to="/Search">
             <FaSearch/>
             <header>Search
             </header>
           </Link>

           <div className="navButtons" onClick={this.handleLogIn}>
             <FaSignIn/>
             <header>SignIn
             </header>
           </div>

           <SignIn open={this.state.openLogIn}>
           </SignIn>

             <div className="navButtons" onClick={this.handleSignUp}>
               <FaSignIn/>
               <header>SignUp
               </header>
             </div>

             <SignUp open={this.state.openSignUp}>
             </SignUp>
         </navBar>
       </div>
     );
   }
 }

 Channels.contextTypes = {
   router: React.PropTypes.object
 };
