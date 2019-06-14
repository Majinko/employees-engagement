import Typography from '@material-ui/core/Typography';
import React from 'react';
import Chart from '../components/Chart';
import FeedbackCard from '../components/FeedbackCard';
import PaperCard from '../components/PaperCard';
import ProfileInfo from '../components/ProfileInfo';

const FullWidthTabs = () => {
  return (
    <React.Fragment>
      {/* TODO: fetch data from backend */}
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
      {/* TODO: fetch data from backend */}
      <FeedbackCard
        name="Jozef Úroda"
        timeStamp="May 12th, 2019 9:01pm"
        hasArrow
      />
    </React.Fragment>
  );
};

export default FullWidthTabs;
