import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: auto;
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HelpsAnswer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AnswerText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#999')};
`;

export const HelpsTime = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const HelpsText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 15px;
`;
