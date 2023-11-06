import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 30%;
  margin-top: 1rem;
`;

const CardImageContainer = styled.div`
  min-height: 150px;
  max-height: 490px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #000;
  border-bottom: none;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  background-color: #fff;
`;

const CardBody = styled.div`
  background-color: #fff;
  border: 1px solid #000;
`;

const CardBodyTitle = styled.div`
  background-color: inherit;
  padding: 0.2rem 0.8rem;
`;

const CardBodyAuthor = styled.div`
  background-color: inherit;
  padding: 0.2rem 0.8rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;
const CardFooterButton = styled.button`
  background-color: #774836;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #2980b9;
  }
`;

function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={book.imageSrc} alt={book.title} />
      </CardImageContainer>
      <CardBody>
        <CardBodyTitle>{book.title}</CardBodyTitle>
        <CardBodyAuthor>{book.author}</CardBodyAuthor>
      </CardBody>
      <CardFooter>
        <CardFooterButton
        //  onClick={() => {ㅌ
        //   navigate(`/book-request/detail/${book.id}`)
        // }}
        >
          {/* 시연용 주소값 하드코딩 */}
          <Link
            to="/booksale"
            style={{ textDecoration: "none", color: "white" }}
          >
            상세조회
          </Link>
        </CardFooterButton>
        <CardFooterButton
          onClick={() => {
            navigate(`/book-request/bid/${book.id}`);
          }}
        >
          응찰참여
        </CardFooterButton>
      </CardFooter>
    </CardContainer>
  );
}

export default BookCard;
