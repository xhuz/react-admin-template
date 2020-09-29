import {Spin} from 'antd';
import React from 'react';

export function Loading() {
  return (
    <div className="loading">
      <Spin />
      <style jsx>{`
        .loading {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
