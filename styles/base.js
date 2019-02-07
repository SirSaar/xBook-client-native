import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#0077B5', //dark blue
  secondary: '#00A0DC', //light blue
  tertiary: '#8D6CAB', //purple
  alert: '#DD5143', //red
  warning: '#E68523' //orange
}

export const text = {
  title: '#313335', //dark grey
  subtitle: '#86888A', //medium grey
  normal: '#000000' //black
}

export const boldWeight = 'bold';

export const layout = {
  box: '#FFFFFF', //white
  primary: '#f6f6f6', //light grey
  border: '#dddddd'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 18,
}

export const baseStyles = StyleSheet.create({
  header: { fontSize: fonts.xl, fontWeight: 'normal', color: text.title  },
  title: { fontSize: fonts.lg, fontWeight: boldWeight, textAlign: 'center', color: text.title },
  subtitle: { fontSize: fonts.md, textAlign: 'center', color: text.subtitle },
  normal: {fontSize: fonts.md, color: text.normal}
})