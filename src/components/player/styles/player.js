import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50vh;
  transform: translate(0, -50%);
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  height: 100%;
`;

export const Controls = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgb(0, 0, 0, 1),
    rgb(0, 0, 0, 0.4),
    rgb(0, 0, 0, 0.3),
    rgb(0, 0, 0, 0.2),
    rgb(0, 0, 0, 0.3),
    rgb(0, 0, 0, 0.4),
    rgb(0, 0, 0, 1)
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
