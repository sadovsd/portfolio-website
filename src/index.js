import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // not the default export from history module so we need curly braces
import Home from './components/headerPages/Home'; // before the change: the import here is actualy AppWithHeader, since thats what we specified the default export component to be
// import Jokes from './components/headerPages/Jokes'; // same
import Applications from './components/headerPages/Applications';
import Header from './components/Header';
import Footer from './components/Footer2';
import Resume from './components/headerPages/Resume';
import ProjectGallery from './components/headerPages/ProjectGallery';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';
import './index.css';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
// recall that <App /> transpilation is React.createElement(App)

root.render(
  <BrowserRouter history={history}>
    <Routes>
      {/* before it was {<Header Component={App}></Header>} but we transitioned to the 'children' approach */}
      <Route path='/' element={<Footer><Header><Home /></Header></Footer>} />
      {/* <Route path='/jokes' element={<Footer><Header><Jokes /></Header></Footer>} /> */}
      <Route path='/applications' element={<Footer><Header><Applications /></Header></Footer>} />
      <Route path='/resume' element={<Footer><Header><Resume /></Header></Footer>} />
      <Route path='/projects' element={<Footer><Header><ProjectGallery /></Header></Footer>} />
      <Route path='/projects/project1' element={<Footer><Header><Project1 /></Header></Footer>} />
      <Route path='/projects/project2' element={<Footer><Header><Project2 /></Header></Footer>} />
      <Route path='/projects/project3' element={<Footer><Header><Project3 /></Header></Footer>} />
      <Route path='/projects/project4' element={<Footer><Header><Project4 /></Header></Footer>} />

    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
