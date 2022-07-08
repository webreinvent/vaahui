<template>

  <h3 class="title is-3">VaahUI</h3>
  <div class="alert" role="alert">
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </div>
  <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </div>
  <div class="alert--success" role="alert">
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>
  <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
    <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
  </div>
  <div class="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
    <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
  </div>


  <hr/>
  <h3 class="title is-3">Element Plus</h3>


  <el-alert title="Change a few things up and try submitting again. Change a few things up and try submitting again. Change a few things up and try submitting again." type="success" />
  <el-alert title="info alert" type="info" />
  <el-alert title="warning alert" type="warning" />
  <el-alert title="error alert" type="error" />


  <hr/>
  <el-alert title="success alert" type="success" effect="dark" />
  <el-alert title="info alert" type="info" effect="dark" />
  <el-alert title="warning alert" type="warning" effect="dark" />
  <el-alert title="error alert" type="error" effect="dark" />


</template>

<script lang="ts" setup>
import {
  ElAlert
} from "element-plus/dist/index.full.js";

</script>
