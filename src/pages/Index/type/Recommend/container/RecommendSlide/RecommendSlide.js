import React  from 'react';

import {
  Platform,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { connect } from 'react-redux'

import Swiper from 'react-native-swiper'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'

class RecommendSlide extends React.Component {
  static defaultProps = {
    slideData: []
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:168, marginTop:10}}>
        {
          this.props.slideData.length === 0 ? null : (
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                    dotStyle={{top:Platform.OS === 'ios' ? 18 : 3}}
                    activeDotStyle={{top:Platform.OS === 'ios' ? 18 : 3}}
                    dotColor={'rgba(0,0,0,0.5)'} activeDotColor={this.props.color}
                    prevButton={<SuperIcon type={'\ue8ca'} style={{fontSize:28, color:this.props.color}} />}
                    nextButton={<SuperIcon type={'\ue8cb'} style={{fontSize:28, color:this.props.color}} />} >
              {
                this.props.slideData.map((item, index) => {
                  return (
                    <View key={index} style={styles.slide}>
                      {/*<Text style={styles.img}>{ item.id }</Text>*/}
                      <Image style={styles.img} source={{uri:item.img}} />
                    </View>
                  )
                })
              }
            </Swiper>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius:6
  },
  slide: {
    marginLeft:4,
    marginRight:4,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width:'100%', height:'100%',
    borderRadius:6
  }
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(RecommendSlide);
