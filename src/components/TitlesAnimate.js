import React, { Component } from 'react';

const TITLES = [
    'Data science student',
    'Computer Science student',
    'Biology student',
    'Neuroscience student',
    'Bioinformatics student',
    'Researcher',
    'Enthusiastic learner',
    'Learning optimization enthusiast',
    'Athlete',
    'Armwrestler',
    'Lifter',
    'Health optimization enthusiast',
    'Content creator',
    'Biography enthusiast',
    'Father',
    'Son',
    'Grand SOn',
    'Great GrandSon',
    'Great great grandson',
    'sister',
    'great sister',
    'black supremacist',
    'transgender rights visionary',
    'cis trans at birth',
    'benzene ring',
    'Health optimization enthusiast',
    'Content creator',
    'Biography enthusiast',
    'Father',
    'Son',
    'Grand SOn',
    'Great GrandSon',
    'Great great grandson',
    'sister',
    'great sister',
    'black supremacist',
    'transgender rights visionary',
    'cis trans at birth',
    'benzene ring',
    ''
];

class TitlesAnimate extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('TitlesAnimate component has mounted', this.state);
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('TitlesAnimate component will unmount!');
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {

        this.titleInterval = setInterval(() => {
            const NextTitleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: NextTitleIndex});
            if (NextTitleIndex === TITLES.length - 1) {
                clearInterval(this.titleInterval); // Stop the animation
                this.props.onTitleAnimationComplete();
            }
        }, 150);
    }

    render() {
        const { titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return(
            <div>
                <h3>{title}</h3>
            </div>
        )
    }
}

export default TitlesAnimate;