const path = require('path');

module.exports = {
  // Точка входа — файл, с которого начинается сборка приложения
  entry: './src/client/index.js',

  // Параметры выходного файла
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'static'), // Папка, куда сохраняется файл (укажите правильный путь)
    publicPath: '/static/', // Публичный путь для доступа к статическим файлам
  },

  // Настройка режима (development или production)
  mode: 'development',

  // Настройки для DevServer (если вы хотите использовать локальный сервер разработки)
  devServer: {
    static: {
      directory: path.join(__dirname, 'static'), // Папка для сервирования статических файлов
    },
    compress: true,
    port: 3000, // Порт для сервера разработки
    historyApiFallback: true, // Поддержка маршрутизации в React (для SPA)
  },

  // Настройки модулей и лоадеров
  module: {
    rules: [
      {
        // Правило для обработки JavaScript и JSX-файлов
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx'], // Поддержка JSX
          },
        },
      },
      {
        // Правило для обработки CSS-файлов
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Правило для обработки изображений и других медиафайлов
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]', // Настройка именования файлов
        },
      },
    ],
  },

  // Настройка разрешений для импортов
  resolve: {
    extensions: ['.js', '.jsx'], // Поддержка файлов с расширениями .js и .jsx
  },
};
