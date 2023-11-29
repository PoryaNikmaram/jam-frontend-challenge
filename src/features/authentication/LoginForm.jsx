import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLoginMutation } from '../../redux/userApi'

const schema = yup.object().shape({
  username: yup.string().required('شناسه کاربری الزامی است'),
  password: yup.string().required('رمز عبور الزامی است'),
})

function LoginForm() {
  const [login, { isLoading, isFetching }] = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function onSubmit({ username, password }) {
    const { data, error } = await login({
      username,
      password,
    })
    if (data) {
      console.log(data)
    } else {
      console.log(error)
    }
  }

  return (
    <div className="col-span-3 flex flex-col text-right mr-auto w-full justify-center pr-[50px]">
      <p className="mb-[17px] text-3xl">شرکت ایرانیان پرداز جم</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="text-sm font-semibold mt-6">*شناسه کاربری</p>
          <input
            {...register('username')}
            type="text"
            className={`py-[8px] px-4 my-2 w-[70%] mr-auto border ${
              errors?.username && 'border-red-600 '
            } border-gray-300 rounded-md text-sm`}
            style={{ direction: 'rtl' }}
            disabled={isLoading}
          />
          {errors.username && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <p className=" text-sm font-semibold mt-6">*رمز عبور</p>
          <input
            {...register('password')}
            type="password"
            className={`py-[8px] px-4 my-2 w-[70%] mr-auto border ${
              errors?.password && 'border-red-600'
            } border-gray-300 rounded-md text-sm`}
            style={{ direction: 'rtl' }}
            disabled={isLoading}
          />
          {errors?.password && (
            <p className="text-red-600 text-[10px] font-semibold">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className=" bg-gray-950 text-white text-sm mr-auto mt-[52px] px-10 py-1 text-center rounded-md hover:bg-gray-800 transition-all disabled:cursor-not-allowed disabled:bg-gray-800"
          disabled={isLoading}
        >
          <p className="mb-2">ورود</p>
        </button>
      </form>
      <p className=" text-[12px] font-medium mt-3">
        ورود شما به منزله پذیرش
        <a href="#" className=" text-purple-500">
          {' '}
          قوانین و مقررات{' '}
        </a>
        سایت میباشد
      </p>
    </div>
  )
}

export default LoginForm

// console.log(
//   'data: ',
//   data,
//   ' isLoading: ',
//   isLoading,
//   ' isFetching: ',
//   isFetching
// )
