## Структура
```   
├── README.md
├── manual
│   ├── _book
|   |   ├── gitbook
|   |   |   ├── gitbook-plugin-ba-scripts
|   │   │   └── ...
│   │   └── ...
│   ├── _i18n
│   ├── _layouts
│   │   └── website
|   |   |   ├── page.html 
|   |   |   └── summary.html
│   ├── md
│   ├── styles
│   │   └── scss
│   ├── book.json
│   ├── gulpfile.js
│   ├── SUMMARY.md
│   └── README.md

```
Дефолтная тема для honkit — `node_modules/@honkit/honkit-plugin-theme-default`.

Разметка переписывает дефолтную по блокам, они хранятся в `_layouts/website`.
Структура идентична дефолтной теме. `page.html` — основная разметка страницы, `summary.html` — разметка блока навигации по страницам в левой части. 

Исходные стили в `styles/scss`. Компилируются в `styles/website.css`

После билда проект хранится в папке `_book`.

Файлы md для страниц руководства пользователя могут храниться в виде любой удобной структуры внутри папки `md`. Каждый файл — отдельная страница руководства.

### `gitbook`
Код подключенных плагинов и зависимостей.

### `gitbook-plugin-ba-scripts`
Кастомные скрипты (подключаются через npm плагин).

### `_i18n`
Переводы текстов стандартных элементов.

### `book.json`
Здесь подключаются сторонние плагины и настраивается конфигурация самой книги через параметры (https://honkit.netlify.app/config.html).

### `SUMMARY.md`
Настройки навигации из левой части (названия разделов и ссылки на них).

### `README.md`
Контент первой страницы (./index.html).



## Установка проекта
```
npm install
```

## Для разработки 
```
npx honkit serve
```

## Для добавления стилей
В таком случае каждый раз при изменении стилей делается билд и переходы по страницам не работают. 
Нужно открывать скомпиленные html-файлы из папки _book.

```
gulp
```

## Для продакшена
```
npx honkit build
```