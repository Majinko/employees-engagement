import Typography from '@material-ui/core/Typography';
import React from 'react';
import Chart from '../components/Chart';
import FeedbackCard from '../components/FeedbackCard';
import PaperCard from '../components/PaperCard';
import ProfileInfo from '../components/ProfileInfo';

const FullWidthTabs = () => {
  return (
    <React.Fragment>
      <ProfileInfo name="Linda Krásna" position="Project Lead" />
      <Typography variant="h3" gutterBottom>
        My attribute feedback:
      </Typography>
      <PaperCard>
        <Chart />
      </PaperCard>
      <Typography variant="h3" gutterBottom style={{ marginTop: 32 }}>
        Received feedback:
      </Typography>
      <FeedbackCard
        name="Jozef Úroda"
        timeStamp="May 12th, 2019 9:01pm"
        hasArrow
      />
      <FeedbackCard
        name="Marián Galbavý"
        timeStamp="May 11th, 2019 12:48pm"
        hasArrow
      />
      <FeedbackCard
        name="Branislav Pepper"
        timeStamp="May 11th, 2019 9:01am"
        hasArrow
      />
      <FeedbackCard
        name="Linda Krásna"
        timeStamp="May 2nd, 2019 9:30am"
        hasArrow
      />
    </React.Fragment>
  );
};

export default FullWidthTabs;
