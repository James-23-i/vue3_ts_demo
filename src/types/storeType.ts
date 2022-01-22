interface ITodo {
  id: number
  content: string,
  status: STATUS
}

interface IState {
  list: ITodo[]
}

enum STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISH = 'finish'
}

export {
  ITodo,
  IState,
  STATUS
}

