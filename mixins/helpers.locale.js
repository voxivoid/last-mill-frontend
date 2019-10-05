import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      locale: state => state.i18n.locale,
    }),
  },
};
