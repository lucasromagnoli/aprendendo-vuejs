export default {
    setCurrentUser(state, payload) {
        payload.id = 'laction-'+new Date().getTime();
        state.commit('SET_CURRENT_USER', payload);
    }
}
