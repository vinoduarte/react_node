import { Container } from './styles.js'

export function InputNew({ icon: Icon, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <textarea  cols="40" type="text" rows="5" {...rest}></textarea>
    </Container>
  )
}