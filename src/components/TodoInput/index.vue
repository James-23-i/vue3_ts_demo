<template>
  <div class="todoInput">
    <input type="text" v-model="inputValue" @keyup="setTodoValue"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IUseTodo, useTodo } from '../../hooks/useTodo'

export default defineComponent({
  setup () {
    const { setTodo }: IUseTodo  = useTodo()
    const inputValue = ref<string>('')
    const setTodoValue = (e: KeyboardEvent) => {
      console.log(e);
      // 回车并且输入框有值时设置数据，并且设置完清空掉
      if (e.keyCode === 13 && inputValue.value.trim().length) {
        // 操作放在 hooks 中统一维护管理
        setTodo(inputValue.value)
        inputValue.value = ''
      }
    }
    return {
      inputValue,
      setTodoValue
    }
  }
})
</script>

<style scoped>

</style>