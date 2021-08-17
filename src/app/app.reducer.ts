import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, movieId, genreId } from './app.actions';

export const initialState = 0;

const _counterReducer = createReducer(
initialState,
on(increment, (state) => state + 1),
on(decrement, (state) => state - 1),
on(reset, (state) => 0),
on(genreId, (state) => 27),
on(movieId, (state) => 27)
);

export function counterReducer(state, action) {
return _counterReducer(state, action);
}