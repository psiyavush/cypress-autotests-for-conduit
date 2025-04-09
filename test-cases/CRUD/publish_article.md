Publish article test case

# It should do publish article:

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Repeat 2-9 from [login user](../Sign_up/login_user.md)
3. Url should be `/#/` — home page

## Open editor

4. Click **New Article** item in app header menu
5. Url should be `/#/editor`
6. Page should have add article form

## Fill form

7. Type `{title}` into **Title** form field
8. Type `{description}` into **Description** form field
9. Type `{body}` into **Body** form field
10. Type `{tags}` into **Tags** form field

## Save article

11. Click on **Publish Article** button

## Check article data

12. Url should be `/#/article/{slug}`
13. Page heading should be `{title}`
14. Article body should contains `{body}` rendered Markdown
15. Article should have `{tags}`

# Where:

* `{title}` — string with length from 20 to 50 chars
* `{description}` — string with length from 20 to 255 chars
* `{body}` — string in Markdown with length from 300 to 1000 chars
* `{tags}` — list keywords separated by comma
* `{slug}` — article url path address

### To do:

* [ ] Clarify fields validation templates on back-end.


Перевод
--------------------------------

# Тестовый случай публикации статьи

## Должен выполнить публикацию статьи:

### Перед

1. Откройте https://cypress-testing-website.vercel.app/
2. Повторите шаги 2-9 из [вход пользователя](../Sign_up/login_user.md)
3. URL должен быть `/#/` — главная страница

### Открыть редактор

4. Нажмите на элемент **New Article** в меню заголовка приложения
5. URL должен быть `/#/editor`
6. На странице должна быть форма добавления статьи

### Заполните форму

7. Введите `{title}` в поле формы **Title**
8. Введите `{description}` в поле формы **Description**
9. Введите `{body}` в поле формы **Body**
10. Введите `{tags}` в поле формы **Tags**

### Сохранить статью

11. Нажмите на кнопку **Publish Article**

### Проверьте данные статьи

12. URL должен быть `/#/article/{slug}`
13. Заголовок страницы должен быть `{title}`
14. Тело статьи должно содержать `{body}` отформатированный Markdown
15. Статья должна иметь `{tags}`

# Где:

* `{title}` — строка длиной от 20 до 50 символов
* `{description}` — строка длиной от 20 до 255 символов
* `{body}` — строка в Markdown длиной от 300 до 1000 символов
* `{tags}` — список ключевых слов, разделенных запятыми
* `{slug}` — адрес URL статьи

### Сделать:

* [ ] Уточнить шаблоны валидации полей на сервере.