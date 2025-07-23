# Task Manager

## Запуск приложения:
    yarn install
    npx json-server db.json
    yarn dev
## Стек:
- React
- TS
- CSS - modules
- AntDesign
- React-Router v6
- Vite
- ReactHookForm
- Jotai (State-manager) 

## Структура приложения:
```
.
└── .../
    ├── public/ - Каталог, в котором лежат файлы, изменяемые и перемещаемые бандлером
    └── src/ - Корневая папка с кодом
        ├── assets/
        ├  ├── fonts/ - шрифты
        ├  ├── icons/ - иконки svg
        ├── navigation/ - навигация
        ├── screens/ - страницы
        ├── services/ - сервисы (HTTP)
        ├── shared/ - Переиспользуемые компоненты, кастомные хуки
        ├── styles/ - глобальные стили
        ├── types/ - глобальные типы
        ├── App.tsx
        ├── db.json - имитация backend`а
        ├── tsconfig.ts - настройки TS
        ├── vite-env.d.ts
        └── main.tsx
```

