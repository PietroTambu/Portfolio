<template>
  <div class="div-contacts">
    <b-row style="height: 200px" align-v="center">
      <b-col>
        <span class="text-show-form" @click="openDialog(1)"><b-icon-envelope></b-icon-envelope> Email</span> |
        <span class="text-show-form" @click="openDialog(2)">Compile form Here</span> |
        <span class="text-show-form" @click="openDialog(3)">Whatsapp <b-img class="opacity-50" :src="getImage('Whatsapp-Logo', 'svg')" height="16"></b-img></span>
      </b-col>
    </b-row>
    <!-- form dialog -->
    <vs-dialog blur prevent-close v-model="activeDialog" ref="content">
      <template #header>
        <h2 class="not-margin"><b>Contact me</b></h2>
      </template>
      <div>
        <vs-pagination v-model="current" :length="3" not-arrows color='#8d959d'/>
      </div>
      <div v-if="current === 1">
        <vs-button class="mx-auto my-5" href="mailto:pietro.tambu2003@gmail.com" blank color='#17a2b8' gradient>Send me a Email</vs-button>
      </div>
      <div v-if="current === 2">
        <div>
          <p class="not-margin">Please, fill the form then press send message</p>
        </div>
        <div class="con-form">
          <vs-input class="mb-3" type="text" v-model="templateParams.name" placeholder="Name" :state="variantInputName" block>
            <template #icon><b-icon-person></b-icon-person></template>
          </vs-input>
          <vs-input class="mb-3" type="email" v-model="templateParams.email" placeholder="Email" :state="variantInputEmail" block>
            <template #icon>@</template>
          </vs-input>
          <div>
            <textarea class="textarea is-info" v-model="templateParams.message" placeholder="Your message..."></textarea>
          </div>
          <vs-alert class="my-1" v-model="alertTextarea" danger>
              This field can not be empty
          </vs-alert>
        </div>
        <vs-button class="mx-auto" @click="sendEmail" color='#17a2b8' gradient block>Send Message</vs-button>
      </div>
      <div v-if="current === 3">
        <b-img class="my-4" :src="getImage('Whatsapp-Logo-Color', 'svg')" height="56"></b-img>
        <h4 class="mb-5">+39 392 609 0757</h4>
      </div>
      <template #footer>
        <div class="footer-dialog">
          <div class="new mt-0">Thank you, I will reply as soon as possible</div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import helpers from '../js/helpers'

export default {
  name: 'Contacts',
  data: function () {
    return {
      activeDialog: false,
      showAlertEmail: true,
      variantInputName: 'light',
      variantInputEmail: 'light',
      alertTextarea: false,
      current: 1,
      templateParams: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async sendEmail () {
      let status = true
      const loading = this.$vs.loading({ target: this.$refs.content })
      if (this.templateParams.name === '') {
        this.variantInputName = 'danger'
        status = false
      } else {
        this.variantInputName = 'success'
      }
      if (this.templateParams.message === '') {
        this.alertTextarea = true
        status = false
      } else {
        this.alertTextarea = false
      }
      if (!this.validEmail()) {
        this.variantInputEmail = 'danger'
        status = false
      } else {
        this.variantInputEmail = 'success'
      }
      if (status === true) {
        const sent = await helpers.sendEmail(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, this.templateParams, process.env.VUE_APP_USER_ID)
        if (sent) {
          this.activeDialog = false
          this.templateParams.name = ''
          this.templateParams.email = ''
          this.templateParams.message = ''
          loading.close()
          this.openNotificationSuccessForm()
        } else {
          loading.close()
          this.activeDialog = false
          this.openNotificationErrorForm()
        }
      } else {
        loading.close()
      }
    },
    getImage (name, extension) {
      return require('@/assets/' + name + '.' + extension)
    },
    validEmail () {
      return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.templateParams.email) && this.templateParams.email !== '')
    },
    openNotificationErrorForm () {
      this.$vs.notification({
        duration: '10000',
        progress: 'auto',
        color: 'danger',
        position: 'top-left',
        title: 'Error to send Form',
        text: 'I\'m sorry, there seems to have been a problem with submitting the form. try again or change contact mode.'
      })
    },
    openNotificationSuccessForm () {
      this.$vs.notification({
        duration: '8000',
        progress: 'auto',
        color: 'success',
        position: 'top-left',
        title: 'Message sent successfully',
        text: 'Thank you for contacting me, I will reply as soon as possible.'
      })
    },
    openDialog (pagination) {
      this.current = pagination
      this.activeDialog = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../_vuesax/stylus/contact.styl'
@import "../_bulma/css/bulma.custom.min.css"

  .div-contacts {
    height: 200px;
    background-color: #2b2b2c;
    color: white;
  }
  .text-show-form {
    color: rgba(255, 255, 255, 0.5)
    text-decoration: none;
  }
  .text-show-form:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
