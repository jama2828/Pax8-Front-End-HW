<template>
    <form @submit="updateEmployees">
        <div class="field">
            <div class="control">
                <input type="text" v-model="newNumberOfEmployees" name ="NumberOfEmployees"
                :placeholder="[[ numberOfEmployees ]]" class="input">
            </div>
            <div class="control">
                <input value="Submit" type="submit" class="button is-success">
            </div>
        </div>
    </form>
</template>

<script>

export default {
  name: 'ChangeEmployees',
  props: ['numberOfEmployees'],
  data() {
    return {
      newNumberOfEmployees: '',
    };
  },
  methods: {
    updateEmployees(e) {
      e.preventDefault();
      this.$emit('update-employees', this.newNumberOfEmployees);
    },
  },
};
</script>
