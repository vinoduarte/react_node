import { Container } from './styles.js'
import { RiArrowLeftLine } from 'react-icons/ri'

export function Return({ title, ...rest }) {
  return(
    <Container {...rest}>
      <RiArrowLeftLine />
      { title ? title : "Voltar" }    
    </Container>
  )
}