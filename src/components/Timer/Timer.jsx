import React from 'react';
import './Timer.scss';

export default function Timer({ time }) {
  return (
    <div className='Timer__container'>
      <span className='Timer__text'>{new Date(time * 1000).toISOString().substr(11, 8)}</span>
    </div>
  );
}
