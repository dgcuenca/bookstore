import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <h2>{status}</h2>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
}
