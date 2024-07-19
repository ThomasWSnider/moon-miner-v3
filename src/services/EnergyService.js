import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop";


class EnergyService {
  buyClickUpgrade(clickUpgradeName) {
    let clickUpgrade = AppState.clickUpgrades.find((clickUpgrade) => clickUpgrade.name == clickUpgradeName)
    if (AppState.energy < clickUpgrade.price) {
      Pop.error('Cannot afford upgrade!!');
      return
    }
    AppState.energy -= clickUpgrade.price
    clickUpgrade.price = Math.floor(clickUpgrade.price * 1.5)
    clickUpgrade.quantity++
  }

  gatherEnergy() {
    let clickAmount = 1
    AppState.clickUpgrades.forEach((clickUpgrade) => {
      if (clickUpgrade.quantity > 0) {
        for (let i = 0; i < clickUpgrade.quantity; i++) {
          clickAmount += clickUpgrade.clickModifier
        }
      }
      AppState.energy += clickAmount
    })
  }

}

export const energyService = new EnergyService