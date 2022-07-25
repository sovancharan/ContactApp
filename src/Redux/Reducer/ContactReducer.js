const initialState = [
    {
        id: 0,
        name: 'Sovan',
        email: 'mail2sovancharan@gmail.com',
        number: 1234567890,
    },
    {
        id: 1,
        name: 'papai',
        email: 'abc@gmail.com',
        number: 987654321,
    },
];

const ContactReducer = (state = initialState, action) => {
    //  console.log(state);
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload];
            return state;
        case 'UPDATE_CONTACT':
            const updateContact = state.map((contact) =>
                contact.id === action.payload.id ? action.payload : contact
            );

            state = updateContact;
            return state;
        case 'DELETE_CONTACT':
         console.log("delete contact");
            const filterContact = state.filter(
                (contact) => contact.id !== action.payload
            );
            state = filterContact;
            return state;
        default:
            return state;
    }
};

export default ContactReducer;
