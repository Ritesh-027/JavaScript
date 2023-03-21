//Data validation of form!

valForm = () => {
  let name = document.getElementById("n").value;
  let email = document.getElementById("e").value;
  let number = document.getElementById("num").value;

  if (name == "") {
    alert("Name is required!");
    return false;
  }

  if (email == "") {
    alert("Email is required!");
    return false;
  }

  if (number == "") {
    alert("Number is required!");
    return false;
  }
  return true;
};

// Showing data in a table!

showData = () => {
  let data;
  if (localStorage.getItem("data") == null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("data"));
  }

  let html = "";
  data.forEach(function (element, index) {
    html += `<tr>
      <td>${index}</td>
      <td>${element.Name}</td>
      <td>${element.Email}</td>
    <td>${element.Number}</td>
    <td><button class="btn btn-primary" onclick="updData(${index});">Edit</button>
    <button class="btn btn-danger" onclick="del(${index});">Delete</button></td>
    </tr>`;
  });
  document.querySelector("#tdata").innerHTML = html;
};
//document.onload = showData();

//Adding data to the localStorage.

addData = () => {
  if (valForm() == true) {
    let name = document.getElementById("n").value;
    let email = document.getElementById("e").value;
    let number = document.getElementById("num").value;

    let data;
    if (localStorage.getItem("data") == null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }


    if (data.some((v) => {return v.Email == email;})){

      alert("E-mail ID is exist!");
    
    }else {

        data.push({
        Name: name,
        Email: email,
        Number: number,

      });
    }
    
    let a = localStorage.setItem("data", JSON.stringify(data));
    document.getElementById("n").value = "";
    document.getElementById("e").value = "";
    document.getElementById("num").value = "";
    showData();
  }
};

// Deleting data

del = (index) => {
  let data;
  if (localStorage.getItem("data") == null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("data"));
  }

  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
    showData();
    document.getElementById("n").value = "";
    document.getElementById("e").value = "";
    document.getElementById("num").value = "";
};

// Updating data

updData = (index) => {
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  let data;
  if (localStorage.getItem("data") == null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("data"));
  }

  document.getElementById("n").value = data[index].Name;
  document.getElementById("e").value = data[index].Email;
  document.getElementById("num").value = data[index].Number;

  document.querySelector("#update").onclick = () => {
    data[index].Name = document.getElementById("n").value;
    data[index].Email = document.getElementById("e").value;
    data[index].Number = document.getElementById("num").value;

    localStorage.setItem("data", JSON.stringify(data));
    showData();
    document.getElementById("n").value = "";
    document.getElementById("e").value = "";
    document.getElementById("num").value = "";

    document.getElementById("submit").style.display = "block";
    document.getElementById("update").style.display = "none";
  };
};
