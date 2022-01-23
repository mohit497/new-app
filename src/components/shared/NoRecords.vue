<template>
  <v-container v-if="show">
    <v-row class="text-center my-2 ">
      <v-col cols="12" >
        <v-card class="message" outlined>
          <v-alert border="top" colored-border type="info" elevation="2">
            {{ message }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    message: String,
    show: Boolean,
  }
};
</script>

<style lang="scss" scoped>
.message.v-card {
  margin: 5%;
}
</style>