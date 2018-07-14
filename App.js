import React  from 'react'
import { StyleSheet, Text, View, Switch, TouchableHighlight } from 'react-native'

import MyButton from './src/components/MyButton.js'

export default class App extends React.Component {
  state = {
    likes: 0
  }

  onPressButton = () => {
    const { likes } = this.state
    this.setState({
      likes: likes + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>Hello React Native!</Text>
        <TouchableHighlight onPress={this.onPressButton}>
          <Text>Button</Text>
        </TouchableHighlight>
        <Text>点击次数: {this.state.likes}</Text>

        <Switch value={true}/>

        {/*<MyButton/>*/}
        <MyButton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
