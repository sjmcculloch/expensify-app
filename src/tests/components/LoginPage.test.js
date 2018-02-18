import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { startLogin } from '../../actions/auth';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle startLogin on button click', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});
