export const getProduct = ({commit}, {id}) => {
    commit('GET_PRODUCT', id)
}