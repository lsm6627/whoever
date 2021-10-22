import styled from 'styled-components';

export const Maindiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 70vw;
  height: 92%;
`;

export const ListmenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  border-bottom: solid 3px black;
  margin-bottom: 4px;
  font-size: 25px;
`;
export const ListdivBox = styled.div`
  width: 100%;
`;

export const WritiBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 14px 0;
`;
export const WritiBtn = styled.span`
  /* cursor: pointer; */
  border: solid 5px #ffad4999;
  border-radius: 10px;
  font-family: 'Mikado';
  margin: 8px 0;
  font-size: 20px;
  padding: 6px;
`;

export const PagenumBox = styled.div`
  border: solid 1px orange;
  width: 100%;
  /* margin-top: 30px; */
  text-align: center;
`;
