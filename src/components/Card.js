import { StyledCard } from "./styles/Card.styled";

export const Card = ({ id, title, body, img }) => {
  return (
    <StyledCard layout={id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${img}`} alt="" />
      </div>
    </StyledCard>
  );
};
