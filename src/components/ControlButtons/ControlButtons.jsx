import React from 'react';
import './ControlButtons.scss';

export default function ControlButtons({ start, stop, reset, wait, status }) {
  const handleDoubleClick = e => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(wait, 299, e.detail);
  };
  return (
    <div className='ControllButtons__container'>
      {status === 0 ? (
        <div>
          <button onClick={start}>Start</button>
          <button disabled>Wait</button>
          <button disabled>Reset</button>
        </div>
      ) : (
        ''
      )}
      {status === 1 ? (
        <div>
          <button onClick={stop}>Stop</button>
          <button onClick={handleDoubleClick}>Wait</button>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ''
      )}
      {status === 2 ? (
        <div>
          <button onClick={start}>Start</button>
          <button disabled>Wait</button>
          <button disabled>Reset</button>
        </div>
      ) : (
        ''
      )}
      {status === 3 ? (
        <div>
          <button onClick={start}>Continue</button>
          <button disabled>Wait</button>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
