import { css } from 'styled-components';

interface ScreenSize {
    [key: string]: string;
}

export const ScreenSize: ScreenSize = {
    mobile: '360px',
    tablet: '768px',
    desktop: '1440px',
}

export const Media = Object
    .keys(ScreenSize)
    .reduce((acc: any, key: string) => {
        acc[key] = (style: any) => `
            @media (min-width: ${ScreenSize[key]}) {
                ${style};
            }
        `
        return acc
    }, {})

  
export default Media;