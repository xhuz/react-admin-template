import {useDispatch} from 'react-redux';
import {DispatchEffect} from '../store';

/**
 * 封装useDispatch钩子，用于副作用的派发
 */
export const useEffectDispatch = () => {
  return useDispatch<DispatchEffect>();
};
