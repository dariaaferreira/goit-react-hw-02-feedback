import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {

    const countTotalFeedback = ({ good, neutral, bad }) => {
        return good + neutral + bad;
    };
    
    const countPositiveFeedbackPercentage = ({ good }) => {
        const total = countTotalFeedback({ good, neutral, bad });
        return total ? Math.round((good / total) * 100) : 0;
    };

    const totalFeedback = countTotalFeedback({ good, neutral, bad });
    const positivePercentage = countPositiveFeedbackPercentage({ good, neutral, bad });
    const options = ['good', 'neutral', 'bad'];

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
            </Section>

            <Section title="Statistics">
                {totalFeedback ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positivePercentage}
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
