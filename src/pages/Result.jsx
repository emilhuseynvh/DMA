import { useState } from "react"
import Button from "../Components/UI/Button"
import calculateScores from './../data/calculateScore'
import findZone from "../data/findZona"


const profession = [
    [
        [
            "Təcili yardım sürücüsü",
            "Fermer",
            "Bağban dekorator",
            "Dekorator",
            "Sürücü (yük maşını, çatdırılma xidməti)"
        ],
        [
            "Kənd təsərrüfatı avadanlıqları üzrə mexanik",
            "Avtomobil təmiri",
            "Təcili tibbi yardım sistemində çalışan şəxs",
            "Ayaqqabı təmiz ustası",
            "Makiyaj ustası",
            "Tikinti avadanlıqları üzrə usta",
            "Gülbecərən usta",
            "Çörək ustası",
            "Dərzi",
            "Qəssab",
            "Ofisiant"
        ],
        [
            "Avtomobil təmiri üzrə çilingər",
            "Kimyəvi laboratoriya avadanlıqları üzrə texniki xidməti işləri",
            "Elektrik üzrə texnik",
            "Modelyer-dizayner",
            "Fotoqraf",
            "İdman hakimi",
            "Satış üzrə məsləhətçi",
            "Əczaçılıq üzrə texnik",
            "Rəssam-dekorator, interyer",
            "Səs mühəndisi",
            "Simli musiqi alətlərinin təmirçisi",
            "Geyim üzrə dizayner",
            "Kompüter operatoru",
            "Müstəntiq",
            "Zərgər",
            "Yanğınsöndürən",
            "Heykəltəraş"
        ],
        [
            "Reklam meneceri",
            "Təyyarə mühərriki mütəxəssisi",
            "Pilot",
            "Uçuş mühəndisi",
            "Memarlıq sahəsi üzrə rəssam",
            "Kimyaçı",
            "İnşaat mühəndisi",
            "Kompüter şəbəkə inzibatçısı",
            "Kamera operatoru",
            "Redaktor",
            "Sosial işçi",
            "İnsan resursları üzrə menecer",
            "Marketing üzrə mütəxəssis",
            "Tibb bacısı",
            "Peşəyönümü üzrə məsləhətçi",
            "Mühasib",
            "Maliyyə meneceri",
            "Qrafik dizayner",
            "İnteryer dizayner",
            "Data analitikası üzrə mütəxəssis",
            "Maşınqayırma mühəndisi",
            "Tibbi və klinik laboratoriya işçisi",
            "Ailə məsləhətçisi",
            "Orta məktəb müəllimi",
            "Rəssam-dekorator, interyer",
            "İctimaiyyətlə əlaqələr üzrə mütəxəsis",
            "Satınalma üzrə mütəxəssis",
            "Müxbir",
            "Peşə təhsili müəllimləri",
            "Məktəb psixoloqu",
            "Elektrik təchizatı üzrə texnik",
            "İbtidai sinif müəllimi",
            "İnteryer və eksteryerin bədii tərtibatçısı",
            "IT mütəxəssisi - proqram təminatçısı və inkişafçısı",
            "UI/UX dizayner",
            "Data Analitik (Big data analitikləri",
            "Mobile developer",
            "DevOps mühəndisi",
            "Backend developer",
            "Frontend developer",
            "Rəqəmsal media və marketinq mütəxxəsisi",
            "Kompüter sistemlərin və şəbəkəlirinin proqram təminatı",
            "JAVA proqramlaşdırma",
            "Phyton Proqramlaşdırma",
            "ORACLE database SQL",
            "ORACLE PL/SQL",
            "İT təhlükəsizlik (CompTIA Security+)",
            "Sertified Ethical Hacker(CEH)",
            "Radio və televiziya müxbiri",
            "Xəzinadar",
            "Ətraf mühitin mühafizəsi üzrə mütəxxəsis",
            "Landşaft memarı"
        ],
        [
            "Biologiya müəllimi",
            "Bioloq",
            "Məsləhtçi psixoloq",
            "Stomatoloq",
            "Iqtisadiyyat müəlllimi",
            "İngilis dili və ədəbiyyat müəllimi",
            "Aerokosmik mühəndis",
            "Anestezioloq",
            "Antropologiya və arxeologiya müəllimi",
            "Mədəniyyətşünaslıq üzrə müəllim",
            "İncəsənət üzrə müəllim",
            "Kimya mühəndisi",
            "Kimya müəllimi",
            "Komputer elmləri üzrə müəllim",
            "Təhsil sahəsi üzrə ekspert",
            "Xarici dil və ədəbiyyat müəllimi",
            "Tarix müəllimi",
            "Hüquqşünas",
            "Riyaziyyatçı",
            "Ginekoloq",
            "Ağız və üz-çənə cərrahı",
            "Pediatr",
            "Fizika müəllimi",
            "Psixiatr",
            "Sosiologiya müəllimi",
            "Cərrah",
            "Baytar",
            "Zooloq",
            "Dietoloq",
            "Fizioterapevt",
            "Statistik"
        ]
    ],
    [
        [
            "Balıqçı",
            "Suvaqçı"
        ],
        [
            "Kənd təsərrüfatı avadanlıqlarının operatoru",
            "Florist (Gülsatan)",
            "Mebel ustası",
            "Makiyaj ustası",
            "Dəmir yolu müfəttişi",
            "Səyahət bələdçisi",
            "Dayə (Uşağa baxıcı)",
            "Qəssab",
            "Təmirçi-çilingər",
            "Heyvanlarda süni mayalanma üzrə texnik",
            "Balıqyetişdirən",
            "Hərəkət tərkibinin təmiri çilingəri",
            "Xarrat-dülgər və parket ustası",
            "Dərzi",
            "Aşpaz",
            "Heyvan təlimçisi (təcrübəçi)",
            "Yük maşını sürücüsü",
            "Manikürçü-pedikürçü",
            "Məişət soyuducularının təmiri üzrə usta",
            "Heyvandarlıq üzrə texnik"
        ],
        [
            "Tikinti mühəndisi",
            "Kənd təsərrüfatı üzrə mütəxəssis",
            "Heyvandarlıq üzrə texnik",
            "Balıq yetişdirmə üzrə işçi",
            "Bağçılıq üzrə mütəxəssis",
            "Müştəri xidmətləri üzrə mütəxəssis",
            "Fitnes üzrə təlimatçı",
            "Dağ və ağac abidələrinin bərpaçısı",
            "Toxumçuluq şitilçilik və tingçilik mütəxəssisi",
            "Fotoqraf",
            "Müstəntiq",
            "Modelyer-dizayner",
            "Rəssam",
            "Daşınmaz əmlak agenti",
            "Gəmi mühəndisi",
            "Meşə yanğınlarının söndürülməsi və qarşısının alınması üzrə mütəxəssis"
        ],
        [
            "İnzibati işlər üzrə mütəxəssis",
            "Kompüter təhlükəsizliyi mütəxəssisi",
            "Tikinti işlərinin layihələndirilməsi və icrası üzrə texnik",
            "Verilənlər bazasının idarə edilməsi üzrə mütəxəssis",
            "Rejissor",
            "Redaktor",
            "Yanğın təhlükəsizliyi üzrə mühəndis",
            "Qida məhsullarının keyfiyyətinin yoxlanılması üzrə mütəxəssis",
            "Coğrafiyaçı",
            "Sənaye mühəndisi",
            "Bağça müəllimi",
            "Maşın mühəndisi",
            "Tibbi və səhiyyə xidmətləri üzrə menecer",
            "Dağ-mədən və geologiya mühəndisi",
            "Təbiişünas",
            "Məktəbəqədər təhsildə müəllim",
            "Satış təmsilçisi",
            "Təlim və inkişaf üzrə mütəxəssis",
            "Avtonəqliyyat vasitələrin texniki baxış üzrə mütəxəssis",
            "Sığorta agenti",
            "Aqrar innovasiya texnologiyaları üzrə mütəxəssis",
            "Virtual dünyanın texniki dizayneri",
            "Sosial işçi",
            "Elektrik mühəndisi",
            "Landşaft memarı",
            "Kənd təsərrüfatı üzrə mühəndis",
            "Məşqçi (idman sahəsində)",
            "Aerokosmik mühəndis",
            "Neft və qaz hasilatı mühəndisi",
            "Radio və televiziya diktoru"
        ],
        [
            "İnzibati hüquq üzrə hakim",
            "Astronom",
            "Biokimyaçı",
            "Xoreoqraf",
            "Bəstəkar",
            "Maliyyə üzrə analitik",
            "Hüquqşünas",
            "Statistik",
            "Antropoloq",
            "Klinik psixoloq",
            "Tarixçi"
        ]
    ],
    [
        [],
        [
            "İdmançı"
        ],
        [
            "Kənd təsərrüfatı üzrə mütəxəssis",
            "Heyvandarlıq sahəsi üzrə mütəxəssis",
            "Geoloq (mədən işi üzrə)",
            "Zərgərlər və qiymətli daş və metal işçiləri"
        ],
        [
            "İnzibati işlər üzrə mütəxəssis",
            "Aviaşirkət pilotu",
            "Aerokosmik mühəndis",
            "Uçuş mühəndisi",
            "Hava nəqliyyatı idarəçisi",
            "İnşaat mühəndisi",
            "Rejissor",
            "Təhsil sistemində idarəçi",
            "Maliyyə eksperti",
            "Sənaye mühəndisi",
            "Geoloq (mədən işi üzrə)",
            "Qiymətli kağızlar və məhsullar üzrə satış təmsilçisi",
            "Texniki direktor/menecer",
            "Elektronika mühəndisi",
            "Mexanika mühəndisi",
            "İnsan resursları meneceri",
            "Nəqliyyat mühəndisi",
            "Maliyyə meneceri",
            "Dəniz naviqasiyası mühəndisi",
            "Kimya mühəndisi",
            "Dəniz mühəndisi"
        ],
        [
            "Xoreoqraf",
            "Təhsil üzrə idarəçi",
            "Cərrah",
            "Baytar",
            "Hüquqşünas"
        ]
    ],
    [
        [
            "Təcili yardım sürücüsü",
            "Əyləncə və istirahət məkanı işçiləri",
            "Qeydiyyatçı (mehmanxanada)",
            "Kuryer",
            "Barista",
            "Qabyuyan",
            "Balıqçı",
            "Otel xidmətçisi (təmizlik işləri)",
            "Yaşıllaşdırma işçisi",
            "Təmizlik işçisi",
            "İstehsal işçisi",
            "Ləkəçıxaran",
            "Bağban",
            "Suvaqçı"
        ],
        [
            "Aşpaz",
            "Uçuş bələdçisi",
            "Santexnik",
            "Mehmanxana qapıçısı (Belman)",
            "Qeydiyyatçı (mehmanxanada)",
            "Xilasetmə dalğıcı",
            "Makiyaj ustası",
            "Tibb bacısı köməkçisi",
            "Dayə",
            "Xəstə baxıcısı",
            "Əczaçılıq üzrə texnik",
            "Karxanaların hazırlanması üzrə nəzarətçi",
            "Xalça və xalça məmulatlarının bərpaçısı",
            "Ərzaq və qeyri-ərzaq malları satıcısı, nəzəratçi-xəzinadar",
            "Ofisiant",
            "Barmen",
            "Ekoturizm üzrə bələdçi",
            "Milli park bələdçisi",
            "Nəzarət-ölçü və avtomatika cihazlarının çilingəri",
            "Avtomobil və traktorların elektrik avadanlıqlarının təmiri üzrə",
            "Baytar köməkçisi",
            "Mebel ustası",
            "Çağrı mərkəzi üzrə operator",
            "Avtomobil nəqliyyatı ilə beynəlxalq sərnişin və yük daşımalar üzrə operator",
            "Qəssab",
            "Kargüzar",
            "Manikürçü-pedikürçü",
            "Mühafizəçi"
        ],
        [
            "Çörək və un məmulatlarının istehsalı üzrə texnoloq",
            "Diş texniki",
            "Şüşəbişirmə operatoru",
            "Kosmetoloq",
            "Suvurma üzrə işçi",
            "Taxtapuşçu, təmirçi (əvvəlki adı: dam ustası)",
            "Cərrahiyə texnoloq",
            "Turanimator",
            "Bərbər-vizajist-manikürçü",
            "İnformasiya texnologiyaları üzrə texniki dəstək mütəxəssisi",
            "Masajist",
            "Aqronom/texnik",
            "Yardım masası (Help Desk) mütəxəssisi",
            "Səyahət bələdçisi",
            "Kompüter operatoru",
            "Fotoqraf",
            "Kitabxanaçı",
            "Fizioterapevt köməkçisi",
            "Psixiatr köməkçisi",
            "Audio və video avadanlıqları üzrə texnik"
        ],
        [
            "Təsərrüfat işləri üzrə nəzarətçi",
            "Optika məsləhətçisi",
            "Tikinti işlərinin layihələndirilməsi və icrası üzrə texnik",
            "Həkim köməkçisi",
            "Tibb bacısı",
            "Müəllim köməkçisi",
            "Konfrans və tədbir təşkilatçısı",
            "İnsan resursları mütəxəssisi (HR)",
            "Sosial işçi",
            "Tərcüməçi"
        ],
        [
            "Kənd təsərrüfatı elmləri üzrə müəllim",
            "Anestezioloq",
            "Antropologiya və arxeologiya sahələri üzrə müəllim",
            "Mədəniyyətşünaslıq sahəsi üzrə müəllim",
            "İncəsənət üzrə müəllim",
            "Atletika üzrə məşqçi",
            "Biologiya müəllimi",
            "Kimya müəllimi",
            "Stomatoloq",
            "İqtisadiyyat müəllimi",
            "İngilis dili və ədəbiyyat müəllimi",
            "Xarici dil və ədəbiyyat müəllimi",
            "Tarix müəllimi",
            "Mamaloq və ginekoloq",
            "Ağız və üz-çənə cərrahları",
            "Pediatr",
            "Fizika müəllimi",
            "Siyasi elmlər üzrə müəllim",
            "Psixologiya sahəsi üzrə müəllim",
            "Sosiologiya sahəsi üzrə müəllim",
            "Xarici dil (ingilis dili) üzrə müəllim",
            "Fizioterapevt",
            "Terapevt",
            "Dietoloq",
            "Rentgenoloq"
        ]
    ],
    [
      [
        "Operator-cildçi",
        "Tranzit və şəhərlərarası avtobus sürücüsü",
        "Əzmə, üyütmə və cilalama maşını operatoru",
        "Kəsmə və doğrama maşınlarının operatorları",
        "Sürücü",
        "Poçt çeşidləyən və paylayan",
        "Balıqçı",
        "Rəngləmə və dekorasiya edənlər",
        "Tikiş maşını operatoru",
        "Çatdırılma xidmətləri və ya yüngül  yük maşını sürücüləri",
        "Qaynaqçı və kəsici",
        "Meyvə-tərəvəz ustası",
        "İntensiv bağçılıq üzrə işçi",
        "İstixana operatoru",
        "Quş cəmdəklərini ayıran",
        "Əti sümükdən ayıran"
      ],

      [
        "Kənd təsərrüfatı texniki",
        "Heyvanlara nəzarət üzrə işçi",
        "Məktəblər üzrə avtobus sürücüsü ",
        "Ekspeditor",
        "Kimyəvi laboratoriya avadanlıqlarının texniki xidmət",
        "Dülgər",
        "Kran operatoru",
        "Elektrik xətt quraşdırıcısı və təmirçisi",
        "Qazıntı və yükləmə maşınlarının operatoru",
        "Qaz avadanlıqlarının təmiri və istismarı üzrə çilingər",
        "Elektrik üzrə texnik",
        "Mehmanxana, motel və istirahət mərkəzinin işçiləri",
        "Kredit mütəxəssisi (kiçik)",
        "Tibbi avadanlıqların hazırlayan işçi",
        "Avtomobil müfəttişi",
        "Bələdiyyə işçisi",
        "Dənizçi",
        "Poçt əməliyyatları üzrə mütəxəssis",
        "Çap maşın operatoru",
        "Daminyol mühəndisi",
        "Dəmiryolu stansiyasının növbətçisi",
        "Sosial xidmət üzrə köməkçi",
        "Qatar tərtibatçısı (metropoliten)",
        "Səyahət bələdçisi",
        "Qaynaqçı və kəsici",
        "Qənnadçı, şirniyyatçı",
        "Aşpaz",
        "Traktorçu-maşinist",
        "Quşçuluq mütəxəssisi",
        "Arıçı",
        "Elektrik maşınlarının təmiri üzrə elektrik çilingəri",
        "Avtomat və yarımavtomat maşınların elektrik qaynaqçısı",
        "Qaz qaynaqçısı",
        "Elektrik qaz qaynaqçısı",
        "Əl elektrik qaynaqçısı",
        "Texniki xidmət məntəqələrində lokomotivlərin baxıcısı və təmiri çilingəri",
        "Plastmas tökücüsü (qəlibçi)",
        "Polad taxtapuş üzrə taxtapuşçu",
        "İnşaat rəngsazı",
        "Üzlükçü-plitəçi",
        "Bənna",
        "Polad və dəmir-beton konstruksiyaların quraşdırılması üzrə quraşdırıcı",
        "Mühafizəçi",
        "Yük maşını sürücüsü",
        "Kargüzar",
        "Operator-cildçi",
        "Kassir",
        "Məişət soyuducularının təmiri üzrə usta",
        "Neft-qaz sahəsində qazma qurğularının operatoru",
        "Enerji istehsal edən qurğuların operatoru",
        "Telekommunikasiya avadanlıqlarının təmiri və texniki xidməti üzrə işçi",
        "Avtomobil yollarının tikintisi üzrə texnik",
      ],
      [
        "Çörək və un məmulatlarının istehsalı üzrə işçi",
        "Kimyəvi analiz laborantı",
        "Məhkəmə katibi",
        "Elektrik avadanlıqlarının sınaqları və təmiri üzrə elektromexanik",
        "Elektrik və elektronika təmirçiləri",
        "Oymaçı",
        "Qiymətləndirici (daşınar və daşınmaz əmlak üzrə) ",
        "İstilik şəbəkəsi avadanlıqlarının təmiri üzrə çilingər",
        "Neft və qaz hasilatı üzrə operator",
        "Dizayner (toxuculuq sənayesi üzrə)",
        "Quyu və qazma operatorları",
        "Daş və ağac abidələrinin bərpaçısı",
        "Kompüterlərin təmiri və xidməti üzrə texnik",
        "Kənd təsərrüfatının maşın və avadanlıqlarının təmiri üzrə çilingər",
        "Qazanxana maşinisti",
        "İstilik şəbəkəsi avadanlıqlarının təmiri üzrə çilingər",
        "Elektrik stansiyalarının elektrik avadanlıqlarının təmiri üzrə elektrik çilingəri",
        "Əl ilə elektrik qaynaq avadanlıqlarının (transformatorların) təmiri üzrə elektrik montyoru",
        "Avtomatik və rele mühafizəsi aparatlarının təmiri üzrə elektrik montyoru",
        "Kabel xətlərinin quraşdırılması və təmiri üzrə elektrik montyoru",
        "Liftlərin texniki xidmət və təmir üzrə işçisi",
        "Mobil telefonların təmiri ustası",
        "Rəqəmli idarə olunan dəzgahların Kompüter operatoru (CAD/CAM/ CAE)",
        "Eskalatorların təmiri və xidməti çilingər-elektriki",
        "Kran maşinisti (krançı)",
        "Avtomobil diaqnostikası və təmiri ustası",
        "Poliqrafiya üzrə dizayner",
        "Elektrik qaldırıcılarının (liftlərin) quraşdırıcısı",
        "İsitmə-soyutma, havalandırma sistemləri və avadanlıqları üzrə montajçı",
        "Qida məhsullarının keyfiyyətinin yoxlanılması üzrə texnik",
        "Turizm agenti",
        "Maşinist",
        "İnsan resursları üzrə mütəxəssis köməkçisi "
      ],
      [
        "Kredit mütəxəssisi (baş)",
        "Müavini müfəttiş",
        "İctimai nəqliyyatın planlaşdırılması və tənzimlənməsi üzrə mütəxəssis",
        "Kadrlar üzrə işə götürən)",
        "Həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi",
        "Bioloji texnik",
        "Geoloq (mədən işi üzrə)",
        "Satış təmsilçisi"
      ],
      [
        "Magistr səviyyəsi üzrə müəllim köməkçisi",
      ]
    ],
    [
        [
            "Operator-cildçi",
            "Tranzit və şəhərlərarası avtobus sürücüsü",
            "Poçt çeşidləyən və paylayan",
            "Kuryer, paket və baqaj daşıyan"
        ],
        [
            "Kimya zavodu operatoru",
            "Mebel ustası",
            "Tibbi avadanlıqların təmiri ustası",
            "Kredit mütəxəssisi (kiçik)",
            "Dərzi",
            "Dayə",
            "Kinoloq",
            "Çilingər və seyf təmirçisi",
            "Elektrik çilingəri (məişət maşınları və avadanlıqları)",
            "Ağır yük maşını sürücüsü"
        ],
        [
            "Zərgər",
            "Stomatoloji laboratoriya texniki",
            "Elektrik stansiyalarının avadanlıqlarına xidmət üzrə çilingər",
            "Elektrik avadanlıqlarının sınaqları və təmiri üzrə elektromexanik",
            "Tibbi avadanlıqların təmirçisi",
            "Zərb alətlərinin təmirçisi",
            "Simli musiqi alətlərinin təmirçisi",
            "Saatsaz",
            "Kompüter operatoru",
            "Modelyer-dizayner",
            "İnsan resursları sahəsi üzrə köməkçi"
        ],
        [
            "Xəzinədar və maliyyə üzrə mütəxəssis",
            "Mühasib",
            "Kənd təsərrüfatı üzrə müfəttiş",
            "Auditor",
            "Büdcə hesablanması üzrə analitik",
            "Xərclərin hesablanması üzrə mütəxəssis",
            "Satınalma üzrə mütəxəssis",
            "Rəqəmsal alətlər və proseslərə nəzarət üzrə proqramçı",
            "Təchizat üzrə agent",
            "Kompüter şəbəkə inzibatçısı",
            "Kibertəhlükəsizlik üzrə mütəxəssis",
            "Geoloq (mədən işi üzrə)",
            "Statistika sahəsi üzrə köməkçi",
            "Kompüter və informasiya sistemləri üzrə mütəxəssis",
            "Aerokosmik mühəndis"
        ],
        [
            "İnzibati hüquq üzrə hakim",
            "Biokimyaçı",
            "Biofizik",
            "Məsləhətçi psixoloq",
            "Fizik",
            "Özəl sektor rəhbəri",
            "Psixiatr"
        ]
    ]
];

