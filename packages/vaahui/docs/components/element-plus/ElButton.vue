<template>

  <h3>VaahUI</h3>
  <button type="button" class="button">Default</button>
  <button type="button" class="button--primary ">Primary</button>
  <button type="button" class="button--success">Success</button>
  <button type="button" class="button--info">Info</button>
  <button type="button" class="button--warning">Warning</button>
  <button type="button" class="button--danger">Danger</button>
  <button type="button" class="button--dark">Dark</button>

  <hr/>
  <h3>Element Plus</h3>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button type="dark">Dark</el-button>

</template>

<script lang="ts" setup>
import {
  ElIcon,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElConfigProvider,
  ElDatePicker,
  ElMessage,
  ElCard,
  ElCollapse,
  ElCollapseItem,
} from "element-plus/dist/index.full.js";

</script>
