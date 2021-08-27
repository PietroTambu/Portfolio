<template>
  <div>
    <vs-dialog width="550px" not-close prevent-close not-center v-model="dialogActive" blur >
      <template #header>
        <h4 class="not-margin">
          <h1>Error 404 not found</h1>
        </h4>
      </template>
      <div class="con-content">
        <h3 class="text-center d-inline-flex font-size-150">
          <vs-button size="xl" href="/" color="#17a2b8" transparent>Home Page</vs-button>
        </h3>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="active=false" color="#17a2b8" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data: function () {
    return {
      dialogActive: true
    }
  }
}
</script>

<style src="../_vuesax/stylus/customDialog.styl" lang="stylus"></style>
