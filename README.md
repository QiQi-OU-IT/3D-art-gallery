![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)



## Giới thiệu dự án

Dự án triển lãm tranh 3D nhằm kỷ niệm **35 năm thành lập trường đại học Mở thành phố Hồ Chí Minh**
(15/6/1990 - 15/6/2025)

## Tác giả dự án 
- **Lê Việt Hải Quân** - [Email](mailto:2251052100quan@ou.edu.vn) - [Github](https://github.com/QiQi-OU-IT/)
- **Emillian Kasemi**  - [Github](https://www.github.com/theringsofsaturn)

## Công nghệ sử dụng

- [Three.js](https://threejs.org/) – dựng không gian 3D
- [Vite](https://vitejs.dev/) – công cụ build 
- [Cloudinary](https://cloudinary.com/) – lưu trữ ảnh/audio online
- `nipplejs`, `lil-gui`, `ammo.js`, `cannon.js`...

## Tính năng nổi bật

- Không gian triển lãm 3D tương tác
- Hỗ trợ VR headset
- Audio hướng dẫn
- Joystick điều khiển cho mobile
- Tải ảnh/audio lên Cloudinary qua mã nguồn

## Hướng dẫn cài đặt và sử dụng

1. **Clone dự án:**
  ```bash
  git clone https://github.com/QiQi-OU-IT/3D-art-gallery.git
  ```

2. **Cài đặt phụ thuộc:**
      ```bash
    npm install 
    ```

3. **Tạo file `.env` với các biến môi trường**
  ```bash
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret
    ```

4. **Chạy thử dự án:**
  ```bash
  npx vite
  ```
5. **Truy cập trang web dự án có dạng:**
```bash
  VITE v4.3.1  ready in 1759 ms

  ➜  Local:   http://123.4.5.6:7890/
  ➜  Network: use --host to expose  ➜  press h to show help
  ```
### Cấu trúc dự án
```
  3d-art-gallery-threejs-master/
  │
  ├── 📁 .vite/                     # Cache Vite (tự động sinh)
  ├── 📁 dist/                     # File đã build, dùng để deploy GitHub Pages
  ├── 📁 node_modules/            # Thư viện đã cài bằng npm
  ├── 📁 public/                  # Tài nguyên tĩnh (ảnh, mô hình, âm thanh...)
  │   ├── 📁 artworks/              # Các ảnh tranh
  │   ├── 📁 img/                   # Background, texture
  │   ├── 📁 sounds/                # Nhạc nền, audio guide
  │   ├── 📁 models/                # Mô hình 3D (GLTF, BIN)
  │   └── ...
  │
  ├── 📁 modules/                # Toàn bộ mã nguồn xử lý trong Three.js
  │   ├── audioGuide.js           # Âm thanh nền
  │   ├── paintings.js            # Tạo tranh
  │   ├── paintingData.js         # Dữ liệu tranh
  │   ├── paintingInfo.js         # Tooltip / overlay tranh
  │   ├── walls.js                # Tường + texture
  │   ├── floor.js                # Tạo sàn gỗ
  │   ├── ceiling.js              # Tạo trần
  │   ├── rendering.js            # Vòng lặp render chính
  │   ├── eventListeners.js       # Tương tác chuột/phím
  │   ├── joystickControl.js      # Điều khiển joystick
  │   ├── touchCameraControl.js   # Camera cảm ứng
  │   ├── statue.js               # Load tượng 3D
  │   └── ...
  │
  ├── .env                       # Biến môi trường (Cloudinary keys)
  ├── .gitignore                 # Loại trừ file không đẩy lên Git
  ├── index.html                 # HTML chính
  ├── main.js                    # Điểm vào chính của app (import mọi thứ)
  ├── style.css                  # CSS giao diện
  ├── upload.js                  # Script upload ảnh lên Cloudinary
  ├── upload_audio.js            # Script upload âm thanh lên Cloudinary
  ├── vite.config.js             # Cấu hình Vite
  │
  ├── package.json               # Danh sách thư viện + script
  ├── package-lock.json          # Khóa phiên bản
  ├── README.md                  # Hướng dẫn sử dụng
  └── LICENSE                    # (tuỳ chọn) Giấy phép MIT, CC...
```
## Giấy phép
MIT License
© 2025 QiQi-OU-IT. All rights reserved.

## Các tuỳ chọn khác
Một số vật liệu cho dự án
The Office Ceiling material in 4K:
https://ambientcg.com/view?id=OfficeCeiling005

The Wood Floor in 4K:
https://ambientcg.com/view?id=WoodFloor040

The Walls in 4K:
https://polyhaven.com/a/leather_white

3D Model Statue:
https://sketchfab.com/3d-models/100kz11-aphrodite-kallipygos-statuette-c01ba617ec83491195146583b70e3df9
