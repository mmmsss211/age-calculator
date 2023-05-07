import DefaultDisplay from "@screens/DefaultDisplay";
import DateForm from "@forms/DateForm";
import { useStore } from "@store/store"
import { useEffect, useState } from "react";

interface cardProps {
  style: string;
}

const Card = ({ style }: cardProps) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const years = useStore((state) => state.years)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const months = useStore((state) => state.months)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const days = useStore((state) => state.days)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myYear = useStore((state) => state.myYear);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myMonth = useStore((state) => state.myMonth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myDay = useStore((state) => state.myDay);

  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [ageDays, setAgeDays] = useState("");

  const maxYear = new Date().getFullYear() - 1;

  const ageCalculator = () => {
    // Convert the input strings to Date objects
   const birthday = new Date(`${myYear}-${myMonth}-${myDay}`);
   const now = new Date();
   
   // Calculate the age in years, months, and days
   const ageInYears =  Math.abs(now.getFullYear() - birthday.getFullYear());
   const ageInMonths = Math.abs(now.getMonth() - birthday.getMonth());
   const ageInDays = Math.abs(now.getDate() - birthday.getDate());

   console.log(ageInYears, ageInMonths, ageInDays);

    // Set the state variables
    setAgeYears(`${ageInYears}`);
    setAgeDays(`${ageInDays}`);
    setAgeMonths(`${ageInMonths}`);
 }

  return (
    <main
      className={`${style} bg-white min-w-[840px] p-[56px] rounded-t-[24px] rounded-bl-[24px] rounded-br-[200px]`}
    >
      <DateForm ageCalculator={ageCalculator}/>
      <section className="flex flex-col items-start">
        <DefaultDisplay count={ageYears} label={"year"} minValue={1900} maxValue={maxYear} checkErrorOn={myYear}/>
        <DefaultDisplay count={ageMonths} label={"month"} minValue={1} maxValue={12} checkErrorOn={myMonth} />
        <DefaultDisplay count={ageDays} label={"day"} minValue={0} maxValue={31} checkErrorOn={myDay} />
      </section>
    </main>
  );
};

export default Card;
