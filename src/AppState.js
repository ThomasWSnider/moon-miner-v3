import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  energy: 0,

  clickUpgrades: [
    {
      name: 'drill',
      clickModifier: 100,
      price: 10,
      quantity: 0
    },
  ]
})