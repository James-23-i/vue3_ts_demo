import { IState, ITodo } from "@/types/storeType";
import { Commit } from "vuex";
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from "./actionTypes";

interface IContext {
  commit: Commit,
  state: IState
}

export default {
  [SET_TODO]({ commit }: IContext, todo: ITodo) {
    commit(SET_TODO, todo)
  },
  [SET_TODO_LIST]({ commit }: IContext, todoList: ITodo[]) {
    commit(SET_TODO_LIST, todoList)
  },
  [REMOVE_TODO]({ commit }: IContext, id: number) {
    commit(REMOVE_TODO, id)
  },
  [SET_STATUS]({ commit }: IContext, id: number) {
    commit(SET_STATUS, id)
  },
  [SET_DOING]({ commit }: IContext, id: number) {
    commit(SET_DOING, id)
  },
}