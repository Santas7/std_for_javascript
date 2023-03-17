const { stderr } = require('process');

const NAME_MODULE = "Std";
const VERSION = "v1.0.0.8";
const AUTOR = "&Santas7"
const LINK_GITHUB = "https://github.com/Santas7/std_for_javascript"


class Std{
  constructor(){
    this.__status__ = true;
    this.__key__ = "None";
  }
  // поток вывода
  cout(){
    // if(arguments.length - 1 == 0) { return ; }
    for (var i =0; i < arguments.length; ++i){ console.log(arguments[i]); }
  }
  
  // поток ввода
  cin(){
    var value = prompt("> ");
    return value;
  }
  
  static sayHi(){ console.log("::std:: - ::module::" + "\n" + "::std.help():: - help"); }
  
  random_key(){
    var alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", res = "", index;
    while (res.length < 15) {
      index = Math.floor(Math.random() * alf.length);
      res += alf[index];
    } return res;
  }

  endl(){ return "\n"; }
  
  // поток ошибок
  cerr(err){
    if (err == ""){ throw "Error! Type of error: 0x0001.." }
    else{ throw `Error! Type of error: ${err}..` }
  } 

  fill_n(element, start_index, count, value){
    if( count <= 0 ) { return ; }
    for(var i = start_index; i < count; ++i){
      element[i] = value;
    }
  }

  fill_n_2(element, start_index_1, count_1, start_index_2, count_2, value){
    if( count_1 <= 0 || count_2 <= 0) { return ; }
    var tmp = [];
    for(var i = start_index_1; i < count_1; ++i){
      for(var j = start_index_2; j < count_2; ++j){
        tmp[j] = value;
      }
      element.push([tmp]);
    }
  }
  
  output_array(A, type){
    if(type == 1) {    
      for(var i = 0; i < A.length; ++i){
        console.log(A[i] + "\t");
      }
    }
    else if(type == 2){
      for(var i = 0; i < A.length; ++i){
        for(var j = 0; j < A[i].length; ++j){
          console.log(A[i][j] + " ");
        }
        console.log("\n");
      }
    }
    else console.error("error! invalid type!");
  }

  extmp_(val1, val2){
    var tmp = val1;
    val1 = val2;
    val2 = tmp;
  }

  str_extention(str, count){
    var res = [];
    for(var i = 0; i < count; ++i){
      res.push([str]);
    }
    return res.join(' ');
  }

  str_plus(str1, str2){
    var res = [];
    res.push([str1], [str2]);
    return res.join(' ');
  }

  str_cls(str){
    str = "";
    return str;
  }

  istype(value){
    return typeof(value);
  }

  add_value_in_lm(value){
    this.__key__ = this.random_key();
    localStorage.setItem(this.__key__, JSON.stringify(value));
  }

  load_value_in_lm(){ return JSON.parse(localStorage.getItem(this.__key__)); }

  stoi(str, pos = 0, base = 10) {
    if (typeof str !== "string") {
      throw new TypeError("Argument must be a string");
    }
    let value = 0, negative = false;
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;
    let i = pos;
    // skip the leading spaces
    while (i < str.length && str[i] === " ") 
      i++;

    // determine the sign of the number
    if (i < str.length && (str[i] === "+" || str[i] === "-")) {
      negative = str[i] === "-"; i++;
    }
    // Define the number system
    if (i < str.length - 1 && str[i] === "0" && str[i+1] === "x") {
      base = 16; i += 2;
    }
    // convert the number
    while (i < str.length) {
      const digit = parseInt(str[i], base);
      if (isNaN(digit)) break;
      value *= base;
      value += digit;
      // Check for overflow
      if (value > max || value < min) 
        throw new RangeError("Value is out of range");
      i++;
    }
    return negative ? -value : value;
  }

