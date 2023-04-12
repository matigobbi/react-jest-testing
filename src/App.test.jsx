import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';

describe("App test", () => {
    test("should show title all the time", () => {
        
        render(<App/>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })

    test("Url is correct", ()=> {
      render(<App/>);
      
      const linkElement = screen.getByTestId(/learn-link/i)
      console.log(linkElement);
      expect(linkElement).toBeDefined()
    })
})

