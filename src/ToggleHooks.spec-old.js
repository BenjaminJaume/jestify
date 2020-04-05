/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Toggle from './ToggleHooks'

Enzyme.configure({ adapter: new Adapter() })

describe('Toggle', () => {
    const wrapper = shallow(<Toggle />);
    it('renders a button with "NO" as children', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('renders "YES" as button children if button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual('YES');
    });
    it('renders "NO" as button children if button is clicked again', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual('NO');
    });

    // it('', () => {
    //     expect(wrapper.find('button')).toHaveLength(1);
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.find('button').text()).toEqual('YES');
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.find('button').text()).toEqual('NO');
    // });
})

