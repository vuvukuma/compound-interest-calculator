import { Colors } from '../../constants';
import styled from 'styled-components';
import Dropdown from 'icons/dropdown.svg';

export const Select = styled.select`
    -moz-appearance:none;
    -webkit-appearance:none;
    border-radius: 3px;
    height: 34px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 20px;
    appearance:none;
    background: transparent;
    background-repeat: no-repeat;
    background-image: url(${Dropdown}), linear-gradient(to bottom, #ffffff, #f9fafb);;
    background-position-x: calc(100% - 2px), 0;
    background-position-y: 7px, 0;
    border: solid 1px ${Colors.grey};
    border-radius: 2px 0 0 2px;
`;