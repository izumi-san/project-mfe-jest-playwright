import { test, expect } from "@playwright/experimental-ct-react";

test.describe('BmcSection tests', () => {

    test.beforeEach(async ({ page }) => {
        test.setTimeout(60000);
        await page.goto('http://localhost:3000');

        expect(page.url()).toBe('http://localhost:3000/');
    });
    
    test('should successfully calculate imc', async ({ page }) => {
        await page.fill('input[placeholder="EX: 1.65m"]', '1.65');
        await page.fill('input[placeholder="EX: 70.0Kg"]', '70');


        const submitButton = await page.waitForSelector('.submit-button', { state: 'visible', timeout: 10000 });

        if (!(await submitButton.isEnabled())) {
            console.log("Botão de calcular não está habilitado");
            throw new Error("Botão de calcular não está habilitado");
        }

        await submitButton.click();
        
        await expect(page.locator('text=O seu IMC é 25.7 kg/m2')).toBeVisible();
        await expect(page.locator('text=De acordo com a OMS o seu IMC indica que vc está com Sobrepeso')).toBeVisible();
    });

    test('should reset form', async ({ page }) => {
        await page.fill('input[placeholder="EX: 1.65m"]', '1.65');
        await page.fill('input[placeholder="EX: 70.0Kg"]', '70');


        const submitButton = await page.waitForSelector('.submit-button', { state: 'visible', timeout: 10000 });

        if (!(await submitButton.isEnabled())) {
            console.log("Botão de calcular não está habilitado");
            throw new Error("Botão de calcular não está habilitado");
        }

        await submitButton.click();
        
        await expect(page.locator('text=O seu IMC é 25.7 kg/m2')).toBeVisible();
        await expect(page.locator('text=De acordo com a OMS o seu IMC indica que vc está com Sobrepeso')).toBeVisible();

        await page.click('button:has-text("Calcular novamente")');
        
        await expect(page.locator('input[placeholder="EX: 1.65m"]')).toHaveValue('');
        await expect(page.locator('input[placeholder="EX: 70.0Kg"]')).toHaveValue('');
        await expect(page.locator('button:has-text("Enviar")')).toBeVisible();

    });
    test('should show erro message', async ({ page }) => {
        await page.fill('input[placeholder="EX: 1.65m"]', '1.65');
        await page.fill('input[placeholder="EX: 70.0Kg"]', 'asdfgghjj');

        const submitButton = await page.waitForSelector('.submit-button', { state: 'visible', timeout: 10000 });

        if (!(await submitButton.isEnabled())) {
            console.log("Botão de calcular não está habilitado");
            throw new Error("Botão de calcular não está habilitado");
        }

        await submitButton.click();
        
        await expect(page.locator('text=Por favor, preencha os campos corretamente.')).toBeVisible();
    });
});