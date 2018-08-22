export const taskAdd = (task) => {
  return ({
  type: 'ADD_TASK',
  task
  }
  );
};

export const deleteTask = (taskId) => {
  return ({
  type: 'DELETE_TASK',
  payload: taskId
  });
};
