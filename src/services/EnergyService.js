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
    AppState.energy++
  }

}

export const energyService = new EnergyService