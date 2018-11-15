import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Swiper from 'react-native-swiper'

export default class IndexRecommendSlide extends React.Component {
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
      <View style={{width:'100%', height:138, marginTop:18, paddingHorizontal:8}}>
        {
          this.props.slideData.length === 0 ? null : (
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
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
    borderRadius:6,
  },
  slide: {
    marginLeft:4,
    marginRight:4,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width:'100%', height:'100%',
    borderRadius:6
  }
});
