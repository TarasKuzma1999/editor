function getE(a) {
    return document.getElementById(a)
}
/////////////////////////кнопка редагувати
var buttonCenter = document.forms['center_button'];
buttonCenter.edit.onclick = function () {
    getE('bottom_bg').style.display = 'none';
    getE('style').style.display = 'none';
    getE('edit').style.display = 'block';
    var a = getE('text').innerHTML;
    getE('edit_area').innerHTML = a;
}

///////////////////////// кнопка стилізувати
buttonCenter.style.onclick = function () {
    getE('bottom_bg').style.display = 'none';
    getE('style').style.display = 'block';
    getE('edit').style.display = 'none';
}

/////////////////////////кнопка зберегти
var editButton = document.forms['edit_button'];
editButton.save.onclick = function () {
    var a = getE('edit_area').value;
    getE('text').innerHTML = a;
    getE('edit_area').innerHTML = "";
}



/////////////////////////кнопка додати 
editButton.add.onclick = function () {
    getE('text').style.display = 'none';
    getE('buttons').style.display = 'none';
    getE('edit').style.display = 'none';
    getE('add_window').style.display = 'block';
}

/////////////////////////розмір тексту
var fontStyle = document.forms['style_font_size'];
for (var i = 0; i < fontStyle.length; i++) {
    fontStyle.elements[i].onclick = function () {
        getE('text').style.fontSize = this.value + 'px';
    }
}



///////////////////////// лігатура
var fontFamily = document.forms['style_font'];
for (var i = 0; i < fontFamily.length; i++) {
    fontFamily.elements[i].onclick = function () {
        getE('text').style.fontFamily = this.value;
    }
}


///////////////////////////колір тексту
getE('text_color').onclick = function () {
    getE('select_color').style.display = 'flex';
    getE('color1').onclick = function () {
        getE('text').style.color = '#13AB9B';
        getE('select_color').style.display = 'none';
    }
    getE('color2').onclick = function () {
        getE('text').style.color = '#880000';
        getE('select_color').style.display = 'none';
    }
    getE('color3').onclick = function () {
        getE('text').style.color = '#35CC78';
        getE('select_color').style.display = 'none';
    }
    getE('color4').onclick = function () {
        getE('text').style.color = '#46ED03';
        getE('select_color').style.display = 'none';
    }
    getE('color5').onclick = function () {
        getE('text').style.color = '#898889';
        getE('select_color').style.display = 'none';
    }
    getE('color6').onclick = function () {
        getE('text').style.color = '#FE0000';
        getE('select_color').style.display = 'none';
    }
    getE('color7').onclick = function () {
        getE('text').style.color = '#0100FE';
        getE('select_color').style.display = 'none';
    }
    getE('color8').onclick = function () {
        getE('text').style.color = '#870088';
        getE('select_color').style.display = 'none';
    }
    getE('color9').onclick = function () {
        getE('text').style.color = '#888901';
        getE('select_color').style.display = 'none';
    }

}




////////////////////////// колір фону
getE('bg_color').onclick = function () {
    getE('select_color').style.display = 'flex';
    getE('color1').onclick = function () {
        getE('text').style.background = '#13AB9B';
        getE('select_color').style.display = 'none';
    }
    getE('color2').onclick = function () {
        getE('text').style.background = '#880000';
        getE('select_color').style.display = 'none';
    }
    getE('color3').onclick = function () {
        getE('text').style.background = '#35CC78';
        getE('select_color').style.display = 'none';
    }
    getE('color4').onclick = function () {
        getE('text').style.background = '#46ED03';
        getE('select_color').style.display = 'none';
    }
    getE('color5').onclick = function () {
        getE('text').style.background = '#898889';
        getE('select_color').style.display = 'none';
    }
    getE('color6').onclick = function () {
        getE('text').style.background = '#FE0000';
        getE('select_color').style.display = 'none';
    }
    getE('color7').onclick = function () {
        getE('text').style.background = '#0100FE';
        getE('select_color').style.display = 'none';
    }
    getE('color8').onclick = function () {
        getE('text').style.background = '#870088';
        getE('select_color').style.display = 'none';
    }
    getE('color9').onclick = function () {
        getE('text').style.background = '#888901';
        getE('select_color').style.display = 'none';
    }

}



///////////////////////////жирний текст
var fontStyle = document.forms['font_style']
fontStyle.bold.onclick = function () {
    if (fontStyle.bold.checked) {
        getE('text').style.fontWeight = 'bold';
    } else {
        getE('text').style.fontWeight = 'normal'
    }
}




///////////////////////// Курсивний текст
fontStyle.em.onclick = function () {
    if (fontStyle.em.checked) {
        getE('text').style.fontStyle = 'italic';
    } else {
        getE('text').style.fontStyle = 'normal'
    }
}




///////////////////////// вибір таблиця чи список
var addButton = document.forms['add_buttons']
add_buttons.onclick = function () {
    if (getE('show_table').checked) {
        getE('table').style.display = 'block';
        getE('list').style.display = 'none';
    } else if (getE('show_list').checked) {
        getE('list').style.display = 'block';
        getE('table').style.display = 'none';
    }
}




////////////////////////// Створення таблиці
getE('create_table').onclick = function () {
    var numberTr = parseFloat(getE('numberTr').value);
    var numberTd = parseFloat(getE('numberTd').value);
    var borderPx = parseFloat(getE('border_px').value);
    var tdHeight = getE('tdHeight').value;
    var borderType = getE('table_line_type').value;
    var tableLineColor = getE('table_line_color').value;
    var trWidth = getE('trWidth').value;
    var table = '<table style="border-collapse: collapse">;'
    for (var i = 0; i < numberTr; i++) {
        table += '<tr style="height: ' + tdHeight + 'px">'
        for (var j = 0; j < numberTd; j++) {
            table += '<td style="border: '+borderPx+'px '+borderType+' '+tableLineColor+'; width: ' + trWidth + 'px;"></td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    getE('edit_area').innerHTML += table
    getE('text').style.display = 'block';
    getE('buttons').style.display = 'block';
    getE('edit').style.display = 'block';
    getE('add_window').style.display = 'none';
}




//////////////////// Створення списку
getE('create_list').onclick = function () {
    var liNumber = parseFloat(getE('number_li').value); 
    var listType = getE('list_type').value;
    var list = '<ul style="list-type-type: '+listType+'">'
    for (var i = 0; i<liNumber; i++) {
        list += '<li>Text</li>'        
    }
    list += '</ul>'
    getE('text').style.display = 'block';
    getE('buttons').style.display = 'block';
    getE('edit').style.display = 'block';
    getE('add_window').style.display = 'none';
    getE('edit_area').innerHTML += list
}