import Button from '@orangehrm/oxd/core/components/Button/Button';
import {
  SIZES,
  TYPES,
  SIZE_LARGE,
  SIZE_SMALL,
  TYPE_MAIN,
  TYPE_SECONDARY,
  TYPE_DANGER,
  TYPE_GHOST,
  TYPE_GHOST_DANGER,
  TYPE_LABEL,
  TYPE_LABEL_DANGER,
} from '@orangehrm/oxd/core/components/Button/types';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: {type: 'select', options: SIZES},
    },
    type: {
      control: {type: 'select', options: TYPES},
    },
    style: {control: {type: 'object'}},
    disabled: {control: {type: 'boolean'}},
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {'oxd-button': Button},
  template: '<oxd-button v-bind="$props" />',
});

export const Main = Template.bind({});
Main.args = {
  type: TYPE_MAIN,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: TYPE_SECONDARY,
  label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: TYPE_GHOST,
  label: 'Button',
};

export const GhostFeedback = Template.bind({});
GhostFeedback.args = {
  type: TYPE_GHOST_DANGER,
  label: 'Button',
};
GhostFeedback.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['ghost-info', 'ghost-danger', 'ghost-warn', 'ghost-success'],
    },
  },
};

export const Feedback = Template.bind({});
Feedback.args = {
  type: TYPE_DANGER,
  label: 'Button',
};
Feedback.argTypes = {
  type: {
    control: {type: 'select', options: ['info', 'danger', 'warn', 'success']},
  },
};

export const Label = Template.bind({});
Label.args = {
  type: TYPE_LABEL,
  label: 'Button',
};

export const LabelFeedback = Template.bind({});
LabelFeedback.args = {
  type: TYPE_LABEL_DANGER,
  label: 'Button',
};
LabelFeedback.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['label-info', 'label-danger', 'label-warn', 'label-success'],
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: SIZE_LARGE,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: SIZE_SMALL,
  label: 'Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: 'Button',
  style: {backgroundColor: 'palegreen'},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
};
