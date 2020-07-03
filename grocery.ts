class Grocery {
  theList: string;
  constructor(public item: Array<string>, public qty: Array<number>) {
    this.theList = item + "" + qty;
  }
}

interface List {
  item: Array<string>;
  qty: Array<number>;
}

function list(list: List) {
  return list.item + " " + list.qty;
}

let addItem = new Grocery(["Apples", "Eggs", "Bread"], [4, 12, 1]);


// prints list into a table 
document.write("<table>");
document.write("<tr> <th>Item</th> <th>Qty<th></tr>");
for (var i in addItem.item, addItem.qty) {
  document.write("<tr>");
  document.write("<td>" + addItem.item[i] + "</td> <td>" + addItem.qty[i] + "</td>");
  document.write("</tr>");
};
document.write("</table>");

