import { Container } from './styles.js'
import { IoAdd } from "react-icons/io5";


export function Buttons({ title, icon: Icon, onClick, loading = false, ...rest }) {
  var title
  return (
    <Container 
     type="button" 
     disabled={loading}
     onClick={onClick}
    {...rest}
    >
      { loading ? 'Carregando...' : title }
      {Icon && <Icon size={20}/>}
    </Container>
  )
}