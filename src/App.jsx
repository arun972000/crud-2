import Dash from './components/dash'
import './App.css'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { useState } from 'react'
import Home from './teacher/home'
import Create from './teacher/create'
import Edit from './teacher/edit'
import { Routes, Route } from "react-router-dom"
import SHome from './student/home'
import SEdit from './student/edit'
import SCreate from './student/create'
function App() {
  const [toggle, settoggle] = useState(false)

  function handling() {
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }
  return (
    <div className="App">
      <div className="d-flex">
        <Sidebar toggle={toggle} />
        <div className="container-fluid">
          <Navbar toggle={toggle} handling={handling} />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Dash />} />
              <Route path="/teacher/home" element={<Home />} />
              <Route path="/teacher/create" element={<Create />} />
              <Route path="/teacher/edit/:id" element={<Edit />} />
              <Route path="/student/home" element={<SHome/>}/>
              <Route path="/student/edit/:id" element={<SEdit/>}/>
              <Route path="/student/Create" element={<SCreate/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
