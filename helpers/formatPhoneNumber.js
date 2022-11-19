export default function formatPhoneNumber(phoneNumber) {
  var cleaned = ('' + phoneNumber).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
  if (match) {
    return '' + match[3] + ' ' + match[2] + ' ' + match[1];
  }
  return null;
}
