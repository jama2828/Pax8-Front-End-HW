<template>
    <div>
        <form @submit="editCompany">
            <h1>{{company.name}}</h1>
            <p>Domain</p>
            <input type="text" v-model="domain" name ="Domain"
            :placeholder="[[ company.domain ]]">
            <br/>
            <p>Number of Employees</p>
            <input type="text" v-model="numberOfEmployees" name ="numberOfEmployees"
            :placeholder="[[ company.numberOfEmployees ]]">
            <br/>
            <p>Subscriptions per Employee</p>
            <input type="text" v-model="subscriptionsPerEmployee" name ="subscriptionsPerEmployees"
            :placeholder="[[ company.subscriptionsPerEmployee ]]">
            <br/>
            <input type="submit" value="Submit">
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
