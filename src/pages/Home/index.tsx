import Header from '~/components/Header';
import Tweet from '~/components/Tweet';
import { NewTweetForm, NewTweetLabel, NewTweetButton, Separator } from './styles';

const tweets = [
  {
    id: 1,
    user: 'user',
    userName: 'Fernando',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia porro earum repellendus, neque alias ipsa voluptates quam esse quia officiis illum rem magni ea nesciunt quis molestiae suscipit! Sapiente.',
  },
  {
    id: 2,
    user: 'user',
    userName: 'Fernando',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia porro earum repellendus, neque alias ipsa voluptates quam esse quia officiis illum rem magni ea nesciunt quis molestiae suscipit! Sapiente.',
  },
];

export const Home = function HomePages() {
  return (
    <main>
      <Header title='Home' />
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

      {tweets.map(tweet => (
        <Tweet
          key={tweet.id}
          content={tweet.content}
        />
      ))}
    </main>
  );
};
