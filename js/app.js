// Variable
let loading = document.querySelector(".loading")
let container = document.querySelector('.container');
let body = document.querySelector("body")
// Functions
document.getElementsByTagName('button')[0].onclick = () => {
    loading.classList.add("showLoader")
    body.classList.add("overflowH")
    event.preventDefault()
    document.querySelector('.container').textContent = "";
    let input = document.getElementsByTagName('input')[0].value;
    // replace &
    let replace = input.replace('&', " ");
    // Let's working with APi of the unsplash.com
    let fetch__data = fetch('https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query=' + input);
    fetch__data.then((result)=>{
      let data = result.json();
      data.then((res)=>{
        let data_s = res['results'];
        let len = data_s.length;
        let i = 0;
        while (len){
          // Create img for container
          let img = document.createElement('img');
          img.classList.add("imgS")
          img.src = data_s[i].urls.full;
          // Create "a" for
          let  a = document.createElement('a');
          let text_a = document.createTextNode("Download")
          let addText_To_a = a.appendChild(text_a)
          let downLoadLink = `${data_s[i].urls.full}.jpg`
          a.href= ""
          a.download = downLoadLink
          // Add new tags in container 
          container.append(img); 
          // container.appendChild(a)
          // Checking result
          console.log(a);
          console.log(data_s[i].urls.full)
          console.log(data_s[i].links.download)
          --len;
          ++i;
        }  
        // Hide loading
        if (i == 10) {
          body.classList.remove("overflowH")
          loading.classList.remove("showLoader")
          console.log(len)
        }
      });
    });
  }
    
 