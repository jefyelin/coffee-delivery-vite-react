type ThemeColor = {
  base: {
    title: string
    subtitle: string
    text: string
    label: string
    hover: string
    button: string
    input: string
    card: string
    background: string
    white: string
  }
  product: {
    yellow: string
    yellowLight: string
    yellowDark: string
    purple: string
    purpleLight: string
    purpleDark: string
  }
}

export type Theme = {
  color: ThemeColor
}
