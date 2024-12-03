import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
	state: () => ({
		option: "P",
		mapZoom: 5.2,
		address: [1, 1],
	}),
	actions: {
		updateOption(newOption: string) {
			this.option = newOption;
		},
		updateMapZoom(zoom: number) {
			this.mapZoom = zoom;
		},
		updateAddress(address: any) {
			this.address = address;
		},
	},
});
