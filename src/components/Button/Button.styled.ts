import styled from "styled-components";

export const CastomButton = styled.button<{
  border: number;
  border_color: string;
  border_radius: number;
  hover_bg: string;
  bg: string;
  width: string;
  padding: string;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => props.padding};
  gap: 10px;
  border: ${(props) => props.border}px solid ${(props) => props.border_color};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius}%;
  color: #42567a;
  font-family: "PT Sans";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => props.width};
  transition: all 0.3s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  opacity: ${(props) => (props.disabled ? "0.5" : null)};

  &:hover {
    background: ${(props) => props.hover_bg};
  }
`;
