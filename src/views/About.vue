<template>
    <div class="container">
        <h1 class="title is-2">{{company.name}}</h1>
        <div class="field">
            <lable class="label">Domain</lable>
            <p>{{company.domain}}</p>
        </div>
        <div class="field">
            <label class="label">Number of Employees</label>
            <p>{{company.numberOfEmployees}}</p>
        </div>
        <div class="field">
            <label class="label">Subscriptions Per Employee</label>
            <p>{{company.subscriptionsPerEmployee}}</p>
        </div>
        <div class="field">
            <label class="label">Total Subscriptions</label>
            <p>{{totalSubs}}</p>
        </div>
        <button v-on:click="showComponent" class="button is-info">
            Change Number of Employees
        </button>
        <ChangeEmployees v-if="isClicked" v-bind:numberOfEmployees="company.numberOfEmployees"
        v-on:update-employees="updateEmployees"/>
    </div>
</template>

<script>
import CompanyService from '../services/CompanyService';
import ChangeEmployees from '../components/ChangeEmployees.vue';

export default {
  name: 'Edit',
  props: ['id'],
  components: {
    ChangeEmployees,
  },
  data() {
    return {
      company: '',
      totalSubs: '',
      isClicked: false,
    };
  },
  methods: {
    showComponent() {
      this.isClicked = true;
    },
    updateEmployees(newNumberOfEmployees) {
      this.company.numberOfEmployees = newNumberOfEmployees;
      this.totalSubs = this.company.numberOfEmployees * this.company.subscriptionsPerEmployee;
      this.isClicked = false;
    },
  },
  created() {
    const promise = CompanyService.getById(this.id);
    // eslint-disable-next-line no-return-assign
    promise.then((value) => {
      this.company = value;
      this.totalSubs = value.numberOfEmployees * value.subscriptionsPerEmployee;
    });
  },
};
</script>
