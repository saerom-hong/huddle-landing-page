import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 60px 0 20px;

  ul {
    list-style-type: none;
    margin: 20px 20px 20px 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
