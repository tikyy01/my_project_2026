<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1>Ad Details Page</h1>
        <p>Ad ID: ' + '$route.params.id' + '</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdView'
}
</script>
