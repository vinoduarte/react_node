import { Container } from './styles.js'

export function Tag({ title, icon: Icon, ...rest }) {
  return(
    <Container {...rest}>
      {title}
      {Icon && <Icon size={20}/>}
    </Container>
  )
}