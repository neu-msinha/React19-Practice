import {BrowserRouter, Route, Routes} from 'react-router';

//Components
import Home from './components/home.jsx';
import Posts from './components/posts.jsx';
import Profile from './components/profile.jsx';

function App() {
    return (
        <BrowserRouter>

        {/* this will be present all the time */}
        <header>
          Header
        </header>

        {/* these are the routes */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App
