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

    userRequest: {
        updateDate: {
            type: 'updateDate',
            payload: ''
        },
        updateTime: {
            type: 'updateTime',
            payload: ''
        },
        updateGuests: {
            type: 'updateGuests',
            payload: 1
        },
        updateOccasion: {
            type: 'updateOccasion',
            payload: ''
        },
    },

    responseAPI: {
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
