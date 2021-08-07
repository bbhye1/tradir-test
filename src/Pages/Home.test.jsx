import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Home from './Home';

jest.mock('react-redux');

describe('Home', () => {
  const dispatch = jest.fn();

  const history = {
    push: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      beers: [],
    }));
  });

  it('renders Home', () => {
    const { container } = render(<Home history={history} />);

    expect(container).toHaveTextContent('맥주 리스트로 이동하기');
  });

  it('listens click event', () => {
    const { getByText } = render(<Home history={history} />);

    fireEvent.click(getByText('맥주 리스트로 이동하기'));

    expect(history.push).toBeCalledWith('/beerlist');
  });

  it('calls dispatches', () => {
    render(<Home history={history} />);
    expect(dispatch).toBeCalledWith({ type: 'FETCH_BEERS' });
  });
});
