import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45px;
  width: 100%;
  flex-direction: row;
  padding: 15px;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckinNumber = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const CheckinTime = styled.Text`
  font-size: 14px;
  color: #666;
`;
