let url = 'https://api.publicapis.org/entries';

let promise = fetch(url);
promise.then((data) =>{
    return data.json();
}).then((val)=>{
      console.log(val);
    
        let table = "";
        let no=1;
        for (key in val.entries) { 
            // console.log(val.entries[key])
        table += `<tr>
        <td>${no++}</td>
        <td>${val.entries[key].API}</td>
        <td>${val.entries[key].Description}</td>
        <td>${val.entries[key].Auth}</td>
        <td>${val.entries[key].HTTPS}</td>
        <td>${val.entries[key].Cors}</td>
        <td>${val.entries[key].Link}</td>
        <td>${val.entries[key].Category}</td>
        </tr>`;
        
        };
        tbody.innerHTML = table;
}).catch(err = () => console.log(err));


