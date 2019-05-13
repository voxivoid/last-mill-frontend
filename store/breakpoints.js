import { $breakpoint as breakpoints } from "@/assets/breakpoints";

export const namespaced = true;

export const state = {
  sizes: {
    xs_only: true,
    sm_only: false,
    sm_and_down: false,
    sm_and_up: false,
    md_only: false,
    md_and_down: false,
    md_and_up: false,
    lg_only: false,
    lg_and_down: false,
    lg_and_up: false,
    xl_only: false,
  },
};

export const actions = {

};

export const mutations = {
  setSizes: (state, windowInnerWidth) => state.sizes = {
    xs_only: windowInnerWidth < breakpoints.sm,

    sm_only: windowInnerWidth >= breakpoints.sm && windowInnerWidth < breakpoints.md,
    sm_and_down: windowInnerWidth < breakpoints.md,
    sm_and_up: windowInnerWidth >= breakpoints.sm,

    md_only: windowInnerWidth >= breakpoints.md && windowInnerWidth < breakpoints.lg,
    md_and_down: windowInnerWidth < breakpoints.lg,
    md_and_up: windowInnerWidth >= breakpoints.md,

    lg_only: windowInnerWidth >= breakpoints.lg && windowInnerWidth < breakpoints.xl,
    lg_and_down: windowInnerWidth < breakpoints.xl,
    lg_and_up: windowInnerWidth >= breakpoints.lg,

    xl_only: windowInnerWidth >= breakpoints.xl,
  },
};
