<template>
  <div class="todoItem">
    <input type="checkbox" @click="setStatus(item.id)" />
    <span :class="item.status === FINISH ? 'line-through' : ''">{{
      item.content
    }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      @click="setDoing(item.id)"
      v-if="item.status !== FINISH"
      :class="item.status === WILLDO ? 'willdo' : 'doing'"
    >
      {{ item.status === WILLDO ? "马上做" : "正在做..." }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Store, useStore } from "vuex";
import { ITodo } from "../../types/storeType";
import { STATUS } from "../../types/storeType";

export default defineComponent({
  props: {
    item: Object as PropType<ITodo>,
  },
  emits: ["setDoing", "removeTodo", "setStatus"],
  setup(props, { emit }) {
    // 状态值
    const state = {
      FINISH: STATUS.FINISH,
      WILLDO: STATUS.WILLDO,
      DOING: STATUS.DOING,
    };
    const store: Store<any> = useStore();
    const todoList = computed(() => store.state.list);
    const removeTodo = (id: number) => {
      emit("removeTodo", id);
    };
    const setDoing = (id: number) => {
      emit("setDoing", id);
    };
    const setStatus = (id: number) => {
      emit("setStatus", id);
    };
    return {
      todoList,
      setDoing,
      removeTodo,
      setStatus,
      ...state,
    };
  },
});
</script>

<style scoped>
.willdo {
  background-color: #cdcdcd;
  color: #fff;
}
.doing {
  background-color: orange;
  color: #fff;
}
.line-through {
  text-decoration: line-through;
}
</style>