import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
//import '../Containers/App.css';
import 'tachyons';
// import Hey from './Hey';
// import MetricsAmila from './MetricsAmila';
//import registeredServiceWorker from './registeredServiceWorker';


ReactDOM.createRoot(document.getElementById("root")).render(<App /> );

//ReactDOM.render(<App />, document.getElementById('root')); 
//ReactDOM.render(<Hey />, document.getElementById('root'));
// ReactDOM.render(<MetricsAmila />, document.getElementById('root'));

//registeredServiceWorker();

export default App;
