/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './component';

const errorMessage = 'error message!';

describe('Test <ErrorMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage errorMessage={errorMessage} />);
  });

  it('should render an error message coming from props', () => {
    expect(wrapper.containsMatchingElement(<p>{errorMessage}</p>)).toBe(true);
  });
});
