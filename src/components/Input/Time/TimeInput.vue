<!--
/*
 * This file is part of OrangeHRM Inc
 *
 * Copyright (C) 2020 onwards OrangeHRM Inc
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see  http://www.gnu.org/licenses
 */
-->

<template>
  <div
    v-click-outside="onFocusOut"
    class="oxd-time-wrapper"
  >
    <div class="oxd-time-input">
      <oxd-input
        ref="oxdInput"
        :has-error="hasError"
        :disabled="disabled"
        :readonly="readonly"
        :value="timeDisplay"
        :placeholder="placeholder"
        @change="onTimeInput"
        @click="toggleDropdown"
      />
      <oxd-icon
        :class="timeIconClasses"
        name="clock"
        @click="toggleDropdown"
      />
    </div>
    <oxd-time-picker
      v-if="open"
      :step="step"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from 'vue';
import Icon from '@/components/Icon/Icon.vue';
import Input from '@/components/Input/Input.vue';
import {parseDate, formatDate} from '@/utils/date';
import type {ComponentPublicInstance, ComputedRef, Ref} from 'vue';
import clickOutsideDirective from '@/directives/click-outside';
import TimePicker from '@/components/Input/Time/TimePicker.vue';

export interface TimeInputBindings {
  open: Ref<boolean>;
  oxdInput: Ref<ComponentPublicInstance | undefined>;
  timeIconClasses: ComputedRef<Record<string, boolean>>;
  timeDisplay: ComputedRef<string | null>;
  onFocusOut: () => void;
  onTimeInput: (event: Event) => void;
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
}

export default defineComponent({
  name: 'OxdTimeInput',

  components: {
    'oxd-icon': Icon,
    'oxd-input': Input,
    'oxd-time-picker': TimePicker,
  },

  directives: {
    'click-outside': clickOutsideDirective,
  },

  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    hasError: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
  },

  emits: [
    'blur',
    'update:modelValue',
    'timeselect:opened',
    'timeselect:closed',
  ],

  setup(props, {emit}): TimeInputBindings {
    const open = ref(false);
    const oxdInput = ref<ComponentPublicInstance>();

    const timeIconClasses = computed(() => ({
      'oxd-time-input--clock': true,
      '--disabled': props.disabled,
      '--readonly': props.readonly,
    }));

    const timeDisplay = computed(() => {
      const parsedDate = parseDate(props.modelValue, 'HH:mm');
      return parsedDate ? formatDate(parsedDate, 'hh:mm a') : null;
    });

    const closeDropdown = () => {
      if (!open.value) return;
      open.value = false;
      emit('timeselect:closed');
    };

    const openDropdown = () => {
      if (open.value) return;
      open.value = true;
      emit('timeselect:opened');
    };

    const toggleDropdown = () => {
      if (props.disabled) return;
      if (!open.value) {
        (oxdInput.value as ComponentPublicInstance | undefined)?.$el?.focus?.();
        openDropdown();
      } else {
        closeDropdown();
      }
    };

    const onFocusOut = () => {
      if (open.value) {
        closeDropdown();
      }
    };

    const onTimeInput = ($event: Event) => {
      const input = ($event.target as HTMLInputElement).value;
      const parsedDate = parseDate(input, 'hh:mm a');
      emit(
        'update:modelValue',
        parsedDate ? formatDate(parsedDate, 'HH:mm') : null,
      );
    };

    return {
      open,
      oxdInput,
      timeIconClasses,
      timeDisplay,
      onFocusOut,
      onTimeInput,
      toggleDropdown,
      openDropdown,
      closeDropdown,
    } as TimeInputBindings;
  },
});
</script>

<style src="./time-input.scss" lang="scss" scoped></style>
