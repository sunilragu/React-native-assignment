import React from 'react';
import { View } from 'react-native';

const flex = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ flex: 1,backgroundColor:'red' }}>
      <View style={{ flex: 0.2, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 0.3, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 0.1, backgroundColor: 'steelblue' }} />
    </View>
  );
}
export default flex;
 