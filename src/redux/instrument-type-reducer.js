const defaultState = [
  {id: 1, name:'brass'},
  {id: 2, name:'woodwind'},
  {id: 3, name:'stringed'},
  {id: 4, name:'percussion'},
]

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'CREATE_INSTRUMENT_TYPE':
      return [...state, payload];
    case 'UPDATE_INSTRUMENT_TYPE':
      let updatedState = state.map(currentType => {
        if (currentType.id === payload.id) {
          currentType = payload
        }
        return currentType;
      });
      return updatedState;
    case 'DELETE_INSTRUMENT_TYPE':
      return state.filter(instrumentType => instrumentType.id !== payload.id)
    default:
      return state;
  }
};