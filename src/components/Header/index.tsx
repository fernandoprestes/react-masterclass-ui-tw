import { Sparkle } from 'phosphor-react';
import { TimeLineHeader } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <TimeLineHeader>
      {title}
      <Sparkle />
    </TimeLineHeader>
  );
}
