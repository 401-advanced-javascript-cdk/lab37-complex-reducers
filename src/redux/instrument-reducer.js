const defaultState = {
  1:[{
      name: 'trumpet',
      id: 10,
      typeId: 1
    }],
  2:[{
      name: 'clarinet',
      id: 20,
      typeId: 2
    },
    {
      name: 'bassoon',
      id: 21,
      typeId: 2
    }],
  3:[{
      name: 'guitar',
      id: 30,
      typeId: 3
    }],
  4:[{
      name: 'timpani drums',
      id: 40,
      typeId: 4
    }],
};

export default (state = defaultState, {type, payload}) => {

  let instrumentTypeId;
  let instrumentsOfType;

  switch(type){

    case 'CREATE_INSTRUMENT_TYPE':
      return {...state, [payload.id]: []};

    case 'DELETE_INSTRUMENT_TYPE':
      let currentState = {...state};
      delete currentState[payload.id];
      return currentState;

    case 'CREATE_INSTRUMENT':
      instrumentTypeId = payload.typeId;
      instrumentsOfType = state[instrumentTypeId];
      return {...state, [instrumentTypeId]: [...instrumentsOfType, payload] }

    case 'UPDATE_INSTRUMENT':
      let updatedInstruments = state[payload.typeId].map(instrument => {
        if (instrument.id === payload.id) {
          instrument = payload
        }
        return instrument;
      });
      let updatedState = state;
      updatedState[payload.typeId] = updatedInstruments;
      return updatedState;
    case 'DELETE_INSTRUMENT':
      instrumentTypeId = payload.typeId;
      instrumentsOfType = state[instrumentTypeId];
      console.log(instrumentsOfType)
      return {...state, [instrumentTypeId]:
        instrumentsOfType.filter(instrument => {
          return instrument.id !== payload.id
        }) 
      }

    default:
      return state;
  }
};