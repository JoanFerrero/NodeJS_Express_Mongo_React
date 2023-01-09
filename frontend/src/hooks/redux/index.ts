import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, Dispatch } from '../../redux/store';

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;