import mainActions from "../actions/mainActions";

const mainReducer = (state, action) => {
    let newState = ({ ...state });

    switch (action.type) {
        case mainActions.cart.updateCart.type :
            newState.cart = action.payload
            break;
        case mainActions.reservation.setAvailableTime.type :
            newState.reservation.availableTime = action.payload ;
            break;
        default:
            throw new Error();
    }

    console.log(newState)

    return newState;
}
export default mainReducer;
