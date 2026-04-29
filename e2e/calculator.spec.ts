import { test, expect } from '@playwright/test';

test('vérifie une addition', async ({ page }) => {
    // 1. Va sur ton application locale
    await page.goto('http://localhost:5173');

    // 2. Clique sur "5", puis "+", puis "9", puis "="
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '=' }).click();

    // 3. Vérifie que l'écran (qui a le data-testid="display") affiche bien "14"
    await expect(page.getByTestId('display')).toHaveText('14');

    // 4. Vérifie que l'historique s'est bien mis à jour
    // On s'attend à ce qu'un élément de liste (li) contienne le texte exact
    await expect(page.locator('li')).toHaveText('5 + 9 = 14');

    // 5. Teste la suppression de l'historique
    await page.getByRole('button', { name: '🗑️ Hist.' }).click();
    await expect(page.locator('li')).not.toBeVisible();
});

test('vérifie une soustraction', async ({ page }) => {
    // 1. Va sur ton application locale
    await page.goto('http://localhost:5173');
    // 2. Clique sur "1","0","-","6", puis "="
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '0' }).click();
    await page.getByRole('button', { name: '-' }).click();
    await page.getByRole('button', { name: '6' }).click();
    await page.getByRole('button', { name: '=' }).click();

    // 3. Vérifie que l'écran affiche "4"
    await expect(page.getByTestId('display')).toHaveText('4');

    // 4. Vérifie que l'historique s'est bien mis à jour
    await expect(page.locator('li')).toHaveText('10 - 6 = 4');

});

test('vérifie l\'effacement de la saisie', async ({ page }) => {
    // 1. Va sur ton application locale
    await page.goto('http://localhost:5173');

    // 2. Clique sur "5", "+", "9", puis "C"
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: 'C' }).click();

    // 3. Vérifie que l'écran affiche "0"
    await expect(page.getByTestId('display')).toHaveText('0');
});