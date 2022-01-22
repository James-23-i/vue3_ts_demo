<template>
  <div class="app">
    <TodoInput />
    <TodoList :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from "vue";
import { Store, useStore } from "vuex";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IUseTodo, useTodo } from "./hooks/useTodo";

export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const store: Store<any> = useStore();
    const { setTodoList }: IUseTodo = useTodo();
    const todoList = computed(() => store.state.list);
    onMounted(() => {
      setTodoList();
    });
    return {
      todoList,
    };
  },
});
</script>

<style>
</style>
