import state from "@/store/modules/user/userState";
import mutations from "@/store/modules/user/userMutations";
import getters from "@/store/modules/user/userGetters";
import actions from "@/store/modules/user/userActions";

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