  help(){ console.log(
    "База STD-->\n" +

    "cout() - ( поток вывода )вывод чего либо в консоль" + "\n" +
    "cin() - ( поток ввода ) ввод данных (web)" + "\n" +
    "endl() - перенос строки" + "\n" +
    "cerr() - ( поток ошибок )" + "\n" +
    "fill_n() - ( цикл for (x1) ) " + "\n" +
    "fill_n_2() - ( цикл for (x2) ) " + "\n" +
    "extmp_() - работа с временной переменной " + "\n" +
    "output_array() - метод печати массива в консоль (одномерный или двумерный) " + "\n" +
    "str_plus() - две строки объединить " + "\n" +
    "str_extention() - вывод строки n раз " + "\n" +
    "str_cls() - очистить строку " + "\n" +
    "istype() - определение типа переменной " + "\n" +
    "add_value_in_lm() - добавление определенных данных в локальную память ( с key )" + "\n" +
    "load_value_in_lm() - выгрузка данных из локальной памяти ( по key )" + "\n" +
    "random_key() - генерация рандомного ключа" + "\n\n" +

    "std::iterator-->\n" +
    "__next__() - возвращает следующий элемент" + "\n" +
    "__back__() - возвращает предыдущий элемент" + "\n" +
    "get_element() и get_max_element - возвращает текущий элемент и максимальный" + "\n" +
    "set_element() и set_max_element - устанавливает новый текущий элемент и максимальный" + "\n\n" +
    
    "std::vector-->\n" +
    "front() - доступ к первому элементу " + "\n" +
    "back() - доступ к последнему элементу" + "\n" +
    "begin() - возвращает итератор на первый элемент вектора " + "\n" +
    "end() - возвращает итератор на место после последнего элемента вектора " + "\n" +
    "push_back() - вставка элемента в конец вектора " + "\n" +
    "pop_back() - удалить последний элемент вектора " + "\n" +
    "resize() - изменяет размер вектора на заданную величину " + "\n" +
    "size() - возвращает количество элементов в векторе " + "\n" +
    "swap(vector) - обменять содержимое двух векторов " + "\n" +
    "swap_2(vector_first, vector_second) - обменять содержимое двух векторов " + "\n" +
    "erase() - удаляет указанные элементы вектора (один или несколько) " + "\n" +
    "isEmpty() - возвращает true, если вектор пуст " + "\n" +
    "clear() - удаляет все элементы вектора  " + "\n" +
    "insert() - вставка элементов в вектор ( с заменой )" + "\n" +
    "output_vector() - вывод значений вектора ( в консоль ) " + "\n" +
    "emplace() - вставка нового элемента перед pos " + "\n" +
    "emplace_back() - вставка нового элемента после pos " + "\n\n" +

    "std::list-->\n" +
    "add() - добавление узла в список " + "\n" +
    "isEmpty() - проверка на пустой список " + "\n" +
    "clear() - очистка списка ( удаление всех узлов списка ) " + "\n" +
    "delete_by_position(pos) - удаление узла по позиции " + "\n" +
    "output_list() - вывод списка ( в консоль ) " + "\n\n" + 

    "std::list ( двусвязный список )-->\n" +
    "front() - доступ к первому элементу " + "\n" +
    "back() - доступ к последнему элементу " + "\n" +
    "clear() - очистка списка ( удаление всех узлов списка ) " + "\n" +
    "begin() - возвращает итератор на первый элемент списка " + "\n" +
    "end() - возвращает итератор на место после последнего элемента списка " + "\n" + 
    "push_back() - добавление узла в конец списка" + "\n" +
    "pop_back() - удаление последнего последнего узла списка" + "\n" +
    "size() - размер списка" + "\n" +
    "resize() - изменение размера списка " + "\n" +
    "push_front() - добавление в начало списка" + "\n" +
    "insert()" + "\n" +
    "erase() " + "\n" + 
    "emplace() " + "\n" + 
    "emplace_back() " + "\n" + 
    "sort() " + "\n" + 

    "std::file-->\n" +
    "write() - запись в файл " + "\n" +
    "read() - чтение файла " + "\n"
  )}

  get_version_module(){ return __version__; }
}

class Iterator{
  constructor(next){
    this.next = next;
  }

  begin(){
    return new Iterator(this.next);
  }

  end(){
    return new Iterator(null);
  }
}

class Iterator_{
  constructor(element, max) {
    this._element = element;
    this._max = max;
  }

  set_element(new_el){ this._element = new_el; }
  get_element(){ return this._element; }
  set_max_element(new_max){ this._max = new_max; }
  get_max_element(){ return this._max; }

  __next__(){
    if(this._element < 0 || this._element > this._max) throw "Ошибка! Элемент вышел за пределы Итератора!";
    return ++this._element;
  }

