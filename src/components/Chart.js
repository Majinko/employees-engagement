import React from 'react';
import PropTypes from 'prop-types';

import ReactApexChart from 'react-apexcharts';

import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchAspects } from './../actions/aspectActions';

import { primaryColor } from './../config';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          'Excellent communication',
          'Extraordinary creativity',
          'Goal-oriented',
          'Effective cooperation',
          'Precise planning',
          'There was more',
        ],
        tooltip: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 0.5,
          colors: [primaryColor],
        },
        stroke: {
          colors: [primaryColor],
        },
        markers: {
          colors: primaryColor,
          strokeColor: '#fff',
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
      },
      series: [
        {
          data: [80, 50, 30, 40, 100, 5],
        },
      ],
    };
  }

  componentWillMount() {
    this.props.fetchAspects();
  }

  // TODO: fetch rating from backend
  // componentDidUpdate(prevProps) {
  //   const { aspects } = this.props;

  //   const aspectNames = [];
  //   const aspectRatings = [];

  //   aspects.forEach(aspect => {
  //     const { text, rating } = aspect;

  //     aspectNames.push(text);
  //     aspectRatings.push(rating);
  //   });

  //   if (aspects !== prevProps.aspects) {
  //     this.setState({
  //       options: { labels: aspectNames },
  //       series: [{ data: aspectRatings }],
  //     });
  //   }
  // }

  render() {
    const { options, series } = this.state;

    if (this.props.aspects.length !== 0) {
      return (
        <ReactApexChart
          options={options}
          series={series}
          type="radar"
          height="350"
        />
      );
    }

    return <CircularProgress />;
  }
}

Chart.propTypes = {
  fetchAspects: PropTypes.func,
  aspects: PropTypes.array,
};

const mapStateToProps = state => ({
  aspects: state.aspects.aspects,
});

export default connect(
  mapStateToProps,
  { fetchAspects }
)(Chart);
