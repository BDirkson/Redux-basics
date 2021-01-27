const loggedReducer = (state = true, action) => {
    switch (action.type) {
        case 'SIGN IN':
          return !state       // of true kan ook natuurlijk
        default: 
          return state;
        }
  };

export default loggedReducer