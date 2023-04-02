import Birthday from '@forms/Birthday'

interface cardProps {
    style: string
}

const roundedSmall = '24px';
const roundedBig = '200px';

const card = ({style}:cardProps) => {
  return (
    <main className={`${style} bg-white min-w-[840px] p-[56px] rounded-t-[${roundedSmall}] rounded-bl-[${roundedSmall}] rounded-br-[${roundedBig}]`}>
        <Birthday />
    </main>
  )
}

export default card