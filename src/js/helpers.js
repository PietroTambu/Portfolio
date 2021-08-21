import emailjs from 'emailjs-com'

const helpers = {
  sendEmail: async function (serviceID, templateID, templateParams, userID) {
    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID)
      console.log('SUCCESS!', response.status, response.text)
      return true
    } catch (e) {
      console.log('FAILED...', e)
      return false
    }
  }
}

export default helpers
