interface defaultDisplayProps {
  count: any;
  label: string;
  minValue: number;
  maxValue: number;
  checkErrorOn: number;
}

const DefaultDisplay = ({ count, label, minValue, maxValue, checkErrorOn }: defaultDisplayProps) => {
  return (
    <>
      <section className="font-extrabold italic text-[#151515] text-[104px] flex flex-row items-start gap-2 leading-[110%]">
        <span className="text-[#854DFF]">{count === 0 ? '- -' : count}</span>
        <span>{label}{count > 1 ? 's' : ''}</span>
      </section>
    </>
  );
};

export default DefaultDisplay;
