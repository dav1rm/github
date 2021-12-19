import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 183px;
  padding: 24px 20px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: 'Mulish-Bold';
  font-size: 16px;
  line-height: 20px;
  margin-right: 8px;
  color: #000;
`;

export const Description = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 14px;
  line-height: 17.5px;
  color: #000;
`;

export const Label = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;
  line-height: 15px;
  margin-left: 4px;
  color: #7e7e7e;
`;

export const Header = styled.View`
  margin-bottom: 8px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

interface FooterItemProps {
  isLast?: boolean;
}
export const FooterItem = styled.View<FooterItemProps>`
  flex-direction: row;
  margin-right: ${({ isLast }) => (isLast ? 0 : 16)}px;
`;

export const TagList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const TagContainer = styled.View`
  height: 20px;
  padding: 3px 16px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const TagText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;
  line-height: 15px;
`;
