import { useForm } from 'react-hook-form'

function AccountDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="bg-white h-full flex flex-col text-right mr-auto w-full justify-center px-2 mt-[-20px]">
      <form
        onSubmit={handleSubmit}
        className=" border border-red-100 p-6 rounded-md"
      >
        <div>
          <p className="text-sm  font-semibold ">شناسه کاربری</p>
          <input
            {...register('username')}
            type="text"
            className={`py-[8px] px-4 my-1 w-full mr-auto border ${
              errors?.username && 'border-red-600'
            } border-gray-300 rounded-md text-sm bg-red-50`}
            style={{ direction: 'rtl' }}
          />
          {errors.username && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold mt-4">نام و نام خانوادگی</p>
          <input
            {...register('fullName')}
            type="text"
            className={`py-[8px] px-4 my-1 w-full mr-auto border ${
              errors?.fullName && 'border-red-600 '
            } border-gray-300 rounded-md text-sm bg-red-50`}
            style={{ direction: 'rtl' }}
          />
          {errors.fullName && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold mt-4">ایمیل</p>
          <input
            {...register('email')}
            type="text"
            className={`py-[8px] px-4 my-1 w-full mr-auto border ${
              errors?.email && 'border-red-600 '
            } border-gray-300 rounded-md text-sm bg-red-50`}
            style={{ direction: 'rtl' }}
          />
          {errors.email && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold mt-4">آدرس </p>
          <input
            {...register('address')}
            type="text"
            className={`py-[8px] px-4 my-1 w-full mr-auto border ${
              errors?.address && 'border-red-600 '
            } border-gray-300 rounded-md text-sm bg-red-50`}
            style={{ direction: 'rtl' }}
          />
          {errors.address && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.address.message}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default AccountDetails
