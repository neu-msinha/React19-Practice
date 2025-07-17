import {BrowserRouter, Route, Routes, Link, NavLink, Navigate} from 'react-router';

// HashRouter /#/posts
// MemoryRouter hides the route

//NavLink can know when we are at that location (isActive prop)

//Components
import Home from './components/home.jsx';
import Posts from './components/posts.jsx';
import Profile from './components/profile.jsx';
import PostItem from './components/postItem.jsx';
import NotFound from './components/404.jsx';


//Nested Routes

import Guests from './components/guests.jsx';
import Users from './components/users.jsx';
import Admin from './components/admins.jsx';

function App() {
    return (
        <BrowserRouter>

        <div className='container'>
         {/* this will be present all the time */}
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>

          <Link to="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <span className='fs-4'>My App</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'><NavLink to="/" 
            className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            {/* <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li> */}
            <li className='nav-item'><Link to="/posts" className='nav-link'>Posts</Link></li>
            <li className='nav-item'><Link to="/profile" className='nav-link'>Profile</Link></li>
            <li className='nav-item'><Link to="/users" className='nav-link'>Users</Link></li>
          </ul>
        </header>

        {/* these are the routes */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='posts/:postId' element={<PostItem/>}/>
          <Route path='profile' element={<Profile/>}/>

          {/* Nested routes */}
          <Route path='/users' element={<Users/>}>
            <Route path='guests' element={<Guests/>}/>
            <Route path='admins' element={<Admin/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
          {/* <Route path='profile' element={
            <Navigate replace to="/"/>  // this will redirect to home page
          }/> */}
        </Routes>

        </div>
        </BrowserRouter>
  )
}

export default App