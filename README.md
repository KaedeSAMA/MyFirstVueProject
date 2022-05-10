# final_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

######

优化了：
1.CSS动画会溢出画布导致浏览器底部滚动条滚动
2.动态识别当前浏览器大小，并采用防抖函数作为缓冲，防止浪费资源
