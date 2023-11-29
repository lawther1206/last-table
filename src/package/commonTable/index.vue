<template>
  <div>
    <el-table
      ref="tableTestRef"
      :data="props.tableData"
      @row-click="tableSelect"
      :border="state.config.border"
      :key="state.tableKey"
      :stripe="state.config.stripe"
      :max-height="state.config.maxHeight"
      :height="state.config.height"
    >
      <el-table-column
        type="index"
        width="50"
        fixed
        v-if="state.config.isNumber"
      />
      <template v-for="(item, index) in props.tableHead">
        <template v-if="item.propName">
          <el-table-column
            :label="item.label"
            :key="item.label"
            :width="item.width"
            :min-width="item.minWidth"
            :fixed="item.fixed"
            :align="item.align"
            :header-align="item.headAlign"
          >
            <template #default="{ row }">
              <slot :name="item.propName" :row="row" :index="index"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :label="item.label"
            :prop="item.prop"
            :key="item.label"
            :width="item.width"
            :min-width="item.minWidth"
            :fixed="item.fixed"
            :align="item.align"
            :header-align="item.headAlign"
          ></el-table-column>
        </template>
      </template>

      <el-table-column
        type="expand"
        width="1"
        fixed="left"
        v-if="state.config.isExpand"
      >
        <template #default="{ row }">
          <div style="margin: 5px 0 5px 10px">
            <slot :row="row" name="expand"> </slot>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
// defineOptions({
//   name: "LyTableLast",
// });

const props = defineProps({
  tableHead: {
    type: Array,
    default: () => [],
  },
  tableData: {
    type: Array,
    default: () => [],
  },
  config: {
    type: Object,
    default: () => {},
  },
});

const state = reactive({
  config: {
    isExpand: true,
    border: true,
    isNumber: false,
    stripe: false,
    maxHeight: undefined,
    height: undefined,
  },
  tableKey: -1,
});

const tableTestRef = ref();

onMounted(() => {
  Object.assign(state.config, props.config);
});

// 打开拓展列
const tableSelect = (row) => {
  if (!state.config.isExpand) return;
  // 全部折叠
  props.tableData.forEach((el) => {
    tableTestRef.value.toggleRowExpansion(el, false);
  });
  // 只展开选中行
  tableTestRef.value.toggleRowExpansion(row, undefined);
};

// 表格数据重置
const tableReset = () => {
  state.tableKey = Date.now() % 100;
};

defineExpose({ tableReset });
</script>

<style scoped>
::v-deep .el-table__expand-column .cell {
  display: none;
}
</style>
