import Button from "../Components/UI/Button"

const About = () => {
    return (
        <div className="py-16">
            <div className="wrapper">
                <div>
                    <p className="font-bold text-[#CED8E3] text-2xl">İş dəyərləri aləti</p>
                    <h1 className="text-[#003C67] font-bold text-5xl mt-5">Alət haqqında məlumat</h1>
                    <p className="text-[#6F8193] text-[2rem] mt-5 max-w-4xl">
                        <span className="text-[#32A9FF]">"İş dəyərləri vərəqi"</span>
                        aləti O*NET plaftormasının məhsuludur və dünyanın bir çox ölkələrində istifadə olunur.</p>
                </div>
                <div className="w-full bg-[#F8F8F8] mt-14 rounded-2xl py-8 px-28">
                    <div className="text-[#003C67] text-2xl leading-8 max-w-5xl">
                        <p >
                            <span className="font-bold">Alət</span>
                            istifadəçilərə öz karyera və peşə maraqlarını müəyyən etməyə kömək etmək üçün hazırlanmışdır.
                        </p>
                        <p className="mt-2.5">
                            Bu alət şəxslərə uyğun peşələri təklif etmək üçün onların
                            <span className="font-bold"> dəyərlərini, maraqlarını, təhsil və təcrübəsini nəzərə alaraq </span>
                            qiymətləndirmə aparır.
                            İstifadəçilər iş mühitində onlar üçün ən mühüm olan xüsusiyyətləri seçərək cavablarını qeyd edirlər.
                            Şəxslərin cavabları, təhsil və təcrübə səviyyəsi nəzərə alınaraq onların maraqlarına uyğun gələ biləcək potensial peşə sahələrinin siyahısı təqdim edilir.
                        </p>
                        <p className="mt-2.5">
                            Alətin əsas məqsədi istifadəçilərin öz karyera yolları haqqında əsaslandırılmış qərarlar qəbul etmələrinə kömək etməkdir.
                        </p>
                    </div>
                </div>
                <div className="my-[70px] w-[600px] mx-auto flex gap-7">
                    <Button border={true} send='/'>
                        <img src="assets/img/home-icon.svg" alt="Icon" />
                        <p className="text-base font-medium text-[#6A7580]">Əvvələ qayıt</p>
                    </Button>
                    <Button bgcolor='#32A9FF' color='#fff' send='/test'>
                        <img src="assets/img/start-test.svg" alt="Icon" />
                        <p>Testə keçid et</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About
