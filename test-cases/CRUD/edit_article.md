Edit article test case

# It should edit article:

## Before

1. Open https://demo.realworld.io/
2. Repeat 1-9 from [login user](../Sign_up/login_user.md)
3. Url should be `/#/` — main page

## Add article

4. Repeat 4-11 from [publish article](publish_article.md)

## Find article

5. Click `{user_name}` link in app header
6. Url should be `/#@{user_name}` — user profile page
7. My articles menu item should be active
8. Click on `{title}` link in articles list
9. Click on **Edit article** button

## Edit article

10. Url should start from `/#/editor`
11. Page should have form
12. Clear all forms fields
13. Type `{new_title}` into **Title** form field
14. Type `{new_description}` into **Description** form field
15. Type `{new_body}` into **Body** form field
16. Type `{new_tags}` into **Tags** form field
17. Click on **Publish Article** button

## Check article

18. Url should be `/#/article/{slug}`
19. Page heading should be `{new_title}`
20. Article body should contain `{new_body}` rendered Markdown
21. Article should have `{new_tags}`

# Where:

* `{new_title}` — string with length from 20 to 30 chars
* `{new_description}` — string with length from 20 to 100 chars
* `{new_body}` — string in Markdown with length from 100 to 1000 chars
* `{new_tags}` — list keywords separated by comma
* `{slug}` — article url path address


Перевод
--------------------------------

# Тестовый случай редактирования статьи

## Должен редактировать статью:

### Перед

1. Откройте https://demo.realworld.io/
2. Повторите шаги 1-9 из [вход пользователя](../Sign_up/login_user.md)
3. URL должен быть `/#/` — главная страница

### Добавить статью

4. Повторите шаги 4-11 из [публикация статьи](publish_article.md)

### Найти статью

5. Нажмите на ссылку `{user_name}` в заголовке приложения
6. URL должен быть `/#@{user_name}` — страница профиля пользователя
7. Элемент меню моих статей должен быть активен
8. Нажмите на ссылку `{title}` в списке статей
9. Нажмите на кнопку **Edit article**

### Редактировать статью

10. URL должен начинаться с `/#/editor`
11. Страница должна содержать форму
12. Очистите все поля формы
13. Введите `{new_title}` в поле формы **Title**
14. Введите `{new_description}` в поле формы **Description**
15. Введите `{new_body}` в поле формы **Body**
16. Введите `{new_tags}` в поле формы **Tags**
17. Нажмите на кнопку **Publish Article**

### Проверьте статью

18. URL должен быть `/#/article/{slug}`
19. Заголовок страницы должен быть `{new_title}`
20. Тело статьи должно содержать `{new_body}`, отформатированное Markdown
21. Статья должна иметь `{new_tags}`

# Где:

* `{new_title}` — строка длиной от 20 до 30 символов
* `{new_description}` — строка длиной от 20 до 100 символов
* `{new_body}` — строка в Markdown длиной от 100 до 1000 символов
* `{new_tags}` — список ключевых слов, разделённых запятыми
* `{slug}` — URL-адрес статьи