<template>
  <section>
    <b-dropdown aria-role="list">
      <button class="button is-primary" slot="trigger">
        <span>Click me!</span>
        <font-awesome-icon icon="chevron-down" />
      </button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>

    <b-dropdown hoverable aria-role="list">
      <button class="button is-info" slot="trigger">
        <span>Hover me!</span>
        <font-awesome-icon icon="chevron-down" />
      </button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>

    <b-dropdown disabled aria-role="list">
      <button class="button" slot="trigger">
        <span>Disabled</span>
        <font-awesome-icon icon="chevron-down" />
      </button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>

    <b-dropdown aria-role="list">
      <p
        class="tag is-success"
        slot="trigger"
        role="button">
        Custom trigger
      </p>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </section>
</template>

<style scoped>
  .tag {
    cursor: pointer;
  }
</style>
