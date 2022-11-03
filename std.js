class Std{
  constructor(){
    this.__status__ = true;
    this.__autor__ = "...";
    this.__version__ = "v1.0.0.1";
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
  
  str_plus(str, count){
    var res = [];
    for(var i = 0; i < count; ++i){
      res.push([str]);
    }
    return res.join(' ');
  }

  str_move(str1, str2){
    var res = [];
    res.push([str1], [str2]);
    return res.join(' ');
  }

  str_cls(str){
    str = "";
    return str;
  }
  
  help(){ console.log(
    "cout() - ( поток вывода )вывод чего либо в консоль" + "\n" +
    "cin() - ( поток ввода ) ввод данных (web)" + "\n" +
    "endl() - перенос строки" + "\n" +
    "cerr() - ( поток ошибок )" + "\n" +
    "fill_n() - ( цикл for (x1) ) " + "\n" +
    "fill_n_2() - ( цикл for (x2) ) " + "\n" +
    "extmp_() - работа с временной переменной " + "\n" +
    "output_array() - метод печати массива в консоль (одномерный или двумерный) " + "\n" +
    "str_plus() - вывод строки n раз " + "\n" +
    "str_move() - две строки объединить " + "\n" +
    "str_cls() - очистить строку " + "\n" 
  )}

  get_version_module(){ return this.__version__; }
}


module.exports = {
  Std: Std, 
  sayHi: sayHi
} 
