<template>
  <div>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
  </div>
</template>

<script>
import Test from "./conponents/Test";
import Test2 from "./conponents/Test2";
import Test3 from "./conponents/Test3";

export default {
  name: "App",
  components:{Test,Test2,Test3}
};
</script>
