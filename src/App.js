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


// import React from "react"
// import logo from './logo.svg'
// import Header from "./components/header"
// import MainContent from "./components/mainContent"
// import Footer from "./components/footer"
// function App(){
//     return(
//         <div className="App">
//             <div className="todo-list">
//                 {/*<img src={logo} className="App-logo" alt="logo"/>*/}
//                 {/*<Header/>*/}
//                 <MainContent/>
//                 <MainContent/>
//                 <MainContent/>
//                 <MainContent/>
//                 {/*<Footer/>*/}
//             </div>
//         </div>
//     )
// }
//
// export default App


import React from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component{
    render() {
        const  name = "Yeahyea Sarker"
        const showHello = true
        const showMath = true
        const math1 = 40
        const math2 = 23


        let math;
        if (showMath){
            math = (
                <h3>{math1} + {math2} = {math1+math2}</h3>
            )
        }else {
            math = null
        }
        return(
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="icon"/>
                    { showHello ? <h1> Hello {name.toUpperCase()} !!</h1> : null}
                    {/*{ showMath ? <h3>1 + 1 = {1+1}</h3> : "Don't have permision"}*/}
                    { math}
                </div>
            </div>
        )
    }
}
export default App