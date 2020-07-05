# Web Project

網頁專案，以Django 架起locel server，主要功能由javascript建構。 本專案包含:

**0. 地區天期即時查詢** : fetch外部API，獲得即時資訊並更改整體版面。

**1. 備忘錄(Vue.js)** : 新增、刪除、註記備忘錄。

**2. 便條籤紀錄器** : 提供新增、刪除便條籤服務。並支援拖曳移動、拖曳改變順序、拖曳刪除。

**3. 圖書儲存系統** : 將圖書資訊做成表格，包含新增、刪除功能。


請根據以下步驟安裝環境、運作local server，並連結進入，謝謝。


1. pip install -r requirements.txt

2. python manage.py runserver

3. 連結個專案 url

## 0. 地區天氣查詢 https://aaa123848.github.io/weather/:

**連結外部api, http://api.openweathermap.org 獲得即時地區天氣訊息**

**查詢欄送出地區， 立即回饋及時天氣狀況**

**圖片隨即時天氣狀況改變**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/cloud.PNG)
![bookList](https://github.com/aaa123848/Web_project/blob/master/img/rain.PNG)
![bookList](https://github.com/aaa123848/Web_project/blob/master/img/normal.PNG)

## 1. Vue.js Project 備忘錄 https://aaa123848.github.io/listApp/:

**正上方新增備忘錄方塊**

**每個備忘錄方塊有checkbox, 確認後備忘錄換色**

**備忘錄刪除按鈕**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/listapp1.PNG)
![bookList](https://github.com/aaa123848/Web_project/blob/master/img/listapp2.PNG)
![bookList](https://github.com/aaa123848/Web_project/blob/master/img/listapp3.PNG)


## 2. 便條籤紀錄器(暫不支援手機) url=> https://aaa123848.github.io/magicNote/ ; 127.0.0.1:8000/magicnote/ :

**新增便利貼到 main board**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/mn_1.PNG)

**main board 的便利貼可以拖曳變換順序**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/mn_2.PNG)

**寫入區塊和垃圾桶區塊可以拖曳改變位置**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/mn_3.PNG)

**將main board的便利貼拖入垃圾桶可做刪除動作**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/mn_4.PNG)

## 1. 圖書儲存系統 url=> https://aaa123848.github.io/booklist/ ; 127.0.0.1:8000/booklist/ :

**左邊欄位填寫新增資料，右邊欄位顯示已儲存的書籍資料**

**每筆資料都會帶一個刪除按鈕**

**資料儲存於local storage 所以重新request不會導致資料消失**

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/bls_1.PNG)

![bookList](https://github.com/aaa123848/Web_project/blob/master/img/bls_3.PNG)




