Add comment to article test case

# It should add comment:

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Repeat 2-9 from [login user](../Sign_Up/login_user.md)
3. Url should be `/#/` — main page

## Open random article

4. Click **Global Feed** in feed toggle menu
5. Select **random article** from list

## Add comment

6. Scroll to form for posting comment
7. Type `{comment}` into **Comment** form field
8. Click on **Post Comment** button
9. Comments list should have `{comment}`

# Where:

* `{comment}` — string with length from 20 to 50 chars

Перевод
--------------------------------

Тестовый случай "Добавление комментария к статье"

# Должно происходить добавление комментария:

## Перед началом

1. Откройте https://cypress-testing-website.vercel.app/
2. Повторите шаги 2-9 из [авторизации пользователя](login_user.md)
3. URL должен быть `/#/` — главная страница

## Открытие случайной статьи

4. Нажмите **Global Feed** в меню переключения ленты
5. Выберите **случайную статью** из списка

## Добавление комментария

6. Прокрутите до формы для отправки комментария
7. Введите `{comment}` в поле формы **Comment**
8. Нажмите кнопку **Post Comment**
9. В списке комментариев должен быть `{comment}`

# Где:

* `{comment}` — строка длиной от 20 до 50 символов

---