import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export function usetheme() {
    const value = useContext(ThemeContext);

    return value;
}