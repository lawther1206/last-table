<template>
  <div>
    <LyTableLast
      :tableData="state.tableData"
      :tableHead="state.tableHead"
      :config="{}"
    >
      <!-- 数据展示插槽 -->
      <template #otherProp="{ row }">
        {{ row }}
      </template>

      <!-- 扩展列插槽 -->
      <template #expand="{ row }">
        <el-button type="primary" @click="edit(row)"> 编辑</el-button>
        <el-button @click="edit(row)"> 删除</el-button>
      </template>
    </LyTableLast>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  tableData: [
    {
      age: 1,
      sex: "男",
    },
    {
      age: 2,
      sex: "男",
    },
    {
      age: 3,
      sex: "女",
    },
  ],
  tableHead: [
    {
      label: "性别",
      prop: "sex",
      // width: 200,
      // fixed: 'left',
      // align: 'left',
      // headAlign: 'center',
    },
    {
      label: "年龄",
      prop: "age",
      // minWidth: 500,
      // align: 'center',
      // headAlign: 'center',
    },
    {
      label: "其他",
      propName: "otherProp",
      // minWidth: 700,
      // align: 'right',
      // headAlign: 'center',
    },
  ],
});
</script>

<style scoped>
:deep(.el-table__expand-column .cell) {
  display: none;
}
</style>
