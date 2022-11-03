# std_for_javascript

#FOR NODE.JS:

```javascript
const std_module = require('./std');
var std = new std_module.Std();
std.cout("Hello, world!");
```

#FOR WEB:
```html
<script src="./src.js"></script>
<script src="main.js"></script>
```

```javascript
// in main.js
var std = new Std();
std.cout("Hello, world!");
```

#HELP():\
**cout()** - ( поток вывода )вывод чего либо в консоль 

**cin()** - ( поток ввода ) ввод данных (web)

**endl()** - перенос строки

**cerr()** - ( поток ошибок )

**fill_n()** - ( цикл for (x1) ) 

**fill_n_2()** - ( цикл for (x2) )

**extmp_()** - работа с временной переменной 
**
output_array()** - метод печати массива в консоль (одномерный или двумерный) 
