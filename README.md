## Cars store

Тестовое задание для компании Juzt studio\
[Demo](https://cars-production-8fd8.up.railway.app/) - рабочий пример\
[Excaledraw](https://excalidraw.com/#json=gYv_1x2XQowHI_wM-e0ak,R7pE_Ves8V7p6umwbOIhzQ) - whit board

## Используемые технологии

-   [Next.js/React](https://nextjs.org/) - back/frontend
-   [Chakra UI](https://chakra-ui.com/) - CSS/components
-   [Clerk.dev](https://clerk.com/) - auth
-   [UploadThings](https://uploadthing.com/) - image uploader
-   [Zod](https://zod.dev/) - validation
-   [Axios](https://axios-http.com/docs/intro) - http request
-   [Postman](https://www.postman.com/) - API test env

## Запуск локально

1. Сделать clone репозитория

```
git clone https://github.com/AlexJamisone/cars.git; cd cars
```

2. Установить зависимости

```
npm i
```

3. Создать файл .env и внести переменные из провайдеров [Clerk.dev](https://clerk.com/) и [UploadThings](https://uploadthing.com/)

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_••••••••••••••••••••••••••••
CLERK_SECRET_KEY=sk_test_••••••••••••••••••••••••••••••••••••••••••
UPLOADTHING_SECRET=sk_live_••••••••••••••••••••••••••••••••••••••••••
UPLOADTHING_APP_ID=•••••••••••••••••
```

4. Запустить проект

```
npm run dev
```

## Тестовый аккаунт (для демо)

```
test@gmail.com
911102221
```

## Roadmap, точки роста

-   Мобильная версия
-   Update car
-   Placeholder для детальной информации по машине
-   image Placeholder

## Authors

-   write [@alexjamison](https://t.me/alexjamison) in nvim btw ~ 35 часов with white board
