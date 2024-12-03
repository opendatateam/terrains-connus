import { defineStore } from "pinia";

export const useAppStore = defineStore('appStore', {
  state: () => ({
    option: 'P',
    mapZoom: 5.2,
    address: [1,1],
    mouseDep: "",
    mouseDepName: "",
    codeInsee: "",
    comData: {},
  }),
  actions: {
    updateOption(newOption: string) {
      this.option = newOption;
    },
    updateMapZoom(zoom: number){
        this.mapZoom = zoom;
    },
    updateAddress(address: any){
        this.address = address
    },
    updateMouseDep(dep: string){
        this.mouseDep = dep;
    },
    updateMouseDepName(depName: string){
        this.mouseDepName = depName;
    },
    updateCodeInsee(code: string){
        this.codeInsee = code;
    },
    updateComData(data: Object){
        this.comData = data;
    }
  },
});