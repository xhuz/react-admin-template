import Loadable from 'react-loadable';
import {Loading} from '../components/loading/Loading';
export const loader = (
  loader: () => any,
  loading: React.ComponentType<any> = Loading
) => {
  return Loadable({loader, loading});
};
