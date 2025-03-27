import React from "react";
import { App, Button, Card, ConfigProvider, DatePicker, Layout, Space, theme } from "antd";
import AppHeader from "@/components/AppHeader";
// import Header from "@/components/Header";
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <Layout>
          <Header>
            {/* <div className="flex justify-between items-center">
              <h1>My App</h1>
              <Button onClick={handleClick}>Change Theme to {isDarkMode ? "Light" : "Dark"}</Button>
            </div> */}
            <AppHeader />
          </Header>
          <Content>
            <Space>
              <DatePicker />
              <Button type="primary">Primary Button</Button>
              <Button type="primary">Button</Button>
              <Card style={{ width: "max-content" }}>
                <Button onClick={handleClick}>Change Theme to {isDarkMode ? "Light" : "Dark"}</Button>
              </Card>
            </Space>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </ConfigProvider>
    </>
  );
}
