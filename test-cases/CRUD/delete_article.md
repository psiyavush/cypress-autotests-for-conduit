Delete article test case

# It should delete article:

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Repeat 2-9 from [login user](../Sign_up/login_user.md)
3. Url should be `/#/` — main page

## Add article

4. Repeat 4-11 from [publish article](publish_article.md)

## Open me profile

5. Click `{user_name}` link in app header
6. Url should be `/#@{user_name}` — user profile page

## Find my article

7. My articles menu item should be active
8. Click on article card with `{title}` in list

## Delete article

9. Click on **Delete article** button

## Check article has been deleted

10. My articles list should not have `{title}`

# Where:

* `{title}` — article title added by user
* `{user_name}` — name logged-in user


Перевод
--------------------------------

# Тестовый случай удаления статьи

## Должен удалить статью:

### Перед

1. Откройте https://cypress-testing-website.vercel.app/
2. Повторите шаги 2-9 из [вход пользователя](../Sign_up/login_user.md)
3. URL должен быть `/#/` — главная страница

### Добавить статью

4. Повторите шаги 4-11 из [публикация статьи](publish_article.md)

### Открыть мой профиль

5. Нажмите на ссылку `{user_name}` в заголовке приложения
6. URL должен быть `/#@{user_name}` — страница профиля пользователя

### Найти мою статью

7. Элемент меню моих статей должен быть активен
8. Нажмите на карточку статьи с `{title}` в списке

### Удалить статью

9. Нажмите на кнопку **Delete article**

### Проверьте, что статья была удалена

10. В списке моих статей не должно быть `{title}`

# Где:

* `{title}` — заголовок статьи, добавленный пользователем
* `{user_name}` — имя вошедшего в систему пользователя