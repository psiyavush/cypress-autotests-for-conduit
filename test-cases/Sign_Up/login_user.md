# User sign-in test case

## It should do login user:
### Before
1. Open https://cypress-testing-website.vercel.app/

### Open login form

2. Click **Sign In** link in app header
3. Url should be `/#/login`
4. Page heading should be **Sign in**

### Fill login form

5. Page should have form
6. Type `{email}` into **Email** form field
7. Type `{password}` into **Password** form field

### Submit form

8. Click on **Sign in** button

### Check user has been login

9. Header should contains `{user_name}`

#### Where:
* `{email}`
  * valid email
  * was registered before
* `{password}` — current user password
* `{username}` — registered user name for `{email}`


Перевод
=============

# Тест-кейс входа пользователя

## Он должен выполнить вход пользователя:
### Перед этим
1. Откройте https://cypress-testing-website.vercel.app/

### Откройте форму входа

2. Нажмите на ссылку **Sign In** в заголовке приложения
3. URL должен быть `/#/login`
4. Заголовок страницы должен быть **Sign in**

### Заполните форму входа

5. На странице должна быть форма
6. Введите `{email}` в поле **Email**
7. Введите `{password}` в поле **Password**

### Отправьте форму

8. Нажмите на кнопку **Sign in**

### Проверьте, что пользователь вошел в систему

9. В заголовке должно содержаться `{user_name}`

#### Где:
* `{email}`
  * действительный адрес электронной почты
  * был зарегистрирован ранее
* `{password}` — текущий пароль пользователя
* `{username}` — зарегистрированное имя пользователя для `{email}`