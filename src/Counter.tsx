import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { decrement, increment } from './redux/counterSlice';
import { Button } from '@mui/material';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
