//Fetching API - Kontest

let url = "https://kontests.net/api/v1/all";

//promises

let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contest) => {
    console.log(contest);

    let ihtml = "";
    for (item in contest) {
      console.log(contest[item]);
      ihtml += `
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="https://picsum.photos/160/100" class="card-img-top" alt="Cards"/>
          <div class="card-body">
            <p>Status : ${contest[item].status} & Site : ${contest[item].site}</p>
            <h5 class="card-title">${contest[item].name}</h5>
            <p>Start at: ${contest[item].start_time}</p>
            <p>Ends at: ${contest[item].end_time}</p>
            <a href="${contest[item].url}" class="btn btn-primary">Visit contest</a>
          </div>
        </div>
      `;
      }
    cardContainer.innerHTML = ihtml;
  });
