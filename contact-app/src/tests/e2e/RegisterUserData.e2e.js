import { test, expect } from "@playwright/experimental-ct-react";
import { mockData } from "../mockData";


test.describe('ContactForm tests', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('http://localhost:4000');

    expect(page.url()).toBe('http://localhost:4000/');

    const formVisible = await page.isVisible('.form-contact');
    if (!formVisible) {
      console.log(await page.content());
      throw new Error("Formulário de contato não está visível");
    }

  });

  test('should submit the contact form and display message with success', async ({ page }) => {
    await page.fill('input[placeholder="Nome"]', mockData.name);
    await page.fill('input[placeholder="Email"]', mockData.email);

    await page.waitForTimeout(2000);

    const submitButton = await page.waitForSelector('.submit-button', { state: 'visible', timeout: 10000 });

    if (!(await submitButton.isEnabled())) {
      console.log("Botão de enviar não está habilitado");
      throw new Error("Botão de enviar não está habilitado");
    }

    await submitButton.click();

    const confirmationMessage = `Valeu ${mockData.name}! Vamos te avisar assim que tivermos novidades no seu email: ${mockData.email}.`;
    await page.waitForSelector(`text=${confirmationMessage}`);

    await expect(page.locator(`text=${confirmationMessage}`)).toBeVisible();
  });

  test('should submit the contact form and display message with failure', async ({ page }) => {
    await page.fill('input[placeholder="Email"]', mockData.email);

    await page.waitForTimeout(2000);

    const submitButton = await page.waitForSelector('.submit-button', { state: 'visible', timeout: 10000 });

    if (!(await submitButton.isEnabled())) {
      console.log("Botão de enviar não está habilitado");
      throw new Error("Botão de enviar não está habilitado");
    }

    await submitButton.click();

    const failureMessage = `Por favor, preencha os campos corretamente.`;
    await page.waitForSelector(`text=${failureMessage}`);

    await expect(page.locator(`text=${failureMessage}`)).toBeVisible();
  });


});