/* eslint-env jest */
import React from 'react';
import ReactTags from 'react-tokenized-input';
import { mount } from 'enzyme';

import Tags from './index';

const customStyles = {};
const label = 'Key features';
function handleSelectedTags() {}

describe('Test <Tags />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tags
        customStyles={customStyles}
        label={label}
        handleSelectedTags={handleSelectedTags}
      />,
    );
  });

  it('should check if required prop customStyles is present', () => {
    expect(wrapper.props().customStyles).toEqual(customStyles);
  });

  it('should check if required prop label is present', () => {
    expect(wrapper.props().label).toEqual(label);
  });

  it('should check if required prop handleSelectedTags() is present', () => {
    expect(wrapper.props().handleSelectedTags).toEqual(handleSelectedTags);
  });

  it('should find ReactTags component', () => {
    expect(wrapper.find(ReactTags).length).toEqual(1);
  });

  it('should find <input /> inside ReactTags component', () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });
});
