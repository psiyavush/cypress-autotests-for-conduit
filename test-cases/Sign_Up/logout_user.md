# User logout test case

## It should do logout user:

### Before
1. Open https://cypress-testing-website.vercel.app/
2. Repeat 2-9 from [login user](login_user.md)

### Logout user
3. Click **Settings** item in app header menu
4. Url should be `/#/settings`
5. Page heading should be **Your Settings**
6. Click on **Or click here to logout.** button
7. Header should not contains `{user_name}`

#### Where:
* `{user_name}` — name logged-in user

Перевод
=============

Вот перевод на русский язык, сохраняя кодировку:

# Тестовый случай выхода пользователя

## Должен выполнить выход пользователя:

### Перед
1. Откройте https://cypress-testing-website.vercel.app/
2. Повторите шаги 2-9 из [login user](login_user.md)

### Выход пользователя
3. Нажмите на элемент **Settings** в меню заголовка приложения
4. URL должен быть `/#/settings`
5. Заголовок страницы должен быть **Your Settings**
6. Нажмите на кнопку **Or click here to logout.**
7. Заголовок не должен содержать `{user_name}`

#### Где:
* `{user_name}` — имя вошедшего пользователя