  __back__(){
    if(this._element < 0 || this._element > this._max) throw "Ошибка! Элемент вышел за пределы Итератора!";
    return --this._element;
  }
}

class Vector{
  constructor(){
    this._vector = [];
  }

  begin(){ return 0; }
  end(){
    if (this.size() + 1 != 0) return this.size();
    else throw "Ошибка! size <= 0!";
  }

  front(){
    if(this._vector[0] == null) throw "Error! The vector is empty or there is no first element!";
    return this._vector[0];
  }

  back(){
    if(this._vector[0] == null) throw "Error! The vector is empty or there is no first element!";
    return this._vector[this.size() - 1];
  }

  push_back(value){
    var size_tmp = this.size();
    if(this.size() == 0) this._vector[size_tmp] = value;
    else this._vector[size_tmp] = value;
    this.resize(size_tmp + 1)
  }

  size(){
    return this._vector.length;
  }

  clear(){
    for(var i = this.begin(); i < this.end(); ++i){
      delete this._vector[i];
    } this.resize(0);
  }

  erase(){
    for(var i = 0; i < arguments.length; ++i){
      console.log(arguments[i]);
    }

    var tmp_length = this._vector.length;

    for(var i = this.begin(); i < this.end(); ++i){
      for(var j = 0; j < arguments.length; ++j){
        if(arguments[j] == i){
          delete this._vector[i];
          --tmp_length;
          break;
        }
      }
    }
    this._vector = this._vector.filter(function isNone(value) {
      return value != "";
    })
    this._vector.length = tmp_length;
  }

  insert(pos, value){
    if( pos < 0 || pos >= this.size()) throw "Ошибка! Параметр position указан неверно!";
    this._vector[pos] = value;
  }
  
  
  static insert(vector, pos_first, pos_end, value){
    if( pos_first < 0 || pos_end >= vector.size() || pos_first >= vector.size() || pos_end < 0) throw "Ошибка! Параметр position указан неверно!";
    for(var i = pos_first; i < pos_end; ++i){
      vector._vector[i] = value;
    }
  }

  emplace(pos, value){
    if( pos < 0 || pos >= this.size() || pos - 1 < 0) throw "Ошибка! Параметр position указан неверно!";
    this.resize(this.size() + 1);
    for(var i = 0; i < this.size(); ++i){
      if(i == pos- 1){
        for(var j = pos - 1; j < this.size(); ++j){
          var tmp = this._vector[j];
          this._vector[j] = this._vector[pos - 1];
          this._vector[pos - 1] = tmp;
        }
        //this.output_vector();
        break;
      }
    }
    this._vector[pos - 1] = value;
  }

  emplace_back(pos, value){
    if( pos < 0 || pos >= this.size() || pos + 1 >= this.size()) throw "Ошибка! Параметр position указан неверно!";
    this.resize(this.size() + 1);
    for(var i = 0; i < this.size(); ++i){
      if(i == pos + 1){
        for(var j = pos + 1; j < this.size(); ++j){
          var tmp = this._vector[j];
          this._vector[j] = this._vector[pos + 1];
          this._vector[pos + 1] = tmp;
        }
        //this.output_vector();
        break;
      }
    }
    this._vector[pos + 1] = value;
  }

  isEmpty(){
    if(this.size() == 0) return true;
    return false;
  }

  pop_back(){
    delete this._vector[this.size() - 1];
    this.resize(this.size() - 1);
  }

  resize(value){
    this._vector.length = value;
  }

  swap(vector){
    this._vector = vector._vector;
    this.resize(vector.size());
  }
  swap_2(vector_first, vector_second){
    vector_first.resize(vector_second.size());
    vector_first._vector = vector_second._vector;
  }

  output_vector(){
    if(this.size() == 0) { console.log("null"); }
    for(var i = this.begin(); i < this.end(); ++i){
      console.log(this._vector[i]);
    }
  }
}

class LinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert_in_head(value) {
    const new_node = new LinkedListNode(value, null, this.head);
    if (this.head) {
      this.head.prev = new_node;
    } else {
      this.tail = new_node;
    }
    this.head = new_node;
  }
  insert_in_tail(value) {
    const new_node = new LinkedListNode(value, this.tail, null);
    if (this.tail) {
      this.tail.next = new_node;
    } else {
      this.head = new_node;
    }
    this.tail = new_node;
  }
  delete_head() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return value;
  }
  delete_tail() {
    if (!this.tail) {
      return null;
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return value;
  }
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  delete(value) {
    const node_to_delete = this.find(value);
    if (!node_to_delete) {
      return null;
    }
    if (node_to_delete === this.head) {
      return this.deleteHead();
    }
    if (node_to_delete === this.tail) {
      return this.deleteTail();
    }
    node_to_delete.prev.next = node_to_delete.next;
    node_to_delete.next.prev = node_to_delete.prev;
    return node_to_delete.value;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class File{
  constructor(path){
    this.fs = require('fs');
    this._path = path;
  }

  read(){
    this.fs.readFile(this._path, 'utf8', function(error, file_сontent){
      if(error) throw error; 
      console.log(file_сontent); 
   });
  }

  write(content){
    this.fs.writeFile(this._path, content, function(error){
      if(error) throw error; // ошибка чтения файла, если есть
      console.log('Данные успешно записались в файл');
   });
  }
}

class Node2{
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Sort{
  BubbleSort(vector){
    for (var i = 0; i < vector.size() - 1; i++)
      for (var j = 0; j < vector.size() - i - 1; j++)
        if (vector._vector[j] > vector._vector[j + 1])
        {
          var tmp = vector._vector[j];
          vector._vector[j] = vector._vector[j + 1];
          vector._vector[j + 1] = tmp;
        }
  }
  SelectionSort(vector){
    for(var i = 0, min = i; i < vector.size(); i++) {
      for(var j = i+1; j < vector.size(); j++)
          if(vector._vector[j] < vector._vector[min])
              min = j; 
      if (min != i) {
           var tmp = vector._vector[i]; 
           vector._vector[i] = vector._vector[min];
           vector._vector[min] = tmp;      
      }
    }
  }

  ShellSort(vector)
  {
    var j;
    for (var step = vector.size() / 2; step > 0; step /= 2)
    {
        for (var i = step; i < vector.size(); i++)
        {
          var tmp = vector._vector[i];
          for (j = i; j >= step; j -= step)
          {
              if (tmp < vector._vector[j - step])
                vector._vector[j] = vector._vector[j - step];
              else
                  break;
          }
          vector._vector[j] = tmp;
        }
    }
  }

  ShekerSort(vector)
  {
    var left = 0, right = vector.size() - 1, flag = 1;
    while ((left < right) && (flag > 0))
    {
      flag = 0;
      for (var i = left; i < right; i++)
      {
        if (vector._vector[i] > vector._vector[i + 1])
        {
          var tmp = vector._vector[i]; 
          vector._vector[i] = vector._vector[i + 1];
          vector._vector[i + 1] = tmp;   
          flag = 1;
        }
      }
      right--;

      for (var i = right; i > left; i--)
      {
        if (vector._vector[i] < vector._vector[i - 1])
        {
          var tmp = vector._vector[i]; 
          vector._vector[i] = vector._vector[i - 1];
          vector._vector[i - 1] = tmp;   
          flag = 1;
        }
      }
      left++;
    }
  }

  InsertSort(vector)
  {
    for (var i = 1, l = vector.size(); i < l; i++) {
      const current = vector._vector[i];
      var j = i;        
      while (j > 0 && vector._vector[j - 1] > current) {
        vector._vector[j] = vector._vector[j - 1];
        j--;
      }   
      vector._vector[j] = current;
    }    
  }
}

class List{
  constructor(){
    this._count = 0;
    this._head = null;
    this._end = null;
  }

  size(){ return this._count; }

  add(value){
    var tmp = new Node();
    tmp.next = null;
    tmp.value = value;
    if (this._head != null) {
        tmp.prev = this._end;
        this._end.next = tmp;
        this._end = tmp;
    }
    else {
        tmp.prev = null;
        this._head = this._end = tmp;
    }

  }

  push_back(value){
    var tmp = new Node2(value, this._head, this._head.prev);
    this._head.prev.next = tmp;
    this._head.prev = tmp;
    ++this._count;
  }

  push_front(value){
    var tmp = new Node2(value, this._head.next, this._head);
    this._head.next.prev = tmp;
    this._head.next = tmp;
    ++this._count;
  }

  print(){
    var tmp = this._head;
    if(this._head != null){
      while(tmp){
        console.log(tmp.value);
        tmp = tmp.next;
      }
    }
    else{
      console.log("Список пуст!");
    }
  } 
}

// virtual memory
class DynamicMemory{
  constructor(){
    this.all_address = new Array();
  }
  get_address(){
    while(true){
      var tmp = Math.floor(Math.random() * 0b10000000000000000000000000000000), status = false;
      if (this.all_address == null || this.all_address == [] || this.all_address.length == 0){return tmp;}
      for (var i = 0; i < this.all_address.length; i++){
        if (this.all_address[i][1] == tmp){status = true;}
      }
      if (status == false){return tmp;}
    }
  }
  address(value){
    var status = false;
    var id = 0;
    for (var i = 0; i < this.all_address.length; i++){
      if (this.all_address[i][0] == value){id = i; status = true;}
    }
    if (status == false){ throw "Error! Адрес в памяти не найден, возможно память не была ранее выделена ( метод new )!"; }
    return this.all_address[id][1];
  }
  get_()
  {
    for (var i = 0; i < this.all_address.length; i++){
      console.log(this.all_address[i][0], this.all_address[i][1])
    }
  }

  new(value){
    var address_ = this.get_address();
    this.all_address.push([value, address_])
    return value;
  }

  pointer(address){
    var status = false;
    var id = 0;
    for (var i = 0; i < this.all_address.length; i++){
      if (this.all_address[i][1] == address){id = i; status = true;}
    }
    if (status == false){ throw "Error! Адрес в памяти не найден!"; }
    return this.all_address[id][0];
  }
  delete(address){
    var id = 0;
    for (var i = 0; i < this.all_address.length; i++){
      if (this.all_address[i][1] == address){id = i;}
    }
    this.all_address.splice(id, 1);
    console.log("Память успешно очищена!");
  }

}

class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

class Map {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  size() {
    return this.keys.length;
  }
  empty() {
    return this.keys.length === 0;
  }
  clear() {
    this.keys = [];
    this.values = [];
  }
  delete(key) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
      return true;
    }
    return false;
  }
  has(key) {
    return this.keys.includes(key);
  }
  set(key, value) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
  }
  get(key) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    }
    return undefined;
  }
  entries() {
    return this.keys.map((key, index) => [key, this.values[index]]);
  }
  keys() {
    return this.keys.slice();
  }
  values() {
    return this.values.slice();
  }
  forEach(callback) {
    this.keys.forEach((key, index) => {
      callback(this.values[index], key, this);
    });
  }
}

