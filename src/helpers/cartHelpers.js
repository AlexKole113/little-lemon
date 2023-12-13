const addToCart = (cart,product) => ([...cart, product]);

const removeFromCartByID = (cart,id) => (([...cart]).filter( v => v.id !== id ));

const setNewQuantityForIDInCart = (cart, id, amount) => ( ([...cart]).cart.map( ( prod ) => ( prod.id === id ? ({ id , amount }) : prod ) ) ) ;


export {addToCart ,removeFromCartByID, setNewQuantityForIDInCart};
