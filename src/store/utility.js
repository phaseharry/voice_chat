export const getInitials = name => {
  return name.split(' ').reduce((initals, name) => {
    return initals + name[0].toUpperCase()
  },'')
}