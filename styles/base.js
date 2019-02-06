import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#0077B5',
  secondary: '#00A0DC',
  tertiary: '#8D6CAB',
  alert: '#DD5143',
  warning: '#E68523'
}

export const text = {
  title: '#313335',
  subtitle: '#86888A',
  normal: '#000000'
}

export const boldWeight = 'bold';

export const background = {
  box: '#FFFFFF',
  primary: '#CACCCE'
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
}