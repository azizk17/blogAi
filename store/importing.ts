import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module
export default class Vehicle extends VuexModule {
  wheels = 2
  get axles() {
    return this.wheels / 2
  }
  @Mutation
  puncture(n: number) {
    this.wheels = this.wheels - n
  }
  @Action
  async fetchNewWheels(wheelStore: string) {
    // // const wheels = await get(wheelStore)
    // this.context.commit('addWheel', wheels)
  }
}