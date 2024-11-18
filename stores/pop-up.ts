export const usePopupStore = defineStore("popup", {
  state: () => ({
    isVisible: false,
    title: "",
    component: "",
  }),
  actions: {
    showPopup(newTitle: string) {
      console.log("showing");
      this.title = newTitle;
      this.isVisible = true;
    },
    hidePopup() {
      this.isVisible = false;
      this.title = "";
    },
    setComponent(newComponent: any) {
      this.component = newComponent;
      console.log("component set", this.component);
    },
  },
});
