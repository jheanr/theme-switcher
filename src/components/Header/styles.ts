import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  height: 60px;
  padding: 0 30px;

  align-items: center;
  display: flex;
  justify-content: space-between;
`;