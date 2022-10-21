import styled from "styled-components";

export const Span = styled.span`
  flex: 1;
  font-size: 1.3rem;
  letter-spacing: 1.2px;
  font-family: "Roboto Mono";
  color: #000;
  font-weight: 600;
  text-transform: capitalize;
  text-decoration: ${(props) => props.isComplete && "line-through"};
`;
