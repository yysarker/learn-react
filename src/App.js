// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Hello React, I love you.</h2>
//         <p>I try to learn you as soon as possible.</p>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import React from "react"
import logo from './logo.svg'
import Header from "./components/header"
import MainContent from "./components/mainContent"
import Footer from "./components/footer"
function App(){
    return(
        <div className="App">
            <div className="todo-list">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<Header/>*/}
                <MainContent/>
                <MainContent/>
                <MainContent/>
                <MainContent/>
                {/*<Footer/>*/}
            </div>
        </div>
    )
}

export default App
