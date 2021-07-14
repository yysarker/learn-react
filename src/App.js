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


import React, {Component} from "react"
import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";

class App extends Component{
    render() {
        return(
            <div className="App">
                <Header roll="ReactJS Developer"/>
                <div className="container">
                    <MainContent name="Yeahyea Sarker" Age="24" Email="yeahyea@manarat.ac.bd" phone="222-222-2222"/>
                    <MainContent name="Navil Sarker" Age="25" Email="navil@manarat.ac.bd" phone="222-222-2222"/>
                    <MainContent name="Saiful Sarker" Age="26" Email="saiful@manarat.ac.bd" phone="222-222-2222"/>
                    <MainContent name="Jahid Sarker" Age="27" Email="jahid@manarat.ac.bd" phone="222-222-2222"/>
                </div>
                <Footer />
            </div>
        )
    }
}
export default App