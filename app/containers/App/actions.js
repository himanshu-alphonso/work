export const taskAdd = (task) =>{
	return({
		type: 'ADD_TASK',
		task
	}
	);
}

export const deleteTask = (task_id) =>{
	return(
		type:'DELETE_TASK',
		payload : task_id
	);
}


