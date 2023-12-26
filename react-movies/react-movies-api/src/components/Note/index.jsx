import { Container } from "./styles";
import { Tag } from "../tag";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="rating">{data.rating}<AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div>
      <p className="description">{data.textPreview}</p>
      {data.tags && 
        <footer>
          {data.tags.map( tag => <Tag key={tag.id} title={tag.name}/>)}
        </footer>
      }
    </Container>
  );
}
