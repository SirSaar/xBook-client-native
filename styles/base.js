import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const brandColor  = {
  primary: '#0077B5', //dark blue
  secondary: '#00A0DC', //light blue
  tertiary: '#8D6CAB', //purple
  alert: '#DD5143', //red
  warning: '#E68523' //orange
}

export const textColor = {
  title: '#313335', //dark grey
  subtitle: '#86888A', //medium grey
  normal: '#000000' //black
}

export const boldWeight = 'bold';

export const layoutColor = {
  box: '#FFFFFF', //white
  background: '#f6f6f6', //light grey
  border: '#dddddd'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const textSize = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 18,
  brand: 36,
}

export const textStyles = StyleSheet.create({
  brandTitle: { fontSize: textSize.brand, fontWeight: 'bold', color: 'white' ,textAlign: 'center', },
  header: { fontSize: textSize.xl, fontWeight: 'normal', color: textColor.title  },
  title: { fontSize: textSize.lg, fontWeight: boldWeight, textAlign: 'center', color: textColor.title },
  subtitle: { fontSize: textSize.md, textAlign: 'center', color: textColor.subtitle },
  normal: {fontSize: textSize.md, color: textColor.normal}
});

export const cardTextStyles = StyleSheet.create({
  title: { fontSize: textSize.xl, fontWeight: boldWeight, textAlign: 'center', color: textColor.title },
  subtitle: { fontSize: textSize.lg, textAlign: 'center', color: textColor.subtitle },
})