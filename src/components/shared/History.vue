<template>
  <div>
    This is History component
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('test')
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>