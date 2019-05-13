import Vuex from "vuex";

import * as breakpoints from "./breakpoints";

const createStore = () => new Vuex.Store({
  modules: {
    breakpoints,
  },
});

export default createStore;
