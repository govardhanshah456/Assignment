// const axios = require("axios");
// import Handsontable from "handsontable";

axios.get("https://sheet.best/api/sheets/ef4f8be7-77fb-4a4a-bf01-63cf6451aa01").then((res)=>{
    const temp=[];
    var tbl=document.getElementById("myTable");
    for(let i=0;i<res.data.length;i++){
        var row='<tr>';
        for(const keys in res.data[i]){
            row+="<td>";
            if(res.data[i][keys])
                row+=`${res.data[i][keys]}`;
            row+="</td>";
        }
        // console.log("\n");
        row+="</tr>"
        tbl.innerHTML+=row;
    }
    // console.log(temp);
})
