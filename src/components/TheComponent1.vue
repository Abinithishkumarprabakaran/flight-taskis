<template>
  <v-app>
    <div v-for="(data, index) of tickets" :key="index">
      <h3>Ticket ID: {{ data.id }}</h3>
      <p>Ticket Description: {{ data.description }} </p>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    tickets: {
      type: Array,
    },
  },
};
</script>
