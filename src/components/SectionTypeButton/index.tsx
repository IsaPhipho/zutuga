import React from 'react'; 
import { TouchableOpacityProps } from 'react-native';

import { 
  Container, 
  Icon,
  Title, 
} from './styles';

const icons = {
  question: 'comment-question-outline',
  listQuestion: 'comment-text-multiple',
  tip: 'lightbulb-outline',
  listTip: 'lightbulb-multiple-outline'
}

interface Props extends TouchableOpacityProps {
  type: 'question' | 'tip' | 'listQuestion' | 'listTip';
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