const Result = () => {
    const [activeFirst, setActiveFirst] = useState(true)
    const [activeSecond, setActiveSecond] = useState(true)

    const jobs = ['Müəllim', 'Rejissor', 'Redaktor', 'Sosial işçi', 'Sosial işçi', 'Redaktor', 'Müəllim', 'Redaktor', 'Sosial işçi']
    const data = calculateScores()


    const zona = findZone()
    const rowFirst = data[0].row
    const rowSecond = data[1].row

    const jobFirst = profession[rowFirst][zona]
    const jobSecond = profession[rowSecond][zona]
    console.log(jobFirst, jobSecond);
    




    return (
        <div className="bg-[#F8F8F8]  py-36">
            <div>
                <div className="absolute top-[300px]"><img src="assets/img/_b14be35a-6806-4ff9-b756-40f9df3013fa 2.png" alt="" /></div>
                <div className="absolute top-[887px]"><img src="assets/img/baloon2 1.png" alt="" /></div>
                <div className="absolute right-0 top-[452px]"><img src="assets/img/baloon.png" alt="" /></div>
                <div className="absolute left-6 top-[625px]"><img src="assets/img/Layer-0-copy1 3.png" alt="" /></div>
                <div className="absolute top-40 right-0"><img src="assets/img/Layer-0-copy1 4.png" alt="" /></div>
                <div className="absolute top-[750px] right-16"><img src="assets/img/star2.png" alt="" /></div>
                <div className="absolute top-[980px] right-28"><img src="assets/img/Layer-0-copy1 2.png" alt="" /></div>
                {/* <div className="absolute top-full right-0"><img src="../../public/assets/img/Layer-0-copy-2 3.png" alt="" /></div> */}
            </div>
            <div className="wrapper">
                <div>
                    <p className="font-bold text-[#CED8E3] text-2xl">İş dəyərləri aləti</p>
                    <h1 className="text-[#003C67] font-bold text-5xl mt-5">Nəticəniz</h1>
                </div>
                <div className="flex items-start gap-8 mt-10">
                    <div className="p-10 bg-white rounded-2xl w-[680px]">
                        <div className="flex gap-6 items-center">
                            <span className="bg-[#1DDD76] text-white text-3xl px-7 py-2 rounded-full font-bold">{data[0].category}</span>
                            <span className="text-[#6F8193] text-xl">1-ci dəyəriniz</span>
                        </div>
                        <div className="mt-10">
                            <p className="text-[#6F8193] text-2xl">{data[0].description}</p>
                        </div>
                        <div className="mt-11">
                            <p className="text-[#6F8193] text-xl">Dəyərə görə uyğun peşə siyahısı</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {(activeFirst ? jobFirst.slice(0, 5) : jobFirst).map((item, index) => (
                                    <li key={index} className="text-[#1DDD76] border border-[#1DDD76] rounded-full font-medium text-xl py-2 px-10">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <button onClick={() => setActiveFirst(!activeFirst)} className={`bg-[#2BE597] ${jobFirst.length <= 4 && 'hidden'} text-white rounded-lg h-[50px] w-64 mt-11`}>Daha {activeFirst ? 'çox' : 'az'} peşə gör</button>
                    </div>
                    <div className="p-10 bg-white rounded-2xl w-[680px]">
                        <div className="flex gap-6 items-center">
                            <span className="bg-[#776BFD] text-white text-3xl px-7 py-2 rounded-full font-bold">{data[1].category}</span>
                            <span className="text-[#6F8193] text-xl">2-ci dəyəriniz</span>
                        </div>
                        <div className="mt-10">
                            <p className="text-[#6F8193] text-2xl">{data[1].description}</p>
                        </div>
                        <div className="mt-11">
                            <p className="text-[#6F8193] text-xl">Dəyərə görə uyğun peşə siyahısı</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {(activeSecond ? jobSecond.slice(0, 5) : jobSecond).map((item, index) => (
                                    <li key={index} className="text-[#7C81FF] border border-[#7C81FF] rounded-full font-medium text-xl py-2 px-10">{item}</li>
                                ))}
                            </ul>

                        </div>
                        <button onClick={() => setActiveSecond(!activeSecond)} className={`bg-[#7C81FF] text-white rounded-lg ${jobSecond.length <= 4 && 'hidden'} h-[50px] w-64 mt-11`}>Daha {activeSecond ? 'çox' : 'az'} peşə gör</button>
                    </div>
                </div>
                <div className="my-10 flex gap-4 justify-center ">
                    <Button send='/' bgcolor='#fff' color='#6A7580'>
                        <img src="assets/img/home-icon.svg" alt="Icon" />
                        <p>Əvvələ qayıt</p>
                    </Button>
                    <Button bgcolor='#4132EA' color='#fff'>
                        <img src="assets/img/tool.svg" alt="Icon" />
                        <p>Aləti qiymətləndir</p>
                    </Button>
                    <Button bgcolor='#32A9FF' color='#fff'>
                        <p>Nəticəni paylaş</p>
                        <img src="assets/img/share.svg" alt="Icon" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Result
