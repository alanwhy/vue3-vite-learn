<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <h1>{{ state.count }} * 2 = {{ double }}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">+</button>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { reactive, computed, ref, onMounted } from "vue";
export default {
  // name: "App",
  // components: {
  //   HelloWorld,
  // },
  // 可以理解为是组件的入口 在beforeCreate之前调用 函数返回的内容会作为模板渲染上下文
  setup() {
    // reactive 与 vue。observerable一样 将数据变成响应式
    // const state = reactive({
    //   count: 1,
    // });
    const { state, double } = useCounter(1);

    // ref可以把基本数据结构包装成响应式
    const num = ref(2);

    function add() {
      state.count++;
      // num.value 直接取值操作
      num.value += 10;
    }
    // const double = computed(() => state.count * 2);

    onMounted(() => {
      // 顺便打印 生命周期
      console.log("mounted");
    });

    return { state, add, double, num };
  },
};
function useCounter(count, n) {
  // 抽离state和double
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return { state, double };
}
</script>
