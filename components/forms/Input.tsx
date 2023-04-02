interface InputProps {
    label: string,
    placeholder: string,
}

const Input = ({label, placeholder}:InputProps) => {
  return (
    <>
    <label className="uppercase ">{label}</label>
    <input />
    </>
  )
}

export default Input