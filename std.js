const { stderr } = require('process');

const NAME_MODULE = "Std";
const VERSION = "v1.0.0.2";
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

class Node{
  constructor(){
    this.next;
    this.value;
  }
}
class List{
  constructor(){
    this._head = null;
    this._count = 0; 
  }

  get_count() { return this._count; }
  isEmpty() { return this._count == 0; }

  add(value, node = null){
    var elem = new Node();
    elem.value = value;
    ++this._count;
    if (node == null) {
      if (this._head == null) {
        elem.next = null;
        this._head = elem;
      }
      else {
        elem.next = this._head;
        this._head = elem;
      }
      return elem;
    }
    else{
      elem.next = node.next;
      node.next = elem;
    }
  }  

  delete_by_position(node){
    if (this.isEmpty()) return null;
    if (node == null) { return null; } // В списке нет узлов
    --this._count;
    if (node == this._head){
      this._head = node.next;
      delete node.next;
      delete node.value;
      return this._head;
    }
    else{
      var prev = new Node();
      var p = this._head;
      while (p.next != node)
        p = p.next;
      prev = p;
      prev.next = node.next;
      delete node.next;
      delete node.value;
      return prev;
    }
  }

  clear(){
    this._head = null;
    while(this._head){
      delete this._head.next;
      delete this._head.value;
      this._head = this._head.next;
    }
    this._count = 0;
    this._head = null;
  }

  output_list(){
    if(this._head != null){
      var res = "";
      var tmp = this._head;
      while(tmp){
        res += tmp.value+"->";
        tmp = tmp.next;
      }
      console.log(res);
    }
    else{
      console.log("Список пуст!");
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

class List2{
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

module.exports = {
  Std: Std, 
  Iterator: Iterator_,
  Vector: Vector,
  List: List,
  File: File,
  List2: List2,
  Sort: Sort
} 
