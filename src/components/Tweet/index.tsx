import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import { TweetContainer, TweetContent, TweetContentButton, TweetContentFooter, TweetContentHeader } from './styles';

interface TweetProps {
  content: string;
}

export default function Tweet({ content }: TweetProps) {
  return (
    <TweetContainer to='/status'>
      <img
        src='https://github.com/fernandoprestes.png'
        alt='avatar user'
      />
      <TweetContent>
        <TweetContentHeader>
          <strong>Fernando prestes</strong>
          <span>@user</span>
        </TweetContentHeader>
        <p>{content}</p>
        <TweetContentFooter>
          <TweetContentButton type='button'>
            <ChatCircle />
            14
          </TweetContentButton>
          <TweetContentButton type='button'>
            <ArrowClockwise />
            10
          </TweetContentButton>
          <TweetContentButton type='button'>
            <Heart />
            16
          </TweetContentButton>
        </TweetContentFooter>
      </TweetContent>
    </TweetContainer>
  );
}
