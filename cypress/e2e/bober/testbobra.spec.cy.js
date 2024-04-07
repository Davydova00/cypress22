describe('spec', async () => {
  it.only('Вход пользователя,обновление профайла и новый article', () => {
    let user = {
      user: {
        email: 'goddessesgame@gmail.com',
        password: '123456',
      },
    };

    let article = {
      article: {
        title: 'тест 6666',
        description: 'опять тест 6666',
        body: 'и еще тест 6666',
        taglist: [],
      },
    };

    let userInfo = {
      user: {
        bio: 'test 666666',
        email: 'goddessesgame@gmail.com',
        image: 'Здесь должно быть фото бобра 6666',
        password: '123456',
        username: 'брат бобра 66666',
      },
    };

    cy.request(
      'POST',
      'https://conduit-api.bondaracademy.com/api/users/login',
      user
    ).then((response) => {
      const token = response.body.user.token;

      cy.request({
        url: 'https://conduit-api.bondaracademy.com/api/articles',
        headers: {
          Authorization: 'Token ' + token,
          'Content-Type': 'application/json',
        },
        body: article,
        method: 'POST',
      }).then((response) => {
        expect(response.status).to.equal(201);
      });

      cy.request({
        method: 'PUT',
        url: 'https://conduit-api.bondaracademy.com/api/user',
        headers: {
          Authorization: 'Token ' + token,
          'Content-Type': 'application/json',
        },
        body: userInfo,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.user.username).to.equal(userInfo.user.username);
        expect(response.body.user.bio).to.equal(userInfo.user.bio);
        expect(response.body.user.email).to.equal(userInfo.user.email);
        expect(response.body.user.image).to.equal(userInfo.user.image);
      });
    });
  });
});
