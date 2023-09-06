import styled from "styled-components";

interface FlexPropsInterface {
  width?: string;
  minWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
  overflowX?: string;
  position?: string;
  flexDirection?: string;
  bacgroundSize?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
  display: flex;

  width: ${(props) => props.width || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "start"};
  background: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  gap: ${(props) => props.gap || "0"};
  position: ${(props) => props.position || "auto"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;