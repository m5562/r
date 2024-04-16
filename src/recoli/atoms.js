import { atom } from "recoil";

const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

const userData = atom({
  key: "userData",
  default: null
})

export { userState, userData };
