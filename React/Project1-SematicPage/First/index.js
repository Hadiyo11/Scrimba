function ReasonsForReact() {
    return(
        <div>
            <header>
                <nav>
                <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons why I am learning react</h1>
            <ol>I want to be a better frontend developer</ol>
            <ol>I enjoy being creative</ol>
            <ol>I love creating good looking UI</ol>
            <footer>
                © 2021 Letsitsi development. All rights reserved.
            </footer>
        </div>
    )
}

ReactDOM.render(<ReasonsForReact/>, document.getElementById("root"))

// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))


// const navbar = (
//     <nav>
//         <h1>Hadiyo's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))


// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// //JSX
// ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))


// // ReactDOM.render(<h1>Hello everyone. I am learning React.js!</h1>, document.getElementById("root"))

// /* Surprise! You probably thought you could just forget
// the line of code you just learned! Nope, not on my watch!

// Try to write that 1-liner of React code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>s inside*/

// // ReactDOM.render(
// //   <p> My list
// //     <ul>
// //       <li>Cake</li>
// //       <li>Chocolate</li>
// //     </ul>
// //   </p>,
// //   document.getElementById("root")
// // );


// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return (
//         <h1>I am learning React!</h1>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent/>
        
//     </div>,
//     document.getElementById("root")
// )