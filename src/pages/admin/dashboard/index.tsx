import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { LanguageContext } from "../../../context/language";

const AdminDashboardPage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Fragment>
      <h1 className="text-center text-3xl font-semibold dark:text-white">
        {lang.factorizationAlgorithms}
      </h1>
      <p className="dark:text-white indent-10">
        Sonlarni faktorizatsiyalash uchun bir nechta usullar mavjud bo‘lib, ular
        matematikaning asosiy masalalaridan biridir. Quyida ba'zi mashhur
        usullar va ularning ishlash prinsiplari keltirilgan:
      </p>
      <ul>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            Pollard's Rho Algoritmi
          </h2>
          <p className="dark:text-white indent-10">
            Bu probabilistik algoritm bo‘lib, katta sonlarni faktorizatsiya
            qilish uchun ishlatiladi. Ishlash prinsipi: Matematik iteratsiyalar
            yordamida biror sonning kichik bo‘luvchisini topishga harakat
            qiladi. Tez ishlashi bilan ajralib turadi, lekin har doim ham natija
            bermasligi mumkin.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            Fermaning Faktorizatsiya Usuli
          </h2>
          <p className="dark:text-white indent-10">
            Bu usul oddiy sonlarni ikki kvadrat ayirmasi ko‘rinishida
            ifodalashga asoslangan. Formulasi: N=a^2-b^2 bu yerda N
            faktorizatsiya qilinayotgan son, a va b esa natural sonlar. Ishlash
            prinsipi: a^2 sonini b^2 bilan bog‘lab, natijada a+b va a−b ni
            topish.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            Kvadrat Qoldiqlar Usuli (Quadratic Sieve)
          </h2>
          <p className="dark:text-white indent-10">
            Bu usul sonlarni faktorizatsiya qilishda eng samarali deterministik
            usullardan biridir. Ishlash prinsipi: Matematik algoritmlar
            yordamida kvadrat qoldiqlarni aniqlash orqali faktorizatsiya amalga
            oshiriladi. Afzalliklari: Katta sonlar uchun tez ishlaydi.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            Elliptik Egri Algoritmlar (Elliptic Curve Factorization)
          </h2>
          <p className="dark:text-white indent-10">
            Elliptik egri matematikasiga asoslangan algoritmlar katta sonlarni
            faktorizatsiya qilishda qo‘llaniladi. Afzalligi: O‘ta katta sonlar
            uchun samarali, ayniqsa, kichik tub bo‘luvchilarni topishda yaxshi
            natija beradi.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            Shorning Kvant Algoritmi
          </h2>
          <p className="dark:text-white indent-10">
            Bu kvant kompyuterlari uchun mo‘ljallangan algoritmdir.
            Afzalliklari: Klassik algoritmlarga qaraganda eksponensial darajada
            tez ishlaydi. Hozircha amaliy qo‘llanilishi cheklangan, chunki kvant
            kompyuterlar hali keng tarqalmagan.
          </p>
        </li>
        <li className="mb-5">
          <h2 className="text-center font-medium text-xl dark:text-white">
            General Number Field Sieve (GNFS)
          </h2>
          <p className="dark:text-white indent-10">
            Bu eng tezkor algoritmlardan biri bo‘lib, faktorizatsiya
            masalalarida ishlatiladi. Afzalliklari: Juda katta sonlarni
            faktorizatsiya qilish uchun eng samarali usullardan biri
            hisoblanadi. Qo‘llanilish Misollari: Kriptografiya: RSA kabi
            algoritmlarning xavfsizligi sonlarni faktorizatsiya qilishning
            murakkabligiga asoslanadi. Ilmiy Tadqiqotlar: Matematikada
            sonlarning tub omillarga ajralishini aniqlashga yordam beradi.
            Statistik Tahlillar: Katta sonlar ustida ishlashda.
          </p>
        </li>
      </ul>
    </Fragment>
  );
};

export default AdminDashboardPage;
