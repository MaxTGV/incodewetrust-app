import styled from "styled-components";

const StyledButton = styled.button`
  width: 268px;
  height: 40px;
  margin: 0px 0px 27px 16px;
  background-color: rgba(0, 168, 150, 1);
  border-radius: 16px;
  color: white;
  font-weight: 800;
  font-size: 16px;
  text-transform: none;
  &:hover {
    background-color: #009485;
    color: white;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
      0px 0px 2px rgba(75, 75, 124, 0.2);
  }
  &:active {
    background: #009485;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    background-color: #e1e1ed;
    color: #8181b1;
    opacity: 0.8;
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
