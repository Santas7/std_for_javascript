# std_for_javascript

#FOR NODE.JS:

```javascript
const std_module = require('./std');
var std = new std_module.Std();
std.cout("Hello, world!");

// example with add vector
var v1 = new std_module.Vector();
v1.push_back(1);
v1.push_back(2);
v1.push_back(3);
v1.output_vector(); // 1 2 3

// example with add list
var l1 = new std_module.List();
l1.add(1);
l1.add(2);
l1.add(3);
l1.output_list(); // 3->2->1->

// example with add file
var file = new std_module.File('file.txt');
file.read(); // "hello"
file.write("hello world"); // in file.txt -> "hello world"

// example with sort
var all_sort = new std_module.Sort();
// if example v1 = { 4, 2, 1, 3 }
all_sort.BubbleSort(v1); // 1 2 3 4

// dynamic memory ( virtual )
var dm = new std_module.DynamicMemory();
var x = dm.new(5); // memory allocation
var y = dm.new(1); // memory allocation
var z;

// address record
var ptr1 = dm.address(x);
var ptr2 = dm.address(y);

// value change by address
x = dm.pointer(ptr1) + 5;
y = dm.pointer(ptr2) + 2;

// memory cleaning
dm.delete(ptr1); 
dm.delete(ptr2);
```

#FOR WEB:
```html
<script src="./std.js"></script>
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

**str_plus()** - две строки объединить

**str_extention()** - вывод строки n раз 

**str_cls()** - очистить строку 

**istype()** - определение типа переменной 

**add_value_in_lm()** - добавление определенных данных в локальную память ( с key )

**load_value_in_lm()** - выгрузка данных из локальной памяти ( по key )

**random_key()** - генерация рандомного ключа


**std::iterator-->**\
**__next__()** - возвращает следующий элемент

**__back__()** - возвращает предыдущий элемент

**get_element() и get_max_element()** - возвращает текущий элемент и максимальный

**set_element() и set_max_element()** - устанавливает новый текущий элемент и максимальный


**std::vector-->**\
**front()** - доступ к первому элементу 

**back()** - доступ к последнему элементу

**begin()** - возвращает итератор на первый элемент вектора 

**end()** - возвращает итератор на место после последнего элемента вектора 

**push_back()** - вставка элемента в конец вектора 

**pop_back()** - удалить последний элемент вектора 

**resize()** - изменяет размер вектора на заданную величину 

**size()** - возвращает количество элементов в векторе 

**swap(vector)** - обменять содержимое двух векторов 

**swap_2(vector_first, vector_second)** - обменять содержимое двух векторов 

**erase()** - удаляет указанные элементы вектора (один или несколько) 

**isEmpty()** - возвращает true, если вектор пуст 

**clear()** - удаляет все элементы вектора  

**insert()** - вставка элементов в вектор ( с заменой )

**output_vector()** - вывод значений вектора ( в консоль ) 

**emplace()** - вставка нового элемента перед pos 

**emplace_back()** - вставка нового элемента после pos 

**std::list-->**\
**add()** - добавление узла в список 

**isEmpty()** - проверка на пустой список 

**clear()** - очистка списка ( удаление всех узлов списка ) 

**delete_by_position(pos)** - удаление узла по позиции 

**output_list()** - вывод списка ( в консоль ) 

**std::file-->**\
**write()** - запись в файл 

**read()** - чтение файла 

**std::sort-->**\
**BubbleSort()** - сортировка пузырьком

**ShellSort()** - сортировка Шелла

**SelectionSort()** - сортировка выбором

**ShekerSort()** - шейкерная сортировка ( др словами улучшенный пузырек )

**InsertSort()** - сортировка простыми вставками

**std::dynamic_memory-->**\
**new()** - выделение динамической памяти

**delete()** - очистка динамической памяти

**address()** - метод для записи адреса памяти

**pointer()** - метод для получения значения по адресу памяти ( указатель )

**get_()** - все элементы в памяти
