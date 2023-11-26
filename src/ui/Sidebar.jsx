import {
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiArrowRightOnRectangle,
} from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=" bg-white col-span-1 h-[80%] rounded">
      <ul className="py-[1rem] flex flex-col gap-2 h-full">
        <li className="w-full text-right h-9 ">
          <NavLink
            to="/me"
            className="flex gap-2 text items-center justify-end text-[13px] font-semibold w-full h-full pr-3"
          >
            حساب کاربری
            <HiOutlineUser size={'20px'} />
          </NavLink>
        </li>
        <li className="w-full text-right h-9  ">
          <NavLink
            to="/user/managment"
            className="flex gap-2 text items-center justify-end text-[13px] font-semibold w-full h-full pr-3"
          >
            مدیریت کارمندان
            <HiOutlineDocumentText size={'20px'} />
          </NavLink>
        </li>
        <li className="w-full text-right h-9 ">
          <NavLink
            to="/about"
            className="flex gap-2 text items-center justify-end text-[13px] font-semibold w-full h-full pr-3"
          >
            درباره ما
            <HiOutlineChatBubbleOvalLeftEllipsis size={'20px'} />
          </NavLink>
        </li>
        <li className="w-full text-right pt-4  border-t border-t-gray-300 mt-auto">
          <NavLink
            to="/login"
            className="flex gap-2 text items-center justify-end text-[13px] font-semibold w-full h-full pr-3"
          >
            خروج از حساب کاربری <HiArrowRightOnRectangle size={'20px'} />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
