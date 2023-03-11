import PropTypes from 'prop-types';
import { Box, Button } from './FeedbackOptions.styled';
import shortid from 'shortid';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Box>
      {options.map(option => (
        <Button
          key={shortid.generate()}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
