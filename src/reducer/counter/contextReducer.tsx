
export const increment = () => {
	return {
		type: 'INCREMENT'
	};
}

export const decrement = () => {
	return {
		type: 'DECREMENT'
	};
}

const contextReducer = (state = 0, action: any) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}
export default contextReducer;