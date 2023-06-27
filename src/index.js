import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // not the default export from history module so we need curly braces
import Home from './components/Home'; // before the change: the import here is actualy AppWithHeader, since thats what we specified the default export component to be
import Jokes from './components/Jokes'; // same
import Header from './components/Header';
import Resume from './components/Resume';
import ProjectGallery from './components/ProjectGallery';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import './index.css';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
// recall that <App /> transpilation is React.createElement(App)

root.render(
  <BrowserRouter history={history}>
    <Routes>
      {/* before it was {<Header Component={App}></Header>} but we transitioned to the 'children' approach */}
      <Route path='/' element={<Header><Home /></Header>} />
      <Route path='/jokes' element={<Header><Jokes /></Header>} />
      <Route path='/resume' element={<Header><Resume /></Header>} />
      <Route path='/projects' element={<Header><ProjectGallery /></Header>} />
      <Route path='/projects/project1' element={<Header><Project1 /></Header>} />
      <Route path='/projects/project2' element={<Header><Project2 /></Header>} />
      <Route path='/projects/project3' element={<Header><Project3 /></Header>} />
      <Route path='/projects/project4' element={<Header><Project4 /></Header>} />

    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
