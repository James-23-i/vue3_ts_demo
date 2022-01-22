import { Store, useStore } from 'vuex'
import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from "@/store/actionTypes"
import { ITodo, STATUS } from "@/types/storeType"
import { watch } from 'vue'

export interface IUseTodo {
  setTodo: (value: string) => void
  setTodoList: () => void
  removeTodo: (id: number) => void
  setStatus: (id: number) => void
  setDoing: (id: number) => void
}

function useTodo(): IUseTodo {
  const store: Store<any> = useStore()
  const { getLocalStorage, setLocalStorage } = useLocalStorage()
  // 在这里获取todoList方便后面拿数据
  const todoList: ITodo[] = getLocalStorage('todoList')
  // 监听list的改变，设置缓存数据
  watch(() => store.state.list, () => {
    setLocalStorage(store.state.list)
  })

  // （将list中的对象放在数组中）设置todo传递输入框的value值
  function setTodo(value: string) {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: STATUS.WILLDO
    }
    store.dispatch(SET_TODO, todo)
    // todo添加完，将数组list放在缓存中
    // setLocalStorage(store.state.list)
  }
  // 设置list数组
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList)
  }
  // 删除数组list中对应的数据
  function removeTodo(id: number) {
    store.dispatch(REMOVE_TODO, id)
    // setLocalStorage(store.state.list)
  }
  function setStatus(id: number) {
    store.dispatch(SET_STATUS, id)
    // setLocalStorage(store.state.list)
  }
  function setDoing(id: number) {
    store.dispatch(SET_DOING, id)
    // setLocalStorage(store.state.list)
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }
}

function useLocalStorage() {
  function getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }
  function setLocalStorage(value: ITodo[]) {
    localStorage.setItem('todoList', JSON.stringify(value))
  }
  return {
    getLocalStorage,
    setLocalStorage
  }
}

export {
  useTodo,
  useLocalStorage
}