import * as Icon from 'phosphor-react'

export const IconComponent = (props) => {
  const DynamicIcon = ({ name, size, color }) => {
    const IconComponent = Icon[name]

    if (!color) {
      return <IconComponent size={size} color="#000" />
    }

    if (!IconComponent) {
      // Return a default one
      return <Icon.Airplane size={70} />
    }

    return <IconComponent size={size} color={color} />
  }

  return (
    <>
      <DynamicIcon name={props.name} size={props.size} color={props.color} />
    </>
  )
}
