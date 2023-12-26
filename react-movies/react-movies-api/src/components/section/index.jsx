import { Container } from './styles.js'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { LuClock3 } from 'react-icons/lu'

export function Section({ title, children }) {
  return(
    <Container>
      <div id="titleAll">
      <h2>{title}<div id="stars"><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiOutlineStar className='star'/></div>
      </h2>
      <div id="titleCreationData">
        <div id="creator">
         <img src="https://github.com/vinoduarte.png"></img>
         <a>Por Vinicius Duarte</a>
        </div>
        <div id="createdAt">
          <LuClock3/>23/05/23 às 08:00
        </div>
      </div>
      </div>
      {children}
    </Container>
  )
}