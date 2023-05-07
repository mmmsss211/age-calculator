interface InputProps {
  date: number;
  label: string;
  placeholder: string;
  id: string;
  setDate: any;
  min: number;
  max: number;
  maxLength: number;
  clicked?: boolean;
}

const Input = ({ date, label, placeholder, id, setDate, min, max, maxLength, clicked }: InputProps) => {


  return (
    <>
      <main className="flex flex-col items-start gap-2">
        <label
          htmlFor={id}
          className="uppercase text-[#716F6F] text-sm font-bold tracking-[0.25em] leading-[21px]"
        >
          {label}
        </label>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className={`max-h-[72px] border border-solid px-6 py-3 w-[160px] placeholder:opacity-50 font-bold text-[32px] leading-[48px] rounded-lg text-[#151515] focus:border focus:border-solid focus:outline-none ${clicked && (date < min || date > max) ? 'border-[#FF5959] focues:border-[#FF5959]' : 'border-[#DCDCDC] focus:border-[#854DFF]'}`}
          onChange={(e) => setDate(parseInt(e.target.value))}
          maxLength={maxLength}
        />
        <div className="relative w-full">
        {clicked && (date < min || date > max) ? (
          <mark className="absolute w-full bg-transparent italic text-sm text-[#FF5959]">Must be a valid {label}</mark>
        ): (
          <></>
        )}
        </div>
      </main>
    </>
  );
};

export default Input;
