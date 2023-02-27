import { useState } from 'react';
import Header from '~/components/Header';
import Tweet from '~/components/Tweet';
import { NewTweetForm, NewTweetLabel, NewTweetButton, Separator } from './styles';
import type { FormEvent } from 'react';

export const Home = function HomePages() {
  const [tweets, setTweets] = useState([
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
  ]);

  const [newTweet, setNewTweet] = useState('');

  function createNewTweet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTweets([
      ...tweets,
      {
        id: Math.floor(Math.random() * 999),
        user: 'user',
        userName: 'Fernando',
        content: newTweet,
      },
    ]);
    setNewTweet('');
  }

  return (
    <main>
      <Header title='Home' />
      <NewTweetForm onSubmit={createNewTweet}>
        <NewTweetLabel htmlFor='tweet'>
          <img
            src='https://github.com/fernandoprestes.png'
            alt='avatar user'
          />
          <textarea
            id='tweet'
            placeholder="What's happening"
            value={newTweet}
            onChange={event => setNewTweet(event.target.value)}
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
