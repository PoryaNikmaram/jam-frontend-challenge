import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import EditUser from './pages/EditUser'
import ManageUser from './pages/ManageUser'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="/me" element={<Home />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/edit" element={<EditUser />} />
          <Route path="/user/managment" element={<ManageUser />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
