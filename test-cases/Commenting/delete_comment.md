Delete comment test case

# It should delete comment:

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Repeat 1-9 from [login user](../Sign_Up/login_user.md)
3. Url should be `/#/` — home page

## Add comment

4. Repeat 4-8 from [add comment](add_comment.md)

## Delete comment

5. Find `{comment}` in list
6. Click on **Delete comment** button
7. Comments list should not have `{comment}`

# Where:

* `{comment}` — comment added by user

Перевод
--------------------------------

Тестовый случай "Удаление комментария"

# Должно происходить удаление комментария:

## Перед началом

1. Откройте https://cypress-testing-website.vercel.app/
2. Повторите шаги 1-9 из [авторизации пользователя](login_user.md)
3. URL должен быть `/#/` — главная страница

## Добавление комментария

4. Повторите шаги 4-8 из [добавления комментария](add_comment.md)

## Удаление комментария

5. Найдите `{comment}` в списке
6. Нажмите кнопку **Delete comment**
7. В списке комментариев не должно быть `{comment}`

# Где:

* `{comment}` — комментарий, добавленный пользователем

---