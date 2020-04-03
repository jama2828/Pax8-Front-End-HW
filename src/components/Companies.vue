<template>
    <div>
        <div v-for="company in companies" v-bind:key="company.id">
            <Company v-bind:company="company"/>
        </div>
    </div>
</template>

<script>
import Company from './Company.vue';

export default {
  name: 'Companies',
  components: {
    Company,
  },
  props: ['companies'],
};
</script>
