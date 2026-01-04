import { configureStore } from "@reduxjs/toolkit";

// configureStore - это функция из Redux Toolkit, которая упрощает создание хранилища.
// Она автоматически настраивает Redux DevTools (для отладки в браузере)
// и добавляет некоторые полезные промежуточные слои (middleware).
export const store = configureStore({
  reducer: {
    // Здесь будут находиться все ваши "слайсы" (части состояния)
    // Например: user: userReducer, products: productsReducer
  },
  // Мы также можем добавить сюда middleware для обработки асинхронных действий,
  // например, для RTK Query.
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(someMiddleware),
});

// Определяем типы для корневого состояния (RootState) и диспетчера (AppDispatch),
// чтобы TypeScript мог правильно проверять типы во всем приложении.
// Это нужно для строгой типизации Redux.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
