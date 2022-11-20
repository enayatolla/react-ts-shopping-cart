import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency';



type CartItemProps ={
    id :number
    quantity: number
}



const CartItem = ({id,quantity}: CartItemProps) => {
    
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(item => item.id === id);


    if(item == null )return null ;
    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center" >
            <img src={item.imgUrl} style={{objectFit: "cover", width: "125px", height:"75px"}} /> 
            <div className='me-auto'>
                <div>
                {item.name}
                {quantity > 1 && <span className="text-muted" style={{fontSize: '.7rem'}}>
                {"   "}x{quantity}
                    </span>}
                </div>
                <div className="text-muted" style={{fontSize: ".8rem"}}>{formatCurrency(item.price)}</div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={()=> removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem;






