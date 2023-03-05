import React, { useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './OrderInfoPage.module.css';

import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';

import { orderStatus, statusStyles } from '../../utils/ordersStatus.js';
import { getIngredients } from '../../services/actions/ingredients.js';
import { wsAllOrdersConnectionStart, 
  wsUserOrdersConnectionStart,
  wsAllOrdersConnectionClosed,
  wsUserOrdersConnectionClosed } from '../../services/actions/orders.js';

import Loader from '../../components/Loader/Loader.jsx';

const OrderInfoPage = ({ isUserOrder }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profile = useSelector((state) => state.profileReducer.profile);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (isUserOrder) {
      dispatch(wsUserOrdersConnectionStart());
      return () => {
        dispatch(wsUserOrdersConnectionClosed());
      }
    }  else {
      dispatch(wsAllOrdersConnectionStart());
      return () => {
        dispatch(wsAllOrdersConnectionClosed());
      }
    }
  }, [profile]);

  const allOrders = useSelector((state) => state.ordersReducer.allOrders);
  const userOrders = useSelector((state) => state.ordersReducer.userOrders);
  const allIngredients = useSelector((state) => state.ingredientReducer.ingredients);

  console.log(allOrders);
  console.log(allIngredients);

  const findOrder = (allOrders, id) => {
    return allOrders.find((item) => item._id === id);
  };

  const order = isUserOrder ? findOrder(userOrders, id) : findOrder(allOrders, id);

  const foundIngredients = order?.ingredients.map((orderIngredient) => allIngredients.find((item) => item._id === orderIngredient));

  const price = () => {
    let totalPrice = 0;
    foundIngredients?.forEach((ingredient) => {
      const findIngredient = allIngredients.find((findIngredient) => findIngredient?._id === ingredient?._id)
      if (findIngredient?.price) {
        totalPrice += findIngredient.price;
      }
    })
    return totalPrice;
  };

  return (
    <>

    {order ? (
      <div className={`${styles.container} pt-15 pr-10 pl-10 pb-15`}>
  
        <h3 className={`${styles.number} text text_type_digits-default mb-10`}>{`#${order.number}`}</h3>
        <h2 className='text text_type_main-medium mb-3'>{order.name}</h2>
        <span className='text text_type_main-default mb-15' style={statusStyles(order.status)}>{orderStatus(order.status)}</span>

        <h3 className='text text_type_main-medium mb-6'>Состав:</h3>

        <div className={styles.scrollbar}>
          <ul className={styles.list}>

            {Array.from(new Set(foundIngredients))?.map((ingredient, index) => (
              <li className={styles.item} key={index}>
                <div className={styles.border}>
                  <img className={styles.image} src={ingredient?.image}></img>
                </div>
        
                <h3 className={`${styles.title} text text_type_main-default`}>{ingredient?.name}</h3>
            
                <div className={styles.price_container}>
                  <div className='text text_type_digits-default'>
                    <span className={styles.price}>
                      {foundIngredients && foundIngredients?.filter(item => item?._id === ingredient?._id).length}
                    </span> 
                    <span>{`x ${ingredient.price}`}</span>
                  </div>
                  <CurrencyIcon type="primary"/>
                </div>
              </li>
            ))}
          
          </ul>
        </div>

        <div className={styles.time_container}>

          <p className='text text_type_main-default text_color_inactive'>
            <FormattedDate date={new Date(order?.createdAt)} />
            <span>{` i-GMT+3`}</span>
          </p>

          <div className={styles.price_container}>
            <span className={`${styles.price} text text_type_digits-default`}>{price()}</span>
          <  CurrencyIcon type="primary"/>
          </div>

        </div>

      </div>
    ) : (
      <Loader />
    )}
    
    </>
  )
};

export default OrderInfoPage;