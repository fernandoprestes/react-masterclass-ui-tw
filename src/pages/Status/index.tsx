import { PaperPlaneRight } from 'phosphor-react';
import { useState } from 'react';
import Header from '~/components/Header';
import Tweet from '~/components/Tweet';
import { AnswerTweetForm, AnswerTweetLabel, AnswerTweetButton, Separator } from './styles';
import type { FormEvent } from 'react';

export const Status = function StatusPages() {
  const [answers, setAnswers] = useState([
    {
      id: 1,
      content: 'lorem ipson',
    },
    {
      id: 2,
      content: 'lorem ipson',
    },
    {
      id: 3,
      content: 'lorem ipson',
    },
  ]);
  const [newAnswers, setNewAnswers] = useState('');

  function createNewAnswers(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAnswers([
      {
        id: Math.floor(Math.random() * 999),
        content: newAnswers,
      },
      ...answers,
    ]);
    setNewAnswers('');
  }

  return (
    <main>
      <Header title='Tweet' />
      <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi ullam repudiandae alias ipsa doloribus eligendi. Earum adipisci magnam ex dignissimos itaque eos et expedita facilis voluptatum ipsam, suscipit rerum!' />

      <Separator />
      <AnswerTweetForm onSubmit={createNewAnswers}>
        <AnswerTweetLabel htmlFor='tweet'>
          <img
            src='https://github.com/fernandoprestes.png'
            alt='avatar user'
          />
          <textarea
            id='tweet'
            placeholder='Tweet your answer'
            value={newAnswers}
            onChange={event => setNewAnswers(event.target.value)}
          />
        </AnswerTweetLabel>
        <AnswerTweetButton type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </AnswerTweetButton>
      </AnswerTweetForm>

      {answers.map(answer => (
        <Tweet
          key={answer.id}
          content={answer.content}
        />
      ))}
    </main>
  );
};
