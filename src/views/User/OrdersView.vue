<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">Orders</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-list lines="two">
          <v-list-item 
            v-for="order in orders" 
            :key="order.id"
            :title="order.name"
            :subtitle="order.phone"
          >
            <template v-slot:prepend>
              <v-checkbox
                :model-value="order.done"
                color="primary"
                @click="markDone(order)"
                hide-details
              ></v-checkbox>
            </template>

            <template v-slot:append>
              <v-btn color="primary" :to="'/ad/' + order.adId" size="small">
                Open
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
        
        <!-- Сообщение, если нет заказов -->
        <v-alert
          v-if="orders.length === 0"
          type="info"
          class="mt-3"
        >
          You have no orders yet.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'OrdersView',
  computed: {
    orders() {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone(order) {
      order.done = !order.done
      console.log(order.done)
    }
  }
}
</script>