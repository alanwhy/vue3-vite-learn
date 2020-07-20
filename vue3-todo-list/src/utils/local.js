import { reactive, effect } from "@vue/reactivity";


export default function useStorage(key, defaultValue = []) {
  let data = reactive({});

  Object.assign(data, localStorage[key] && JSON.parse(localStorage[key]) || defaultValue);

  effect(() => localStorage[key] = JSON.stringify(data));
  console.log(data)
  return data;
}