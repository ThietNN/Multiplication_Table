let a;
let b;
let c = "<table border='1' width = 600px cellSpacing='0' cellPadding='3'>";
for(a=1;a<=9;a++){
    c += "<tr>";
    for(b=2;b<=8;b++){
        c+="<td>" + b + "x" + a + "=" + a*b + "</td>";
    }
    c += "</tr>";
}
c += "</table>";
document.write(c)