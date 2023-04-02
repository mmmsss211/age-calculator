import Input from './Input'

const Birthday = () => {
  return (
    <form>
        <Input label={'day'} placeholder='dd'/>
        <Input label={'month'} placeholder='dd'/>
        <Input label={'year'} placeholder='dd'/>
    </form>
  )
}

export default Birthday