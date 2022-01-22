<template>
  <div class="todoList">
    <TodoItem
      v-for="item in todoList"
      :item="item"
      :key="item.id"
      @removeTodo="removeTodo"
      @setDoing="setDoing"
      @setStatus="setStatus"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TodoItem from "./item.vue";
import { ITodo } from "../../types/storeType";
import { useTodo } from "../../hooks/useTodo";

export default defineComponent({
  components: {
    TodoItem,
  },
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  setup() {
    const { removeTodo, setDoing, setStatus } = useTodo()
    return {
      removeTodo,
      setDoing,
      setStatus
    };
  },
});
</script>

<style scoped>
</style>