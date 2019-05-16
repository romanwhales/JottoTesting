import React from 'react';
import {shallow} from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import {findByTestAttr,checkProps} from '../test/testUtils';
// import checkPropTypes from 'check-prop-types';


const defaultProps = {
    success: false
}


const setUp = (props = {})=> {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps}/>)
}

test('renders without error',()=>{
    const wrapper = setUp({
        success:false
    });
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);
})

test('renders no text when `success` prop is false',()=>{
    const wrapper = setUp({
        success: false
    });
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
})

test('renders non-empty congrats message when `success` prop is true',()=>{
    const wrapper = setUp({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props',()=> {
    const expectedProps = {success: false};
    checkProps(Congrats,expectedProps);
})