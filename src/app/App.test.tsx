import { render, screen } from "@testing-library/react";
// Импортируем функции для описания тестов и проверок из Vitest
import { describe, it, expect } from "vitest";
// Импортируем сам компонент, который мы хотим тестировать
import App from "./App";

// describe() - это функция, которая группирует связанные тесты.
// Первый аргумент - это описание группы тестов.
describe("App component", () => {
  // it() или test() - это функция, которая определяет один конкретный тест-кейс.
  // Первый аргумент - это описание того, что именно проверяет этот тест.
  it("renders Vite and React logos", () => {
    // 1. render(<App />) - Эта функция "рисует" ваш React-компонент (App)
    //    в виртуальном окружении jsdom. Это похоже на то, как браузер отрисовывает его,
    //    но происходит внутри теста.
    render(<App />);

    // 2. screen.getByAltText('Vite logo') - Мы используем 'screen' (который представляет
    //    собой виртуальный экран) для поиска элементов. 'getByAltText' - это метод поиска
    //    элементов по их атрибуту 'alt' (например, <img alt="Vite logo" />).
    //    Мы ищем логотип Vite.
    const viteLogo = screen.getByAltText("Vite logo");
    //    Аналогично, ищем логотип React.
    const reactLogo = screen.getByAltText("React logo");

    // 3. expect(element).toBeInTheDocument() - Это "проверка" или "ассерция".
    //    'expect()' - это функция Vitest, которая берет элемент, который мы хотим проверить.
    //    '.toBeInTheDocument()' - это "матчер" (функция проверки) из @testing-library/jest-dom,
    //    который подтверждает, что найденный элемент действительно присутствует в виртуальном DOM.
    //    Мы ожидаем, что оба логотипа будут на странице.
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  // Второй тест-кейс для проверки основного заголовка
  it("renders the main heading", () => {
    render(<App />);

    // screen.getByRole('heading', { name: /Vite \+ React/i }) - Ищем элемент
    // по его "роли" (в данном случае, заголовок, т.е. <h1>, <h2> и т.д.)
    // и по тексту, который он содержит.
    // 'name: /Vite \+ React/i' означает, что мы ищем текст "Vite + React",
    // а 'i' делает поиск нечувствительным к регистру.
    const heading = screen.getByRole("heading", { name: /Vite \+ React/i });

    // Проверяем, что заголовок найден и присутствует в документе.
    expect(heading).toBeInTheDocument();
  });
});
