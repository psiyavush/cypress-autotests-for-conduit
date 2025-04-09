Navigate in list by paging test case

# It should navigate in list by paging

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Url should be `/#/` — main page
3. Available pages in pager > 10
4. Active page in pager should be 1st

## Select random article

4. List should have 10 article cards
5. Select random article as `{random_article_title}`

## Navigate to random page

6. Click random page button from 1 to 10 as `{random_page_number}`
7. Active page in pager should be `{random_page_number}`
8. Check article with `{random_article_title}` is not presented in list

## Navigate back to 1st page

8. Click 1st page button
9. Active page in pager should be 1st
10. Check article with `{random_article_title}` is presented in list

# Where:

* `{random_article_title}` — title of selected random article

Перевод
--------------------------------

Вот перевод на русский, сохранив форматирование:

---

Тестовый случай "Навигация по списку с помощью пагинации"

# Должно происходить навигация по списку с помощью пагинации

## Перед началом

1. Откройте https://cypress-testing-website.vercel.app/
2. URL должен быть `/#/` — главная страница
3. Доступные страницы в пагинаторе > 10
4. Активная страница в пагинаторе должна быть 1-й

## Выбор случайной статьи

5. Список должен содержать 10 карточек статей
6. Выберите случайную статью как `{random_article_title}`

## Навигация на случайную страницу

7. Нажмите кнопку случайной страницы от 1 до 10 как `{random_page_number}`
8. Активная страница в пагинаторе должна быть `{random_page_number}`
9. Убедитесь, что статья с `{random_article_title}` не представлена в списке

## Навигация обратно на 1-ю страницу

10. Нажмите кнопку 1-й страницы
11. Активная страница в пагинаторе должна быть 1-й
12. Убедитесь, что статья с `{random_article_title}` представлена в списке

# Где:

* `{random_article_title}` — заголовок выбранной случайной статьи

---