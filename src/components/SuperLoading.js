import React  from 'react';

import Spinner from 'react-native-spinkit'

import { connect } from 'react-redux'

/**
 * 加载loading组件
 */
class SuperLoading extends React.Component {
  static defaultProps = {
    seconds: 35,
    size: 100,
    type: 'Wave', // 'CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'
    isVisible: true
  };

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return <Spinner style={this.props.style} isVisible={this.props.isVisible} size={this.props.size} type={this.props.type} color={this.props.color} />
  }
}

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SuperLoading);
