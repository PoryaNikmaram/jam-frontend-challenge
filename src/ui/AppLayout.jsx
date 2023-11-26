import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden xl:bg-primary">
      <Navbar />
      <div className="grid grid-cols-4 gap-5 bg-primary p-6 h-[70vh] xl:w-[1180px] xl:m-auto">
        <div className="col-span-3 h-full self-start bg-white text-right mr-auto w-full p-7 rounded ">
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
