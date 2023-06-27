import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Higher order component: a component that takes one component as an input and returns a new one. Its like a function that returns
// a new component

// We converted Header to higher order component by replacing () with props, and then made a const component and then included it in 
// return as jsx code. This allows us to remove the <Jokes /> from App.js and the <App /> form Jokes.js.

// ********* props is the stuff we put in between jsx tags, ex: <Header><App /></Header>, or <Header Component={App}></Header>
// <App /> is the props. But theres also the concept of children here that confuses me and shit
const Header = ( {children} ) => {

    // const { Component } = props; // this got replaced with cleaner code...
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };
    return(
        <div>
            <div className='text-[25px] mt-8'>
                <h2 style={style}><Link to='/'>Home</Link></h2>
                <h2 style={style}><Link to='/jokes'>Jokes</Link></h2>
                <h2 style={style}><Link to='/resume'>Resume</Link></h2>
                <h2 style={style}><Link to='/projects'>Projects</Link></h2>
            </div>
            {/* <Component /> */}
            {/* {props.children} */}
            {children}
        </div>

        // using anchor tags also results in working links, but its not good because they refresh the entire
        // inner state of the react application
        // <h3 style={style}><a href='/'>Home</a></h3>
        // <h3 style={style}><a href='/jokes'>Jokes</a></h3>
    )
}

export default Header;