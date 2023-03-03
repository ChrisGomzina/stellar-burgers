export const orderStatus = (status) => {
  if (status === 'done') {
    return 'Выполнен';
  } else if (status === 'created') {
    return 'Создан';
  } else if (status === 'pending') {
    return 'Готовится';
  } else {
    return 'Отменен';
  }
};

export const statusStyles = (status) => {
  if (status === 'done') {
    return { color: '#00CCCC' };
  } else if (status === 'cancel') {
    return { color: '#F80000' };;
  } else {
    return { color: '#F2F2F3' };
  }
};