export const initialState = {
    basket: [],
    user: null,
}

// exporting the total amount of the items on the cart
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => amount + item.price, 0)

const reducer = (state, action) => {
    switch (action.type) {
        // Logic to add the user
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        // Logic to add to the basket
        case 'ADD_TO_BASKET':
            return { ...state.basket, basket: [...state.basket, action.item], }
        // Logic to remove from the basket
        case 'REMOVE_FROM_BASKET':
            // cloning the basket
            let newBasket = [...state.basket]
            // checking the item to be removed
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // removing the item in basket
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn('item not found')
            }
            console.log(newBasket);
            return { ...state, basket: newBasket, }
        default:
            return state
    }
}
export default reducer