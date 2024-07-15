import { AppState } from "../AppState"


class EnergyService {

  gatherEnergy() {
    AppState.energy++
  }

}

export const energyService = new EnergyService