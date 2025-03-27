"use client";

import React from "react";
import { Button, Space, DatePicker, App } from "antd";

import { useCallback, useEffect, useState } from "react";

import { ConfigProvider, theme } from "antd";

export default function AppHeader() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeChange = useCallback((event: MediaQueryListEvent) => {
    console.log(event.matches ? true : false);
    setDarkMode(event.matches ? true : false);
  }, []);

  useEffect(() => {
    const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");
    windowQuery.addEventListener("change", darkModeChange);
    return () => {
      windowQuery.removeEventListener("change", darkModeChange);
    };
  }, [darkModeChange]);

  useEffect(() => {
    const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");
    console.log(windowQuery.matches ? true : false);
    setDarkMode(windowQuery.matches ? true : false);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.compactAlgorithm,
      }}
    >
      <Space>
        <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
        <DatePicker />
      </Space>
    </ConfigProvider>
  );
}
