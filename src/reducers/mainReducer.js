import mainActions from "../actions/mainActions";

const mainReducer = (state, action) => {
    let newState = ({ ...state });

    console.log(action)

    switch (action.type) {
        case mainActions.cart.updateCart.type :
            newState.cart = action.payload
            break;

        case mainActions.userRequest.updateDate.type :
            newState.userRequest = {...newState.userRequest, date: action.payload }
            break;
        case mainActions.userRequest.updateTime.type :
            newState.userRequest = {...newState.userRequest, time: action.payload }
            break;
        case mainActions.userRequest.updateGuests.type :
            newState.userRequest = {...newState.userRequest, guests: action.payload }
            break;
        case mainActions.userRequest.updateOccasion.type :
            newState.userRequest = {...newState.userRequest, occasion: action.payload }
            break;

        case mainActions.responseAPI.setAvailableTime.type :
            newState.responseAPI.availableTime = action.payload ;
            break;




        default:
            throw new Error();
    }

    return newState;
}
export default mainReducer;
