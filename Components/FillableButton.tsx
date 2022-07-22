import {useState} from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type propsType = {
  onPress: () => any
  emptyIconStyle: keyof typeof Ionicons.glyphMap
  filledIconStyle: keyof typeof Ionicons.glyphMap
  emptyIconColor?: string
  filledIconColor: string
}

function FillableButton({onPress, emptyIconStyle, filledIconStyle, filledIconColor, emptyIconColor = '#444'}: propsType) {
  const [iconStyle, setIconStyle]: [typeof filledIconStyle | typeof emptyIconStyle, any] = useState(emptyIconStyle)
  const [iconColor, setIconColor]: [typeof filledIconColor | typeof emptyIconColor, any] = useState(emptyIconColor)

  function switchStarStyle() {
    setIconStyle(iconStyle === emptyIconStyle ? filledIconStyle : emptyIconStyle);
    setIconColor(iconColor === emptyIconColor ? filledIconColor : emptyIconColor);
    onPress();
  }

  return (
    <Pressable onPress={switchStarStyle} style={ ({pressed}) => pressed && styles.pressed }>
      <Ionicons name={iconStyle} size={24} color={iconColor} />
    </Pressable>
  );
}

export function StarButton({onPress}: {onPress: () => any}) {
  return FillableButton({
    onPress: onPress,
    emptyIconStyle: 'star-outline',
    filledIconStyle: 'star',
    filledIconColor: 'gold',
  })
}

export function HeartButton({onPress}: {onPress: () => any}) {
  return FillableButton({
    onPress: onPress,
    emptyIconStyle: 'heart-outline',
    filledIconStyle: 'heart',
    filledIconColor: 'red',
  })
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
})