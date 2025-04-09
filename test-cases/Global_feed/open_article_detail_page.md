Open article detail page test case

# It should open article detail page

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Url should be `https://cypress-testing-website.vercel.app/` — main page

## Open random article

3. **Global Feed** item should be active in feed toggle menu
4. List should have 10 article cards
5. Click random article as `{random_article_title}`

## Check article

6. Url should start `/#/article/` — article detail page
7. Page heading should be `{random_article_title}`

# Where:

* `{random_article_title}` — title of clicked random article

Перевод
--------------------------------


Тест-кейс открытия детальной страницы

# Должна открываться страница детализации статьи

## Перед началом

1. Откройте https://cypress-testing-website.vercel.app/
2. URL должен быть `https://cypress-testing-website.vercel.app/` — главная страница

## Открыть случайную статью

3. Элемент **Global Feed** должен быть активен в меню переключения ленты
4. Список должен содержать 10 карточек статей
5. Нажмите на случайную статью как `{random_article_title}`

## Проверка статьи

6. URL должен начинаться с `/#/article/` — страница детализации статьи
7. Заголовок страницы должен быть `{random_article_title}`

# Где:

* `{random_article_title}` — заголовок нажатой случайной статьи

---