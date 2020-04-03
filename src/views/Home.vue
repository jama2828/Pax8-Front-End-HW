<template>
  <div>
    <Companies v-bind:companies="companies"/>
  </div>
</template>

<script>
import Companies from '../components/Companies.vue';
import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  components: {
    Companies,
  },
  data() {
    return {
      companies: [],
    };
  },
  created() {
    const promise = CompanyService.getAll();
    // eslint-disable-next-line no-return-assign
    promise.then((values) => this.companies = values);
  },
};
</script>
