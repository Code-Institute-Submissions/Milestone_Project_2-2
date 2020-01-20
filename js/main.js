function getData(url, cb) {
   var xhr = new XMLHttpRequest();

   xhr.open("GET", "url");
   xhr.send();
    xhr.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   cb(JSON.parse(this.responseText));

        }

    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    
    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });
    return `<tr>${tableHeaders}</tr>`;
}
function generatePaginationButtons(next, prev) {
    if (next && prev) {
        
    }
}
function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementByID("data");
    
    getData(url,function(data) {
        var pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous)
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        
        data.forEach(function(item) {
            var dataRow = [];
           
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            
            tableRows.push(`<tr>${dataRows}</tr>`);
            
            });
          el.innerHTML = `<table>${tableheaders}${tableRows}</table>${pagination}`;
        });
        
}