import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export default function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onIncrement = event => {
    const targetValue = event.target.id;
    switch (targetValue) {
      case 'good':
        setGood((good += 1));
        break;
      case 'neutral':
        setNeutral((neutral += 1));
        break;
      case 'bad':
        setBad((bad += 1));
        break;
      default:
        return;
    }
  };

  const onTotal = () => {
    return good + neutral + bad;
  };

  const onPositivePercentage = () => {
    let percent = 0;
    if (good === 0) {
      return percent;
    } else {
      percent = Math.round((good / onTotal()) * 100);
      return percent;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onIncrement} />
        {onTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={onTotal()}
            positivePercentage={onPositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
}
