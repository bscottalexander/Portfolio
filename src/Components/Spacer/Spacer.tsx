import styled from "styled-components";


type SpacerProps = {
    width?: number;
    height?: number;
}

const Spacer = styled.div`
    width: ${(props: SpacerProps) => `${props.width}px` ?? 'unset'};
    height: ${(props: SpacerProps) => `${props.height}px` ?? 'unset'};
`;

export default Spacer;