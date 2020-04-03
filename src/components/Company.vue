<template>
    <div>
        <p>
          {{company.id}}.
          {{company.name}}
          <router-link
            :to="{ name: 'Edit',
            params: { id: company.id }}"
            tag="button">
            edit
          </router-link>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Company',
  props: ['company'],
};
</script>
