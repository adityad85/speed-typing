import styled from 'styled-components';

const ProgressState = styled.div`
  position: relative;
  padding: 2%;
  text-align: center;
  margin: 30px auto;
  padding: auto;
  height: 30vh;
  width: 42vw;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

  background-color: #212121;
  color: #ecf0f1;

  transition: background-color .3s;
`;

export default ProgressState;
