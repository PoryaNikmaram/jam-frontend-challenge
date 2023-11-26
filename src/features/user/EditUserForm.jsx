import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

function EditUserForm() {
  const schema = yup.object().shape({
    username: yup.string().required('شناسه کاربری الزامی است'),
    fullName: yup.string().required('نام نام خانوادگی الزامی است'),
    password: yup
      .string()
      .required('رمز عبور الزامی است')
      .min(8, 'طول گذرواژه باید حداقل 8 عدد باشد'),
    email: yup
      .string()
      .email('لطفا یک ایمیل معتبر وارد کنید')
      .required('ایمیل الزلمی است'),
    sex: yup.string().required('جنسیت الزامی است'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {}

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5"
      >
        <div className="col-span-2">
          <p className="text-sm font-semibold">شناسه کاربری</p>
          <input
            {...register('username')}
            type="text"
            className={`py-[8px] px-4 my-2 w-full mr-auto border ${
              errors?.username && 'border-red-600'
            } border-gray-300 rounded-md text-sm `}
            style={{ direction: 'rtl' }}
          />
          {errors.username && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold">*ایمیل</p>
          <input
            {...register('email')}
            type="text"
            className={`py-[8px] px-4 my-2 w-full mr-auto border ${
              errors?.email && 'border-red-600 '
            } border-gray-300 rounded-md text-sm `}
            style={{ direction: 'rtl' }}
          />
          {errors.email && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold">*نام و نام خانوادگی</p>
          <input
            {...register('fullName')}
            type="text"
            className={`py-[8px] px-4 my-2 w-full mr-auto border ${
              errors?.fullName && 'border-red-600 '
            } border-gray-300 rounded-md text-sm `}
            style={{ direction: 'rtl' }}
          />
          {errors.fullName && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold">*جنسیت</p>
          <select
            {...register('sex')}
            className={`py-[8px] px-4 my-2 w-full mr-auto border ${
              errors?.sex && 'border-red-600 '
            } border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500 `}
            style={{ direction: 'rtl' }}
          >
            <option value="1">مرد</option>
            <option value="0">زن</option>
          </select>
          {errors.sex && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.sex.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold">آدرس </p>
          <input
            {...register('address')}
            type="text"
            className={`py-[8px] px-4 my-2 w-full mr-auto border ${
              errors?.address && 'border-red-600 '
            } border-gray-300 rounded-md text-sm `}
            style={{ direction: 'rtl' }}
          />
          {errors.address && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.address.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className=" bg-gray-950 text-white text-sm px-10 py-1 text-center rounded-md hover:bg-gray-800 transition-all ml-auto col-start-2"
          onClick={handleSubmit}
        >
          <p className="mb-2">ویرایش کاربر </p>
        </button>
      </form>
    </div>
  )
}

export default EditUserForm
