# japanese_cuisine_delevery

## 目錄

- [japanese_cuisine_delevery](#japanese_cuisine_delevery)
    - [目錄](#目錄)
    - [示範](#示範)
    - [功能](#功能)
    - [技術](#技術)
    - [安裝](#安裝)
    - [使用方法](#使用方法)
    - [API 文件](#API-文件)
    - [圖示來源](#圖示來源)
    - [AWS VPC架構](#AWS-VPC架構)

## 示範

餐廳外送平台網頁 https://ujproject.click  
餐廳後台管理系統網頁 https://ujproject.click:5000

## 功能

- 餐廳特色展示
- 菜單展示和點餐
- 用戶註冊和登入
- 用戶下單與結帳
- 線上支付
- 購物車功能
- 訂單歷史記錄
- 店家後台管理系統
- 菜單上傳和編輯功能

## 技術

- **前端**：React, React Router, Axios, Snackbar
- **後端**：Node.js, Express, MongoDB, Google api, ECPay 綠界科技
- **部署**：AWS EC2

## 安裝

1. 克隆專案到本地端
    ```bash
    git clone https://github.com/DioBrando0918/japanese_cuisine_delivery.git
    ```
2. 進入專案目錄並安裝依賴
    ```bash
    cd ~/japanese_cuisine_delivery/frontend/
    npm install
    cd ~/japanese_cuisine_delivery/backend/
    npm install  
    cd ~/japanese_cuisine_delivery/admin/
    npm install
    ```
3. 設定環境變數，將`frontend.env.example` `backend.env.example` `admin.env.example` 複製為 `.env` 並填入必要的環境變數,請注意backend`.env`中的`FRONTEND_URL`與`BACKEND_URL`若為localhost與http開頭,可能造成金流服務異常
    

## 使用方法

1. 啟動後端伺服器
    ```bash
    cd ~/backend
    npm run server
    ```
2. 啟動前端
    ```bash
    cd ~/frontend
    npm run dev
    ```
3. 起動後台管理系統
    ```bash
    cd ~/admin
    npm run dev
    ```
4. 開啟瀏覽器並訪問 `http://localhost:443`

## API 文件

詳細的 API 文件說明可以參考 https://documenter.getpostman.com/view/34461262/2sAXqmAQba

## AWS VPC架構圖
https://drive.google.com/file/d/1KmLMVh8N86Er62PR4mXPoLLoSRBT7am-/view?usp=sharing

## 圖示來源
本專案使用的圖片、icon、字體來源於以下網站:
- [Google Fonts](https://fonts.google.com/)
- [Google Icons](https://fonts.google.com/icons)
- [FREEPIK](https://www.freepik.com/)
- [FLATICON](https://www.flaticon.com/)