import { Sparkle } from 'phosphor-react';
import { TimeLineHeader, NewTweetForm, NewTweetLabel, NewTweetButton, Separator } from './styles';

export const Home = function HomePages() {
  return (
    <main>
      <TimeLineHeader>
        Home
        <Sparkle />
      </TimeLineHeader>

      <NewTweetForm>
        <NewTweetLabel htmlFor='tweet'>
          <img
            src='https://github.com/fernandoprestes.png'
            alt='avatar user'
          />
          <textarea
            id='tweet'
            placeholder="What's happening"
          />
        </NewTweetLabel>
        <NewTweetButton type='submit'>Tweet</NewTweetButton>
      </NewTweetForm>
      <Separator />
    </main>
  );
};
