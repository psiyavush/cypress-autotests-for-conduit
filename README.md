# Cypress Autotests for Conduit

The project demonstrates the use of Cypress for web application testing.

Project goal: testing the website [Conduit](https://cypress-testing-website.vercel.app/)

Conduit is a blog platform, a clone of Medium.com. For this [project](https://github.com/psiyavush/cypress-testing-website), Conduit was set up as a separate project

---

Проект демонстрирует использование Cypress для тестирования веб-приложения. 

Цель проекта: тестирование веб-сайта [Conduit](https://cypress-testing-website.vercel.app/)

Conduit — это блог-платформа, клон Medium.com. Для этого проекта Conduit был собран в отдельный [проект](https://github.com/psiyavush/cypress-testing-website)

## Test cases

Test cases for automated tests are in this [folder](./test-cases/)

---

Тест кейсы для автотестов в этой [папке](./test-cases/)

## Before Run

* Register the user on the [website](https://cypress-testing-website.vercel.app/) manually
* Fill in the data of the user you created in the corresponding fields of the [me-user.json](./cypress/fixtures/me-user.json)
---
* Зарегистрируйте пользователя на [сайте](https://cypress-testing-website.vercel.app/) в ручном режиме
* Заполните данными созданного вами пользователя в соответствующих полях файла [me-user.json](./cypress/fixtures/me-user.json)


## Run

* All terminal commands are executed in the directory where your project is located
* You must have node.js installed
* Installation `npm install`
* Run Cypress interface `npx cypress open`
--

* To run all tests in headless mode `npx cypress run --headless`

---

* Все команды терминала выполняются в каталоге, где находится ваш проект
* У вас должен быть установлен node js
* Установка `npm install`
* Запуск интерфейса Cypress `npx cypress open`
--

* Для запусков всех тестов в режиме headless `npx cypress run --headless` 