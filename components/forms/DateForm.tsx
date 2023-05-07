import Birthday from "@forms/Birthday";
import Line from "@misc/Line";
import Default from "@buttons/Default";
import { useStore } from "@store/store";
import { use, useState } from "react";

interface Values {
    year?: number;
    month?: number;
    day?: number;
    ageCalculator: any;
    clicked?: boolean;
    setClicked?: any;
}

const DateForm = ({ageCalculator, clicked, setClicked}:Values) => {
  // Values for the date
  const [myYear, updateMyYear] = useStore((state) => [state.myYear, state.updateMyYear]);
  const [myMonth, updateMyMonth] = useStore((state) => [state.myMonth, state.updateMyMonth]);
  const [myDay, updateMyDay] = useStore((state) => [state.myDay, state.updateMyDay]);

  // Track if button has been clicked

  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setClicked(true);
    console.log(myDay, myMonth, myYear);
    ageCalculator();
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <Birthday clicked={clicked} />
          <mark className="flex flex-row items-center bg-transparent">
            <Line />
            <Default handleSubmit={handleSubmit}/>
          </mark>
        </form>
    </>
  );
};

export default DateForm;
