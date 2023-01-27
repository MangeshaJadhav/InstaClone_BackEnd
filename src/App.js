import './App.css';
// import Header from './components/header/header';
// import PostView from "./components/post-view/post-view";
// var cors=require('cors');
// var bodyParser=require('body-parser');
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./components/landing-page/landing-page";
import PostView from "./components/post-view/post-view";
import { AddNewPost } from './AddNewPost';
import { ShowPosts } from './ShowPosts';

export const App=()=> {
  return (
    <>
      {/* <Header/>
    <PostView/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path ='/post-view' element={<PostView/>}/>
          <Route path ='/post' element={<AddNewPost/>}/>
          <Route path ='/view' element={<ShowPosts/>}/>

        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
/**
 * // npx json-server --watch src/data.json --port 3004
 */