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

  <hr/>
  <h3 class="title is-3">Element Plus</h3>

  <el-dropdown>
    <el-button type="primary">
      Dropdown List
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

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
