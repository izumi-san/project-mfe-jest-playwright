import { test, expect } from "@playwright/experimental-ct-react";

test.describe('IconButton tests', () => {
    
    test('should go to other mfe', async ({ page }) => {
        await page.goto('http://localhost:4000');
        
        await page.waitForURL('http://localhost:4000/');
        expect(page.url()).toBe('http://localhost:4000/');
        
        await page.click('img[alt="Seta para ir para outra pag"]');
        
        await page.waitForURL('http://localhost:3000/');
        expect(page.url()).toBe('http://localhost:3000/');
    });
    
});