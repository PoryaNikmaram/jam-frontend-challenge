import { Link } from 'react-router-dom'
import AccountTable from '../features/account/AccountTable'
import Header from '../ui/Header'

function ManageUser() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to="/user/create"
          className="mb-5 text-xs font-medium text-purple-500 border border-purple-500 px-4 py-1 rounded-lg"
        >
          کارمند جدید
        </Link>
        <Header>مدیریت کارمندان</Header>
      </div>
      <AccountTable />
    </div>
  )
}

export default ManageUser
