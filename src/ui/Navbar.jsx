import { HiOutlineUser } from 'react-icons/hi2'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between h-[10vh] py-5 px-16 bg-white">
      <div>
        <a href="#" className="flex items-center gap-2 font-semibold">
          <HiOutlineUser size={'25px'} />
          پوریا نیک مرام
        </a>
      </div>
      <p className="font-semibold">ایرانیان پرداز جم</p>
    </div>
  )
}

export default Navbar
