import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Banner from '.';

export default {
    title: 'Molecules/Banner',
    component: Banner,

    // decorators: [
    //     (Story) => (
    //       <ThemeProvider theme={theme}>
    //           <Story/>
    //       </ThemeProvider>
    //     ),
    //   ],
      
} as ComponentMeta<typeof Banner>;

export const PageBanner = () => <Banner/>