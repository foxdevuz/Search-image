document.getElementsByTagName('button')[0].onclick = () => {
    event.preventDefault()
    document.querySelector('.container').textContent = "";
    let input = document.getElementsByTagName('input')[0].value;
    let rinput = input.replace('&', " ");
    let fdata = fetch('https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query=' + input);
    fdata.then((result)=>{
      let data = result.json();
      data.then((res)=>{
        let datas = res['results'];
        let len = datas.length;
        let i = 0;
        while (len){
          let img = document.createElement('img'),
            contan = document.querySelector('.container');
          img.src = datas[i].urls.full;
          img.classList.add("imgS")
          contan.append(img);

          console.log(datas[i].urls.full)
          --len;
          ++i;
        }  
      });
    });
  }
    
    