function Hash() {}

Hash.prototype.hash = function (obj) {
  if (typeof obj === "number") {
    return this.hashNumber(obj);
  } else if (typeof obj === "string") {
    return this.hashString(obj);
  } else if (Array.isArray(obj)) {
    return this.hashArray(obj);
  } else if (typeof obj === "object" && obj !== null) {
    return this.hashObject(obj);
  } else {
    return this.hashDefault(obj);
  }
};

Hash.prototype.hashNumber = function (num) {
  num = num | 0;
  num = num < 0 ? -num : num;
  return num;
};

Hash.prototype.hashString = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash | 0;
  }
  return hash;
};

Hash.prototype.hashArray = function (arr) {
  var hash = 0;
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    var valueHash = this.hash(value);
    hash = (hash << 5) - hash + valueHash;
    hash = hash | 0;
  }
  return hash;
};

Hash.prototype.hashObject = function (obj) {
  var hash = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key];
      var valueHash = this.hash(value);
      var keyHash = this.hashString(key);
      hash = (hash << 5) - hash + keyHash + valueHash;
      hash = hash | 0;
    }
  }
  return hash;
};

Hash.prototype.hashDefault = function (obj) {
  var str = obj.toString();
  return this.hashString(str);
};


module.exports = {
  Std: Std, 
  Iterator: Iterator_,
  Vector: Vector,
  List: List,
  File: File,
  LinkedList: LinkedList,
  Sort: Sort,
  DynamicMemory: DynamicMemory,
  Set: Set,
  Map: Map,
  Hash: Hash
} 
