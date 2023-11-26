import { useGetUsersQuery } from '../../redux/userApi'
import TableRow from './TableRow'

function AccountTable() {
  const { data, isLoading } = useGetUsersQuery()
  console.log(data, isLoading)
  return (
    <div>
      <div
        className="grid grid-cols-13 bg-stone-300 px-1 py-[5px]"
        style={{ direction: 'rtl' }}
      >
        <p className="text-[10px]  font-medium col-span-1 pr-1">#</p>
        <p className="text-[10px] font-medium col-span-3  border-transparent border-r-purple-400 pr-2 border-2">
          نام و نام خانوادگی
        </p>
        <p className="text-[10px] font-medium col-span-3 border-transparent border-r-purple-400 pr-2 border-2">
          شناسه کاربری
        </p>
        <p className="text-[10px] font-medium col-span-4  border-transparent border-r-purple-400 pr-2 border-2">
          آدرس
        </p>
        <p className="text-[10px] font-medium col-span-2  border-transparent border-r-purple-400 pr-2 border-2 ">
          اقدامات
        </p>
      </div>
      <div
        className="grid grid-cols-13 bg-stone-100 px-1 py-[5px] border border-b-gray-400"
        style={{ direction: 'rtl' }}
      >
        <TableRow />
      </div>
      <div></div>
    </div>
  )
}

export default AccountTable
