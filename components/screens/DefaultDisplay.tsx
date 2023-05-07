interface defaultDisplayProps {
  count: any;
  label: string;
  minValue: number;
  maxValue: number;
  checkErrorOn: number;
  clicked?: boolean;
}

const DefaultDisplay = ({ count, label, minValue, maxValue, checkErrorOn, clicked }: defaultDisplayProps) => {
  return (
    <>
      <section className="font-extrabold italic text-[#151515] text-[104px] flex flex-row items-start gap-2 leading-[110%]">
        {/* {clicked && (count < minValue || count > maxValue) ? 
          <span className="text-[#854DFF]">{count === 0 || isNaN(count) ? '- -' : count }</span> : 
          <span className="text-[#FF5959]">{count === 0 || isNaN(count) ? '- -' : count }</span>
        } */}
        <span className="text-[#854DFF]">{!clicked && (count === 0 || isNaN(count) || count === "") ? '- -' : count }</span>
        <span>{label}{count > 1 ? 's' : ''}</span>
      </section>
    </>
  );
};

export default DefaultDisplay;
