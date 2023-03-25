# 💻std_for_javascript
📌Tags: std for js, std for javascript, STL for js, STL for javascript

## FOR NODE.JS:

```javascript
const std_module = require('./std');
var std = new std_module.Std();
std.cout("Hello, world!");
console.log(std.stoi("12345")); // number is 12345
console.log(std.atoi("1"));

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

// example with add for linked list
var l2 = new std_module.LinkedList();
l2.insert_in_head(2);
l2.insert_in_tail(1);
l2.insert_in_tail(3);
l2.print(); 

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

// example std::set< >
var set = new std_module.Set();
set.add(3);
set.add(2);
set.add(4);

// example std::map< >
var m = new std_module.Map();
m.set("3", 0);
m.set("1", 3);
m.set("2", 2); // {"3": 0; "1": 3; "2": 2}

// example std::hash
var h = new std_module.Hash();
console.log(h.hashString("Hello, world!"));

// example std::any
var a = new std_module.Any();
a.setValue(1);

// example std::stack
var stack = new std_module.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // 1 2 3

// example std::queue
var queue = new std_module.Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(2);
queue.print(); // 5 4 2

// example std::unordered_set
var unset = new std_module.UnorderedSet();
unset.insert(1);
unset.insert(3);
unset.insert(2);

// example std::unordered_map
var unmap = new std_module.UnorderedMap();
unmap.insert(1);
unmap.insert(3);
unmap.insert(2);

// example std::unordered_multimap
var unmulti_map = new std_module.UnorderedMultimap();
unmulti_map.insert(1);
unmulti_map.insert(2);

// example std::unordered_multiset
var unmulti_set = new std_module.UnorderedMultiset();
unmulti_set.insert(1);
unmulti_set.insert(2);
```

## FOR WEB:
```html
<script src="./std.js"></script>
<script src="main.js"></script>
```

```javascript
// in main.js
var std = new Std();
std.cout("Hello, world!");
```

## ✅std::help
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


## ✅std::iterator
**__next__()** - возвращает следующий элемент

**__back__()** - возвращает предыдущий элемент

**get_element() и get_max_element()** - возвращает текущий элемент и максимальный

**set_element() и set_max_element()** - устанавливает новый текущий элемент и максимальный


## ✅std::vector
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

## ✅std::list
**add()** - добавление узла в список 

**isEmpty()** - проверка на пустой список 

**clear()** - очистка списка ( удаление всех узлов списка ) 

**delete_by_position(pos)** - удаление узла по позиции 

**output_list()** - вывод списка ( в консоль ) 

## ✅std::linked_list
**insert_in_head()** - добавление узла в голову списока 

**insert_in_tail()** - добавление узла в список

**print()** - вывод списка в консоль

**delete(pos)** - удаление узла из списка 


## ✅std::file
**write()** - запись в файл 

**read()** - чтение файла 

## ✅std::sort-->
**BubbleSort()** - сортировка пузырьком

**ShellSort()** - сортировка Шелла

**SelectionSort()** - сортировка выбором

**ShekerSort()** - шейкерная сортировка ( др словами улучшенный пузырек )

**InsertSort()** - сортировка простыми вставками

## ✅std::dynamic_memory
**new()** - выделение динамической памяти

**delete()** - очистка динамической памяти

**address()** - метод для записи адреса памяти

**pointer()** - метод для получения значения по адресу памяти ( указатель )

**get_()** - все элементы в памяти

## ✅std::set

**constructor()** - конструктор класса, который инициализирует пустой объект items.

**has(value)** - метод, который проверяет, содержит ли Set указанное значение.

**add(value)** - метод, который добавляет указанное значение в Set, если его там нет.

**delete(value)** - метод, который удаляет указанное значение из Set, если оно там есть.

**clear()** - метод, который удаляет все значения из Set.

**size()** - метод, который возвращает количество элементов в Set.

**values()** - метод, который возвращает массив всех значений в Set.

**union()** - метод объединение

**intersection()** - метод пересечение

**difference()** - метод разницы

**isSubsetOf()** - метод проверки на подмножество

## ✅std::map

**constructor()** - конструктор класса, который инициализирует keys = [] и values = [].

**size()** - метод, который возвращает количество элементов в Map.

**empty()** - метод, который проверяет на пустоту.

**clear()** - метод, который очищает keys и values.

**delete()** - метод удаления по ключу.

**has()** - метод, который проверяет, содержит ли Map указанный ключ.

**set()** - метод для установки ключа и значения соответственно (добавление в Map).

**get()** - метод для получения значения по ключу.

**keys()** - все ключи.

**values()** - все значения.

**entries()** - метод записи.

## ✅std::hash

методы для разных типов данных ( аналог шаблонов из C++ )

**hashNumber()**, **hashString()**, **hashArray()**, **hashObject()** ...

## ✅std::stoi

метод stoi, который принимает строку str в качестве аргумента и опциональные параметры pos и base. Если pos не указан, то метод начинает конвертацию с начала 
строки. Параметр base указывает систему счисления, по умолчанию равен 10. Если строка не может быть преобразована в число, метод выбрасывает 
исключение TypeError.

## ✅std::atoi

метод atoi, который принимает строку в качестве аргумента и возвращает числовое значение, соответствующее этой строке.

## ✅std::any

std::any в C++ позволяет хранить значение любого типа в одном объекте, а также получать доступ к этому значению без необходимости знать его тип.

