import { Fragment, useContext, useState } from "react";
import { LanguageContext } from "../../../context/language";
import GetDataFormValues from "../../../types/get-data-form";
import getDataSchema from "../../../schema/get-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import request from "../../../server";
import { toast } from "react-toastify";
import NumberIcon from "../../../assets/icons/number-icon";

const KvadratQoldiqPage = () => {
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Number[] | null | undefined>(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetDataFormValues>({ resolver: yupResolver(getDataSchema) });

  const onSubmit: SubmitHandler<GetDataFormValues> = async ({ number }) => {
    try {
      setLoading(true);
      const { data } = await request.get(`api/main/kvadrat-qoldiq`, {
        params: {
          number,
        },
      });
      setData(data.number);
      toast.info(
        `Misolni hisoblash uchun ketgan vaqt: ${data.time} millisekund`
      );
      toast.success(data.message);
      setLoading(false);
    } catch {
      setLoading(false);
      toast.warning(lang.couldnotEditThisUser);
    }
  };

  return (
    <Fragment>
      <div>
        <h2 className="text-center font-medium text-xl dark:text-white">
          Kvadrat Qoldiqlar Usuli (Quadratic Sieve)
        </h2>
        <p className="dark:text-white indent-10">
          Bu usul sonlarni faktorizatsiya qilishda eng samarali deterministik
          usullardan biridir. Ishlash prinsipi: Matematik algoritmlar yordamida
          kvadrat qoldiqlarni aniqlash orqali faktorizatsiya amalga oshiriladi.
          Afzalliklari: Katta sonlar uchun tez ishlaydi.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-4 md:gap-5">
        <div className="mb-5">
          <label className="dark:text-white text-sm mb-1" htmlFor="number">
            {lang.number}
          </label>
          <div className="flex items-center gap-2 border-2 dark:text-white rounded border-gray-600 dark:border-gray-400 px-2 py-1">
            <NumberIcon />
            <input
              {...register("number")}
              id="number"
              className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
              type="text"
            />
          </div>
          {errors?.number && (
            <p className="text-red-500 text-sm">{errors.number.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-400 w-full dark:bg-green-800 rounded-md text-white p-2 mb-4 md:mb-0"
        >
          {loading ? lang.waiting : lang.confirmation}
        </button>
      </form>
      {data === undefined ? null : (
        <div className="grid grid-cols-2 gap-3 ">
          {data === null ? (
            <h1 className="text-red-500 text-center text-3xl col-span-2">
              {lang.yourNumberPrime}
            </h1>
          ) : (
            data.map((num, index) => {
              return (
                <div
                  key={index}
                  className="rounded-lg border-4 border-green-500 p-4"
                >
                  <h1 className="text-center dark:text-white text-2xl">
                    {index + 1}-son: {num.toString()}
                  </h1>
                </div>
              );
            })
          )}
        </div>
      )}
    </Fragment>
  );
};

export default KvadratQoldiqPage;
