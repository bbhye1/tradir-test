import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: Type, payload: 'test'});
  }, [dispatch]);

  const { test } = useSelector((state) =>({
    test: state.test,
  }));

  const Type = 'USER_FETCH_REQUESTED'
  const handleClick = () => {
  }
  
  return (
    <div onClick={handleClick}>
    {test.map(({name}) => (<p key={name}>{name}</p>))}
    </div>
  )
};

export default Home
