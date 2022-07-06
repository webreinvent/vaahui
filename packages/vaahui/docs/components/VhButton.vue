<template>

  <h3 class="title is-3">VaahUI</h3>
  <div class="buttons">
    <button class="button is-primary">Primary</button>
    <button class="button is-link">Link</button>
  </div>

  <div class="buttons">
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>
  </div>


  <h3 class="title is-3">VaahUI</h3>
  <button class="button">Default</button>
  <button class="button--primary">Primary</button>
  <button class="button--success">Primary</button>

  <hr/>
  <h3 class="title is-3">Element Plus</h3>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button class="dark">Dark</el-button>

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
