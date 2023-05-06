import Input from "./Input";
import { useStore } from "@store/store";

interface BirthdayProps {
  updateMyYear?: any;
  updateMyMonth?: any;
  updateMyDay?: any;
  clicked?: boolean;
}

const Birthday = ({clicked}:BirthdayProps) => {

  const [myYear, updateMyYear] = useStore((state) => [state.myYear, state.updateMyYear]);
  const [myMonth, updateMyMonth] = useStore((state) => [state.myMonth, state.updateMyMonth]);
  const [myDay, updateMyDay] = useStore((state) => [state.myDay, state.updateMyDay]);

  // Make sure the user can't select a year that's in the future
  const maxYear = new Date().getFullYear() - 1;
  const minYear = 1900;

  // Make sure the user can't select a month that's in the future
  const maxMonth = 12;
  const minMonth = 1;

  // Make sure the user can't select a day that's in the future
  const maxDay = 31;
  const minDay = 1;

  return (
    <>
      <main className="flex flex-row items-start gap-8 p-0">
        <Input label={"day"} placeholder="DD" id="day" date={myDay} setDate={updateMyDay} min={minDay} max={maxDay} maxLength={2} clicked={clicked}/>
        <Input label={"month"} placeholder="MM" id="month" date={myMonth} setDate={updateMyMonth} min={minMonth} max={maxMonth} maxLength={2} clicked={clicked}/>
        <Input label={"year"} placeholder="YYYY" id="year" date={myYear} setDate={updateMyYear} min={minYear} max={maxYear} maxLength={4} clicked={clicked}/>
      </main>
    </>
  );
};

export default Birthday;