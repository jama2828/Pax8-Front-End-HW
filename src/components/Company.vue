<template>
    <div class="media box content">
        <p class="media-left">
          {{company.id}}
        </p>
        <p class="media-content">
          <router-link
            :to="{ name: 'About',
            params: { id: company.id }}">
            {{company.name}}
          </router-link>
        </p>
        <p class="media-right">
          <router-link
            :to="{ name: 'Edit',
            params: { id: company.id }}"
            tag="button" class="button is-link">
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
