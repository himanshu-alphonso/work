export const taskAdd = (task) =>{
	return({
		type: 'ADD_TASK',
		task
	}
	);
}

export const deleteTask = (task_id) =>{
	console.log("in action");
	console.log(task_id);

	return({
		type:'DELETE_TASK',
		payload : task_id
	});
}


