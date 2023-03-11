//For generating a random quotes function.....

	let q = document.getElementById("quotes")
	let a = document.getElementById("author");

	let jData = "";
	const getQuotes = () => {
			let getData = Math.floor(Math.random() * jData.length + 1);
			q.innerText = `${jData[getData].text}`
			a.innerText = `${jData[getData].author}`
		};

// Event listener for button
	let btn = document.getElementById('btn')
	btn.addEventListener("click",getQuotes);


// Api fetching async function ...

	const getQuote = async () =>{
	const api = "https://type.fit/api/quotes";

	try{
		      let data = await fetch(api);
		      jData = await data.json();
		      getQuotes();

		 }catch(error){}

	};
getQuote();