import {mount} from '@vue/test-utils';
import Button from '@orangehrm/oxd/core/components/Button/Button.vue';
import {
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  TYPE_MAIN,
  TYPE_SECONDARY,
  TYPE_INFO,
  TYPE_DANGER,
  TYPE_WARN,
  TYPE_SUCCESS,
  TYPE_GHOST,
  TYPE_GHOST_INFO,
  TYPE_GHOST_DANGER,
  TYPE_GHOST_WARN,
  TYPE_GHOST_SUCCESS,
  TYPE_LABEL,
  TYPE_LABEL_INFO,
  TYPE_LABEL_DANGER,
  TYPE_LABEL_WARN,
  TYPE_LABEL_SUCCESS,
} from '../types';

describe('Button.vue', () => {
  it('renders OXD button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label},
    });
    expect(wrapper.text()).toMatch(label);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD small button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_SMALL},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD large button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_LARGE},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD medium button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_MEDIUM},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD main button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_MAIN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD secondary button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_SECONDARY},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD ghost button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_GHOST},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD ghost-info button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_GHOST_INFO},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD ghost-danger button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_GHOST_DANGER},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD ghost-warn button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_GHOST_WARN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD ghost-success button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_GHOST_SUCCESS},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD label button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_LABEL},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD label-info button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_LABEL_INFO},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD label-danger button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_LABEL_DANGER},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD label-warn button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_LABEL_WARN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD label-success button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, type: TYPE_LABEL_SUCCESS},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders OXD button with custom color', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, style: {backgroundColor: 'palegreen'}},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
