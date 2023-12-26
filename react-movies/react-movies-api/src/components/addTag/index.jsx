import { Container } from './styles.js'
import { IoAdd, IoClose } from 'react-icons/io5';


export function AddTag({ isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input
      type='text'
      value={value}
      readOnly={!isNew}
      {...rest}
      />

      <button
      type='button'
      onClick={onClick}
      >
        {isNew ? <IoAdd></IoAdd> : <IoClose></IoClose>}
      </button>
    </Container>
  )
}