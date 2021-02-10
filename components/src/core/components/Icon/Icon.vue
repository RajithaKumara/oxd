<template>
  <div>Test</div>
  <i class="bi bi-alarm"></i>
  <svg class="bi" width="32" height="32" fill="currentColor">
    <use :xlink:href="href" />
  </svg>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import icons from 'bootstrap-icons/bootstrap-icons.svg';

export default defineComponent({
  name: 'oxd-icon',

  data() {
    return {
      checkedNames: [],
      selectedAll: false,
    };
  },

  computed: {
    href() {
      console.log(icons);
      return `${icons}#heart-fill`;
    },
  },

  //   emits: ['click', 'selected'],

  //   methods: {
  //     onClick(item: any) {
  //       console.log(this.checkedNames);
  //       console.log(this.selectedAll);
  //       return (e: Event) => {
  //         this.$emit('click', {item, native: e});
  //       };
  //     },
  //     onChecked(item: any, e: Event) {
  //       this.$emit('selected', {item, native: e});
  //     },
  //   },
});
</script>

<style src="./icon.scss" lang="scss" scoped></style>
