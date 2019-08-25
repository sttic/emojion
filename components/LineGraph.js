import React from 'react';
import PureChart from 'react-native-pure-chart';

export function LineGraph(props) {
  return (
    <PureChart
      data={props.data}
      type='line'
      numberOfYAxisGuideLine={1}
      height={256}
    />
  );
}

export default LineGraph;
