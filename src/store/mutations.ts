import { IState, ITodo, STATUS } from "@/types/storeType";
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from "./actionTypes";

export default {
  [SET_TODO](state: IState, todo: ITodo) {
    state.list = [todo, ...state.list]
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]) {
    state.list = todoList
  },
  [REMOVE_TODO](state: IState, id: number) {
    state.list = state.list.filter((item: ITodo) => item.id !== id)
  },
  [SET_STATUS](state: IState, id: number) {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        switch (item.status) {
          case STATUS.FINISH:
            item.status = STATUS.WILLDO
            break;
          // switch语句可以书写多个判断
          case STATUS.DOING:
          case STATUS.WILLDO:
            item.status = STATUS.FINISH
          default:
            break;
        }
      }
      return item
    })
  },
  [SET_DOING](state: IState, id: number) {
    state.list = state.list.map((item: ITodo) => {
      // 点击当前的为相等，其他的不等
      if (item.id === id) {
        item.status === STATUS.WILLDO ? item.status = STATUS.DOING : item.status = STATUS.WILLDO
      } else {
        item.status = STATUS.WILLDO
      }
      return item
    })
  }
}