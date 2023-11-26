/* eslint-disable react/prop-types */
import { useState } from 'react'
import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi2'
import Modal from '../../ui/Modal'

function TableRow() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <p className="text-[10px]  font-medium col-span-1 pr-1">1</p>
      <p className="text-[10px] font-medium col-span-3  border-transparent pr-2 border-2">
        کاربر 1
      </p>
      <p className="text-[10px] font-medium col-span-3 border-transparent pr-2 border-2 truncate">
        09199730980
      </p>
      <p className="text-[10px] font-medium col-span-4  border-transparent pr-2 border-2 truncate pl-10">
        قزوین خیابان نواب کوچه شهید داوذ لالو بن بست دوم درب اوب سمت چپ
      </p>
      <p className="text-[10px] font-medium col-span-2  border-transparent pr-2 border-2 flex gap-2">
        <button className=" text-blue-700">
          <HiOutlineEye size="17px" />
        </button>
        <button onClick={() => setOpen(true)} className="text-red-600">
          <HiOutlineTrash size="15px" />
        </button>
      </p>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <p className="mb-3">حذف کاربر</p>
          <p className=" text-xs text-gray-400 mx-11">
            آیا از حذف کاربر انتخابی اطمینان دارید؟{' '}
          </p>
          <div className="flex gap-3 items-center justify-center mt-5">
            <button
              onClick={() => setOpen(false)}
              className=" bg-white px-8 py-1 w-[100px] text-black text-xs rounded-md border border-black"
            >
              انصراف
            </button>
            <button className=" bg-black px-8 py-1 w-[100px] text-white text-xs rounded-md ">
              حذف
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default TableRow
