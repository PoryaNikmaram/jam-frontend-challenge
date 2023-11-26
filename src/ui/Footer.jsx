function Footer() {
  return (
    <div className="flex items-center justify-between px-10 py-2 h-[20vh] bg-white">
      <img src="public/logo-slider.png" alt="logo" style={{ width: '150px' }} />

      <div className="flex gap-5 text-right text-[12px] font-medium">
        <div className="flex flex-col gap-1">
          <p className=" text-red-200">شبکه های اجتماعی</p>
          <a href="#">آپارات</a>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-red-200">پشتیبانی</p>
          <a href="#">تماس با ما</a>
          <a href="#">سوالات متداول</a>
          <a href="#">دبیرخانه</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
