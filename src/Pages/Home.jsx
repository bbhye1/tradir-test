import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    history.push('/home');

    dispatch({ type: 'FETCH_BEERS' });
  }, []);

  const handleClick = () => {
    history.push('/beerlist');
  };

  return ((
    <>
      <button type="button" onClick={handleClick}>
        맥주 리스트로 이동하기
      </button>
    </>
  ));
};

export default Home;
