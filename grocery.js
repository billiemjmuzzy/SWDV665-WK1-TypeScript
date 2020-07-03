var Grocery = /** @class */ (function () {
    function Grocery(item, qty) {
        this.item = item;
        this.qty = qty;
        this.theList = item + "" + qty;
    }
    return Grocery;
}());
function list(list) {
    return list.item + " " + list.qty;
}
var addItem = new Grocery(["Apples", "Eggs", "Bread"], [4, 12, 1]);
// prints list into a table 
document.write("<table>");
document.write("<tr> <th>Item</th> <th>Qty<th></tr>");
for (var i in addItem.item, addItem.qty) {
    document.write("<tr>");
    document.write("<td>" + addItem.item[i] + "</td> <td>" + addItem.qty[i] + "</td>");
    document.write("</tr>");
}
;
document.write("</table>");
