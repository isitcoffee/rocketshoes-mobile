import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  margin-top: 60px;
  border-radius: 4px;
  height: 700px;
  width: 350px;
`;

export const ProductImage = styled.Image`
  height: 320px;
  width: 320px;
`;

export const ProductTitle = styled.Text`
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  text-align: center;
  margin: 20px 0px;
  font-size: 70px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
