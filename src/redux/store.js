import  {combineReducers, configureStore} from '@reduxjs/toolkit'

// call reducers
import  questionReducer  from './question_reducer'
import resultReducer from './result-reducer'
const rootReducer = combineReducers({
    questions: questionReducer,
    result:resultReducer
})

// create Store
 export const store = configureStore(
    {reducer : rootReducer})
