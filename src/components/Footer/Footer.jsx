import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© {new Date().getFullYear()} ShuffleTV, Inc. All Rights Reserved.</p>
  </FooterWrapper>
);

export default Footer;
