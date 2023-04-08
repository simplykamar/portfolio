
export const darkThemeReducer = (state=false,action) => {
	switch(action.type){
		case 'darkmode':
			return !state; 
		default: return state;
	}
}

