import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import FocusInput from "./components/FocusInput";
// import UserList from "./components/UserList";
// import BirthdayTimer from "./components/BirthdayTimer";
// import Timer from "./components/Timer";
import Blogs from "./components/Blogs";
// import ContactManager from "./components/ContactManager";
import Navbar from "./components/Navbar";
import NewBlog from "./components/NewBlog";
import BlogDetails from "./components/BlogDetailes";
// import ControlledForm from "./components/ControlledForm";
// import BasicTable from "./components/BasicTables";
// import SortedTable from "./components/SortedTable";
// import FilteringTables from "./components/FilteringTables";
// import Quizz from "./components/Quiz";
// import Aa from "./components/ConditionalRendering";
// import Counter from "./components/Counter";
// import InlineStyling from "./components/InlineStyling";
// import LoggingWithProps from "./components/LoggingWithProps";
// import PropsExample from "./components/PropsExample";
// import PropsWithStyling from "./components/PropsWithStyling";
// import TogglgeMsg from "./components/ToggleMsg";
// import UserCards from "./components/UserCards";
// import ThemeTogglge from "./components/ThemeToggle";
// import ConditionalRendering1 from "./components/ConditionalRendering1";



// function Home() {
//   return <p>You are in home page</p>;
// }
// function Content() {
//   return <p>You are in contents page</p>;
// }
// function Gallery() {
//   return <p>You are in gallery page</p>;
// }


function Home() {
  return <h2 style={{top:"25vh", position:"relative"}}>Welcome to my blogs</h2>
}




function App() {
  const [newBlog, setNewBlog] = useState([])
  const [id, setId] = useState(9)

  // const fruits = ["Apple", "Banana", "Mango"];

  // const [user, setUser] = useState("")
  // const styles = {
  //   margin: "auto",
  //   padding: "20px"
  // }

  // const lucks = ['Good day', 'Bad day', 'Nice day']
  // const [luck, setLuck] = useState("")
  // const generate = () => {
  //     setLuck(lucks[Math.floor(Math.random(lucks)*lucks.length)])
  //   }

  return (
    // <div>
    //   <h1>Fruits</h1>
    //   <ul>
    //     {fruits.map((item) => {
    //       return <li>{item}</li>;
    //     })}
    //   </ul>
    // </div>

    // <Aa />

    // <p>
    //   {2*3}
    // </p>

    // <div>
    //   <InlineStyling />
    //   <PropsExample name="Sadha" age="21" college="Vardhaman" />
    // </div>

    // <PropsWithStyling msg="Hello"/>

    // <LoggingWithProps isLogged={true} />

    // <UserCards />

    // <Counter />

    // <TogglgeMsg />

    // <ThemeTogglge />

    // <div style={styles}>
    //   <input onChange={(e) => {setUser(e.target.value)}}/>
    //   <ConditionalRendering1 user={user} />
    // </div>

    // <div>
    //   <button onClick={generate}>See your luck</button>
    //   <p>{luck}</p>
    // </div>

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" Component={Home} />
    //     <Route exact path="/content" Component={Content} />
    //     <Route exact path="/gallery" Component={Gallery} />
    //   </Routes>
    //   {/* <ControlledForm /> */}
    // </BrowserRouter>


    // <BasicTable />
    // <SortedTable />
    // <FilteringTables />

    // <ContactManager />

    // <Quizz />

    // <Timer />
    // <BirthdayTimer />

    // <UserList />

    // <FocusInput />

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/blogs" element={<Blogs newBlog={newBlog} id={id} />} />
        <Route exact path="/newblog" element={<NewBlog newBlog={newBlog} setNewBlog={setNewBlog} id={id} setId={setId} />} />
        <Route exact path={'/blog/:id'} element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
    // <Blogs />
  );
}

export default App;
