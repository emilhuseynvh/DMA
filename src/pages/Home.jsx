import Button from "../Components/UI/Button"

const Home = () => {
  const aboutTool = [
    { content: "Karyera və peşə maraqlarını müəyyən etməyə kömək edirik", icon: "Frame 29.png", color: "#7C81FF", mt: true },
    { content: "Hər kəsin dəyərlərini, maraqlarını, təhsil və təcrübəsini nəzərə alırıq", icon: "book 1.png", color: "#5690FF", },
    { content: "Sizə uyğun potensial peşə sahələrinin siyahısını göstəririk", icon: "cap2 1.png", color: "#5690FF", },
    { content: "Karyera yolunda əsaslandırılmış qərar verməyə kömək edirik", icon: "compass 1.png", color: "#924ADA", mb: true },
  ]
  return (
    <div className='flex items-center w-[100vw] h-[100vh]'>
      <div className='wrapper flex gap-32'>
        <div className='w-[50%]'>
          <h1 className='text-[#003C67] text-[5rem] font-bold'>İş dəyərləri aləti</h1>
          <div className="flex gap-6 my-10">
            <Button border={true} send='/about'>
              <img src="assets/img/about-icon.svg" alt="Icon" />
              <p className="text-[18px] font-medium text-[#6A7580]">Daha ətraflı</p>
            </Button>
            <Button bgcolor='#32A9FF' color='#fff' send='/workmeans'>
              <img src="assets/img/start-test.svg" alt="Icon" />
              <p>Testə keçid et</p>
            </Button>
          </div>
        </div>
        <div className='w-[50%] grid grid-cols-2 gap-6'>
          {aboutTool.map((item, index) => (
            <div style={{ backgroundColor: item.color }} key={index} className={`p-6 h-56 rounded-2xl ${item.mt ? 'mt-12' : item.mb ? '-mt-12' : ''}`}>
              <div className="w-52 flex flex-col items-start justify-between h-full">
                <div>
                  <img src={`assets/img/${item.icon}`} alt={`icon-${index}`} />
                </div>
                <p className='text-lg font-medium text-white leading-6'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home