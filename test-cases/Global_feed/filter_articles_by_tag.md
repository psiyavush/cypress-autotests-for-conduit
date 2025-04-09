Filter articles by tag test case

# It should filter articles by tag

## Before

1. Open https://cypress-testing-website.vercel.app/
2. Url should be `https://cypress-testing-website.vercel.app/` — main page

## Select random tag

3. Popular tag list should be > 5
4. Click random tag as `{random_tag_name}`

## Check articles list

5. Feed toggle menu should have active item with `{random_tag_name}`
6. All article in list should have tag with `{random_tag_name}`

# Where:

* `{random_tag_name}` — title of clicked random tag

Перевод
--------------------------------

Тестовый случай "Фильтрация статей по тегу"

# Должно происходить фильтрация статей по тегу

## Перед началом

1. Откройте https://cypress-testing-website.vercel.app/
2. URL должен быть `https://cypress-testing-website.vercel.app/` — главная страница

## Выбор случайного тега

3. Список популярных тегов должен содержать > 5
4. Нажмите на случайный тег как `{random_tag_name}`

## Проверка списка статей

5. В меню переключения ленты должен быть активный элемент с `{random_tag_name}`
6. Все статьи в списке должны иметь тег `{random_tag_name}`

# Где:

* `{random_tag_name}` — название выбранного случайного тега

---