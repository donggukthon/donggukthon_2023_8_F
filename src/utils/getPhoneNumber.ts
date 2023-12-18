export const getPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.startsWith('0508')) {
    return phoneNumber.replace(/([0-9]{4})([0-9]+)([0-9]{4})/, '$1-$2-$3')
  }
  return phoneNumber.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
}
