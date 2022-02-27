let initialState = {
    buttons: [
        { path: 'main', text: 'Destinations', offset: 0, id: 1 },
        { path: '/', text: 'Hotels', offset: 50, id: 1 },
        { path: '/', text: 'Flights', offset: 50, id: 1 },
        { path: '/', text: 'Bookings', offset: 50, id: 1 },
        { path: '/', text: 'Login', offset: 50, id: 1 },
        { path: '/', text: 'SignUP', offset: 50, id: 1 },
    ]
}

const menuReducer = (state = initialState, action) => {
    return state;
}

export default menuReducer;