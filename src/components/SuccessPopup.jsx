import React, { useEffect } from 'react';

const SuccessPopup = ({ message, type }) => {
  useEffect(() => {
    const alert = document.querySelector('.alert');
    setTimeout(() => {
      alert.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      alert.classList.remove('show');
    }, 2900);
  }, []);

  const getIcon = () => {
    switch(type) {
      case 'success':
        return 'https://cdn-icons-png.flaticon.com/512/190/190411.png';
      case 'archive':
        return 'https://cdn-icons-png.flaticon.com/512/2767/2767155.png';
      case 'unarchive':
        return 'https://cdn-icons-png.flaticon.com/512/3770/3770209.png';
      default:
        return 'https://cdn-icons-png.flaticon.com/512/190/190411.png';
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <img src={getIcon()} alt={type} className="alert-icon" />
      <p>{message}</p>
      <div className="alert-progress"></div>
    </div>
  );
};

export default SuccessPopup; 