import {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
			}
	}

	componentDidCatch (error, info) {
		this.state({hasError: true})
	}

    render(){
    	return this.state.hasError ? <h1>Ooops. Than is not good</h1> : this.props.children
 //    	if (this.state.hasError) {
 //    		this.setState({hasError: true})
 //    	}
 //    	return this.props.children
	}	
}

export default ErrorBoundary;