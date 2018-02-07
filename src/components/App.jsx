import React, { Component, Fragment} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        text: 'Hey'
        }
    }

    onInputChange = (value) => {
        this.setState({newtext: value});
    }
    onButtonClick(){
        if(this.state.hasLoaded === undefined) {
            this.setState({hasLoaded: false});
        } else {
            this.setState({hasLoaded: !this.state.hasLoaded});
        }
    }
    componentDidMount = () => {
        this.setState({hasLoaded: true});
    }

   render() {
        if (this.state.hasLoaded) {
           return (
            <Fragment>
                <h1>{this.state.newtext}</h1>
                <input 
                    placeholder = {this.state.text}
                    onChange = { (event) => this.onInputChange(event.target.value) }
                    />
                <button onClick = { (event) => this.onButtonClick()}></button>
            </Fragment>
        ); 
        } else {
            return (
               <div>
                <h1>Loading...</h1>
                <button onClick = { (event) => this.onButtonClick()}></button>
            </div> 
            )
        }
    }
}
export default App;