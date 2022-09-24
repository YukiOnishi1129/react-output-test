import { describe, expect, test, afterEach } from "vitest";
import { TodoTemplate } from "./index.jsx";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("【integration test】Top Templateのテスト", () => {
  describe("Todoリスト表示テスト", () => {
    afterEach(cleanup);
    test("【正常系】", () => {
      render(<TodoTemplate />);
      // 「Todo1」のdomが表示されていること
      expect(screen.getByRole("todo-list-1")).toBeTruthy();
      // 「Todo2」のdomが表示されていること
      expect(screen.getByRole("todo-list-2")).toBeTruthy();
    });
  });
  describe("Todo追加処理のテスト", () => {
    afterEach(cleanup);
    test("【正常系】", async () => {
      render(<TodoTemplate />);
      const inputValue = "Todo3";
      const addInputForm = screen.getByRole("add-todo-input-form");

      // userEvent.typeで「ユーザーが操作する」処理を実施
      // インプットフォームに「Todo3」を入力
      await userEvent.type(addInputForm, inputValue);
      // インプットフォームにフォーカスした状態で「enter」をクリック (Todoを追加させる)
      await userEvent.type(screen.getByRole("add-todo-input-form"), "{enter}");

      expect(screen.getByRole("todo-list-3")).toBeTruthy();
      expect(screen.getByRole("todo-list-name-3").textContent).toBe(inputValue);
    });
  });
  describe("Todo削除処理のテスト", () => {
    afterEach(cleanup);
    test("【正常系】", () => {});
  });
  describe("Todo検索処理のテスト", () => {
    afterEach(cleanup);
    test("【正常系】", () => {});
  });
});
