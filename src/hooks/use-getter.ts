import {useSelector} from 'react-redux';
import {MyStore} from '../store';

/**
 * 根据给定的命名空间，从store中取出对应的state
 * @param namespace state的命名空间
 */

export const useGetter = <K extends keyof MyStore>(namespace: K) => {
  return useSelector<MyStore, MyStore[K]>(state => state[namespace]);
};
