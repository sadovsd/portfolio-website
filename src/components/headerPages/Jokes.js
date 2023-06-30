import React, { Component } from 'react';
// import Header from './Header'; // we did the header in a more streamlined way by putting everything in the index.js

class Jokes extends Component {
    state = { joke: {} }; // by default, joke is an empty object

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    render() {

        const { setup, punchline } = this.state.joke;
        return (
            <div>
                <h2>Joke of the Day</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

// const JokesWithHeader = () => {
//     return(
//         <Header Component={Jokes}></Header>
//     )
// }

// export default JokesWithHeader;

export default Jokes;

// under the hood, the fetch method is implemented as a *** promise ***. "A promise is a wrapper around a javascript value that will
// be resolved at some point in the future"