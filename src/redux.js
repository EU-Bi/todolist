import { combineReducers} from "redux"


const initialState={
    todoList:[],
    popup:{
        isOpen:false,
        todo:null
    }
}
export const addToDO =(title, description, status)=> ({type:'ADD_TODO',payload:{ title, description, status}})
export const openPopUp=(todo)=>({type:'POPUP_OPEN', payload:{todo}})
export const closePopUp=()=>({type:'POPUP_CLOSE'})
export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: { id },
  });


export function todoReducer(state=initialState,action){
    switch (action.type){
        case "ADD_TODO":
            return   {
                ...state,
                todoList:[
                    ...state.todoList,
                    {
                        id:state.todoList.length+1,
                        title:action.payload.title,
                        description:action.payload.description,
                        status:action.payload.status
                    }
                ]
            }
        case "POPUP_OPEN":
            return {
                ...state,
                popup:{
                    isOpen:true,
                    todo:action.payload.todo
                }
            }
        case "POPUP_CLOSE":
            return {
                ...state,
                popup:{
                    isOpen:false,
                    todo:null
                }
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, status: !todo.status }
                    : todo
                ),
            };
        default:
            return state;
    }
    
}


export const rootReducer = combineReducers({
    todos: todoReducer,
  });


