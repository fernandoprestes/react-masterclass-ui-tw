import Header from '~/components/Header';
import Tweet from '~/components/Tweet';
import { AnswerTweetForm, AnswerTweetLabel, AnswerTweetButton, Separator } from './styles';

const answers = [
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
];

export const Status = function StatusPages() {
  return (
    <main>
      <Header title='Tweet' />
      <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi ullam repudiandae alias ipsa doloribus eligendi. Earum adipisci magnam ex dignissimos itaque eos et expedita facilis voluptatum ipsam, suscipit rerum!' />

      <Separator />
      <AnswerTweetForm>
        <AnswerTweetLabel htmlFor='tweet'>
          <img
            src='https://github.com/fernandoprestes.png'
            alt='avatar user'
          />
          <textarea
            id='tweet'
            placeholder='Tweet your answer'
          />
        </AnswerTweetLabel>
        <AnswerTweetButton type='submit'>Answer</AnswerTweetButton>
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
