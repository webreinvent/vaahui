<template>
  <h3 class="title is-3">Element Plus</h3>

  <el-radio-group v-model="direction">
    <el-radio label="ltr">left to right</el-radio>
    <el-radio label="rtl">right to left</el-radio>
    <el-radio label="ttb">top to bottom</el-radio>
    <el-radio label="btt">bottom to top</el-radio>
  </el-radio-group>
  <br>
  <el-button type="primary" @click="drawer = true">
    open
  </el-button>
  <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </el-button>

  <el-drawer
      v-model="drawer"
      title="I am the title"
      :direction="direction"
      :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
  <el-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <el-radio v-model="radio1" label="Option 1" size="large"
        >Option 1</el-radio
        >
        <el-radio v-model="radio1" label="Option 2" size="large"
        >Option 2</el-radio
        >
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>


  <hr>
  <h3 class="title is-3">No Title</h3>
  <el-button type="primary" @click="drawer3 = true">
    open
  </el-button>

  <el-drawer v-model="drawer3" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>


  <hr>

  <h3 class="title is-3">Customized Content</h3>
  <el-button text @click="table = true"
  >Open Drawer with nested table</el-button
  >
  <el-button text @click="dialog = true"
  >Open Drawer with nested form</el-button
  >
  <el-drawer
      v-model="table"
      title="I have a nested table inside!"
      direction="rtl"
      size="50%"
  >
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-drawer>

  <el-drawer
      ref="drawerRef"
      v-model="dialog"
      title="I have a nested form inside!"
      :before-close="handleClose2"
      direction="ltr"
      custom-class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <el-form v-model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Area" :label-width="formLabelWidth">
          <el-select
              v-model="form.region"
              placeholder="Please select activity area"
          >
            <el-option label="Area1" value="shanghai" />
            <el-option label="Area2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="onClick">{{
            loading ? 'Submitting ...' : 'Submit'
          }}</el-button>
      </div>
    </div>
  </el-drawer>

  <hr>

  <h3 class="title is-3">Customized Header</h3>
  <el-button @click="visible = true">
    Open Drawer with customized header
  </el-button>
  <el-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    This is drawer content.
  </el-drawer>


  <hr>


  <h3 class="title is-3">
    Nested Drawer
  </h3>
  <el-button type="primary" @click="drawer4 = true">
    open
  </el-button>

  <el-drawer v-model="drawer4" title="I'm outer Drawer" size="50%">
    <div>
      <el-button @click="innerDrawer = true">Click me!</el-button>
      <el-drawer
          v-model="innerDrawer"
          title="I'm inner Drawer"
          :append-to-body="true"
          :before-close="handleClose3"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue';
import { CircleCloseFilled } from '@element-plus/icons-vue'
import {
  ElMessageBox,
    ElRadio,ElButton,ElDrawer,ElRadioGroup,ElSelect,ElFormItem,ElForm,ElOption,ElTable,ElTableColumn,ElInput
} from "element-plus/dist/index.full.js";

const drawer = ref(false)
const drawer2 = ref(false)
const drawer3 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
      .then(() => {
        drawer2.value = false
      })
      .catch(() => {
        // catch error
      })
}

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClick = () => {
  drawerRef.value!.close()
}

const handleClose2 = (done) => {
  if (loading.value) {
    return
  }
  ElMessageBox.confirm('Do you want to submit?')
      .then(() => {
        loading.value = true
        timer = setTimeout(() => {
          done()
          // 动画关闭需要一定的时间
          setTimeout(() => {
            loading.value = false
          }, 400)
        }, 2000)
      })
      .catch(() => {
        // catch error
      })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}

const visible = ref(false);


const innerDrawer = ref(false)
const drawer4 = ref(false)
const handleClose3 = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}

</script>
