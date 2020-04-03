<template>
    <div class="container">
        <h1 class="title is-2">{{company.name}}</h1>
        <form @submit="editCompany">
          <div class="field">
            <label class="label">Domain</label>
            <div class="control">
              <input class="input" type="text" v-model="domain" name ="Domain"
              :placeholder="[[ company.domain ]]">
            </div>
          </div>
          <div class="field">
            <label class="label">Number of Employees</label>
            <div class="control">
              <input type="text" v-model="numberOfEmployees" name ="numberOfEmployees"
              :placeholder="[[ company.numberOfEmployees ]]" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Subscriptions per Employee</label>
            <div class="control">
              <input v-model="subscriptionsPerEmployee" name ="subscriptionsPerEmployees"
              :placeholder="[[ company.subscriptionsPerEmployee ]]" class="input" type="text">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="submit" value="Submit" class="button is-success">
            </div>
          </div>
        </form>
    </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  name: 'Edit',
  props: ['id'],
  data() {
    return {
      company: {},
      domain: '',
      numberOfEmployees: '',
      subscriptionsPerEmployee: '',
    };
  },
  methods: {
    editCompany(e) {
      e.preventDefault();
      const editedCompany = {
        domain: this.domain,
        numberOfEmployees: this.numberOfEmployees,
        subscriptionsPerEmployee: this.subscriptionsPerEmployee,
      };
      this.$confirm(`Do you wish to save your changes to ${this.company.name}?`).then(() => {
        this.$emit('edit-company', editedCompany);
        this.$router.push('/');
      });
    },
  },
  created() {
    const promise = CompanyService.getById(this.id);
    // eslint-disable-next-line no-return-assign
    promise.then((value) => this.company = value);
  },
};
</script>
