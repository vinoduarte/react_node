import { Container } from './styles.js'
import { IoAdd } from "react-icons/io5";


export function ButtonHome({ title, loading = false, ...rest }) {
  var title
  return (
    <Container 
     type="button" 
     disabled={loading}
    {...rest}
    >
      <IoAdd id="AddSign"></IoAdd>
      { loading ? 'Carregando...' : title }
    </Container>
  )
}