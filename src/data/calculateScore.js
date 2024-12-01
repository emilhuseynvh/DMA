const score = [
    {
        category: "Nailiyyət",
        description: "Əgər nailiyyət sizin ən yüksək iş dəyərinizdirsə, ən güclü bacarıq və istedadlarınızdan istifadə etməyə imkan verən işlər sizin üçün ən uyğun sayılır. Səylərinizin nəticəsinə görə biləcəyiniz və uğur hissini yaşaya biləcəyiniz sahələri və işləri kəşf edin.",
        cards: ["A", "F"],
        multiplier: 3,
    },
    {
        category: "Müstəqillik",
        description: "Əgər müstəqillik sizin ən yüksək iş dəyərinizdirsə, öz təşəbbüsünüzlə yeniliklər edə biləcəyiniz və qərarlarınızı müstəqil şəkildə verə biləcəyiniz iş mühiti sizin üçün daha uyğun hesab olunur.",
        cards: ["I", "M", "T"],
        multiplier: 2,
    },
    {
        category: "Tanınma",
        description: "Əgər tanınma sizin ən yüksək iş dəyərinizdirsə, irəliləyiş üçün yaxşı imkanları olan işləri araşdırın. Prestijli, eləcə də liderlik potensialı olan işlər sizin üçün daha uyğun hesab olunur.",
        cards: ["D", "E", "O"],
        multiplier: 2,
    },
    {
        category: "Münasibətlər",
        description: "Əgər münasibətlər sizin ən yüksək iş dəyərinizdirsə, iş kollektivi ilə mehriban münasibət qura bildiyiniz işlər sizin üçün ən uyğun hesab olunur. Prinsiplərinizə zidd olan işləri görməyə məcbur edilmədiyiniz mühit sizin üçün ideal hesab olunur.",
        cards: ["H", "K", "O"],
        multiplier: 2,
    },
    {
        category: "Dəstək",
        description: "Əgər dəstək sizin ən yüksək iş dəyərinizdirsə, şirkətin işçilərini dəstəklədiyi və işçilərin idarəetmə sistemi ilə rahat olduğu işlər sizin üçün ən uyğun hesab olunur. Ədalətli və diqqətli idarəetmə üsulu ilə tanınan şirkətlərdə olan işləri araşdırın.",
        cards: ["B", "P", "Q"],
        multiplier: 2,
    },
    {
        category: "İş şəraiti",
        description: "Əgər iş şəraiti sizin ən yüksək iş dəyərinizdirsə, iş yerlərini araşdırarkən təklif olunan maaşı, sağlam və təhlükəsiz əmək şəraitinin olmasını nəzərə almaq vacibdir. Bəzi insanlar hər zaman məşğul olmağı, digərləri tək işləməyi və ya eyni anda bir neçə müxtəlif işlə məşğul olmağı sevir. İş şəraiti ilə əlaqəli gözləntilərinizi müəyyən edin və buna uyğun sahələri və işləri araşdırın.",
        cards: ["C", "J", "N", "R", "S"],
        multiplier: 1,
    },
];

const calculateScores = () => {
    const result = score.map((item, i) => {
        const total = item.cards
            .map((card) => findIndex(card))
            .reduce((acc, value) => acc + value, 0);

        return {
            category: item.category,
            score: total * item.multiplier,
            description: item.description,
            row: i
        };
    });

    const sortedResult = result.sort((a, b) => b.score - a.score);

    return sortedResult.slice(0, 2);
};

const findIndex = (arg) => {
    const test = JSON.parse(localStorage.getItem("test"));
    if (test) {
      const index = Object.entries(test).findIndex(([key, value]) =>
        value.items.some((item) => item.id === arg)
      );
      return index !== -1 ? index + 1 : -1;
    }
    return -1;
  };
  
  export default calculateScores
  