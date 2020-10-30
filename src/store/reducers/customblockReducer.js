import {CREATE_BLOCKS} from '../actions';
import {MOD_BLOCKS} from '../actions';

const initialState = {
  customblocks: [
    {
      name:"testBLOCKS",
      content:`xml形式`
    },
  ],
  items:10
};

const customBlocksState = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOCKS:
      let newState = {...state};
    //   newState.announcementList = action.payload
      return newState;
    // case MOD_BLOCKS:
    //   let newState1 = {...state};
    //   newState1.announcementList.length > newState1.items + action.payload ? 
    //     newState1.items = newState1.items + action.payload :
    //     newState1.items = newState1.announcementList.length
      // return newState1;
    default:
      return state;
  }
};

export default customBlocksState;
