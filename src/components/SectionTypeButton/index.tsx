import React from 'react'; 
import { TouchableOpacityProps } from 'react-native';
//import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container, 
  Icon,
  Title, 
} from './styles';

const icons = {
  question: 'help-circle',
  tip: 'message-circle',
}

interface Props extends TouchableOpacityProps {
  type: 'question' | 'tip';
  title: string;
  isActive: boolean;
}

export function SectionTypeButton({ 
  type,
  title,
  isActive, 
  ...rest 
}: Props) {
  return (
    <Container 
      type={type}
      isActive={isActive} 
      {...rest} 
    >
      <Icon 
        name={icons[type]} 
        type={type}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}