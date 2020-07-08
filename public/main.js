let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach((item) => {
                console.log(array);
                const li = document.createElement("li");
                li.textContent = item.id;
                qqq.appendChild(li);
            });
            n += 1;
            console.log(n);
        }
    };
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            console.log(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}


getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const div = document.createElement('html')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert("HTML 记载失败")
            }
        }
    }
    request.send()
}


getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css')
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'demo.js');
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.head.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}


// getJS.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open = ('GET', 'a.js')
//     request.onload = () => {
//         console.log("aaaa")
//         const script = document.createElement('script')
//         script.innerHTML = request.response
//         document.body.appendChild.script
//     }
//     request.error = () => {
//         console.log("请求出错")
//     }
//     request.send()
// }