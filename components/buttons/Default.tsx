import Image from 'next/image'
import arrowDown from '@assets/card/arrowDown.svg'

interface submit {
  handleSubmit?: any;
  setDay?: number;
  setMonth?: number;
  setYear?: number;
}

const Default = ({handleSubmit, setDay, setMonth, setYear}:submit) => {
  return (
    <button className='w-[96px] h-[96px] bg-[#854DFF] rounded-full flex flex-row justify-center items-center shrink-0 hover:bg-[#151515] cursor-pointer' type='submit'>
        <Image src={arrowDown} alt="Arrow Down" width={44} height={44}/>
    </button>
  )
}

export default Default