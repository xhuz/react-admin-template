import React from 'react';
import PrefectScrollBar, {ScrollBarProps} from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './index.scss';

export function ScrollBar(props: ScrollBarProps) {
  return <PrefectScrollBar {...props}></PrefectScrollBar>;
}
