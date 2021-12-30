import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-item: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 80px 0;
  padding: 40px;
  flex-direction: ${({ layout }) => layout};
  font-size: 18px;

  img {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`;
