const mainActions = {
    app: {
        error: {
            type: 'appError'
        }
    },
    cart: {
        updateCart: {
            type: 'updateCart',
            payload: []
        }
    },
    reservation: {
        setAvailableTime: {
            type: 'setAvailableTime',
            payload: []
        }
    },
    menu: {
        //do something here
    }
}
export default mainActions;
