import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {

    function countTotalFeedback() {
        return good + neutral + bad;
      }
      
      function countPositiveFeedbackPercentage() {
        const total = countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
      }

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                options={['good', 'neutral', 'bad']} 
                onLeaveFeedback={onLeaveFeedback} />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </>
    );
};

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
