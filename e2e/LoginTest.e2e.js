describe('Login Testes', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should login successfully', async () => {
    await expect(element(by.text('Buscar usuário'))).toBeVisible();
    await expect(element(by.text('Crie sua conta através do seu usuário do GitHub'))).toBeVisible();

    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('davir8');
    await element(by.id('username')).tapReturnKey();

    await expect(element(by.text('Cadastrar'))).toBeVisible();
    await element(by.id('submit')).tap();

    await expect(element(by.id('title'))).toNotExist();
    await expect(element(by.id('description'))).toNotExist();
    await expect(element(by.id('username'))).toNotExist();
    await expect(element(by.text('Adicionar novo'))).toBeVisible();
  });

});