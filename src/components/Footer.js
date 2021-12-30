import { SocialIcon } from "./SocialIcon";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.svg" alt="" />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We DO</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          {/* social icons */}
          <SocialIcon />
        </Flex>
        <p>© Copyright 2021 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};
