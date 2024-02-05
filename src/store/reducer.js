import * as actionTypes from './action';

const initialState = {
	todo: [
		{
			title: 'Tasks for program studing',
			contents: [
				{
					time: 'forenoon',
					tasks: ['React.js', 'Phyton']
				},
				{
					time: 'afternoon',
					tasks: ['Bootstrap', 'MongoDB']
				}
			],
			state: 'done'
		},
		{
			title: 'Tasks for English studing',
			contents: [
				{
					time: 'forenoon',
					tasks: ['free talking', 'remember of unknown words']
				},
				{
					time: 'afternoon',
					tasks: ['listening', 'keeping diary']
				}
			],
			state: 'done'
		},
		{
			title: 'Tasks for program studing',
			contents: [
				{
					time: 'forenoon',
					tasks: ['React.js', 'Phyton']
				},
				{
					time: 'afternoon',
					tasks: ['Bootstrap', 'MongoDB']
				}
			],
			state: 'done'
		},
		{
			title: 'Tasks for English studing',
			contents: [
				{
					time: 'forenoon',
					tasks: ['free talking', 'remember of unknown words']
				},
				{
					time: 'afternoon',
					tasks: ['listening', 'keeping diary']
				}
			],
			state: 'done'
		}
	]
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.DELETE_TODO:{
			const updateState = [...state.todo];
			updateState.splice(action.id, 1);
			console.log(action)
			return{
				...state,
				todo: updateState
			}
		}
		default:
			return state
	}
};

export default reducer;