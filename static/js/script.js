console.log('%cCopyright © 2024 kaitoven.net',
    'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;'
);
console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function handlePress(event) {
    this.classList.add('pressed');
}

function handleRelease(event) {
    this.classList.remove('pressed');
}

function handleCancel(event) {
    this.classList.remove('pressed');
}

var buttons = document.querySelectorAll('.projectItem');
buttons.forEach(function (button) {
    button.addEventListener('mousedown', handlePress);
    button.addEventListener('mouseup', handleRelease);
    button.addEventListener('mouseleave', handleCancel);
    button.addEventListener('touchstart', handlePress);
    button.addEventListener('touchend', handleRelease);
    button.addEventListener('touchcancel', handleCancel);
});

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
    pop();
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function typeText(element, svgHTML, text, speed = 50, callback) {
    element.innerHTML = svgHTML; // 插入图标
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function startTypingLoop() {
    const el1 = document.getElementById('typing1');
    const el2 = document.getElementById('typing2');

    el1.innerHTML = '';
    el2.innerHTML = '';

    const svg1 = `<svg t="1749744914839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5382" width="20" height="20"><path d="M742.685963 519.138584c54.991452-52.826136 89.416496-126.906342 89.416496-209.002105 0-159.975505-130.144082-290.119587-290.119587-290.119587s-290.119587 130.144082-290.119587 290.119587c0 78.229712 31.262004 149.194974 81.775468 201.427592C164.091242 582.142523 51.582819 745.774301 51.582819 926.148391c0 18.841114 15.273868 34.131355 34.131355 34.131355 18.841114 0 34.131355-15.291265 34.131355-34.131355 0-159.309332 103.913675-303.619042 258.616082-359.082238 5.377474-1.928932 9.850345-5.166673 13.467733-9.099239 43.848671 26.650987 95.096868 42.289152 150.053528 42.289152 49.266054 0 95.655594-12.421914 136.334062-34.177404 0.707105 0.308015 1.336438 0.722454 2.074242 0.98749C835.076186 622.530372 939.007257 766.840082 939.007257 926.148391c0 18.841114 15.273868 34.131355 34.131355 34.131355 18.841114 0 34.131355-15.291265 34.131355-34.131355C1007.269967 752.025679 902.466016 593.439824 742.685963 519.138584zM320.127018 310.136479c0-122.327046 99.520621-221.855854 221.855854-221.855854s221.855854 99.528807 221.855854 221.855854-99.520621 221.855854-221.855854 221.855854S320.127018 432.464549 320.127018 310.136479z" fill="#2d10f1" p-id="5383"></path></svg>`;
    const svg2 = `<svg t="1749739706855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13899" width="18" height="18"><path d="M877.09 178.95C664.85 5.16 359.5 5.16 147.27 178.95 55.71 254.76 1.9 366.83 0 485.68a382.48 382.48 0 0 0 27.56 141.91 424.256 424.256 0 0 0 78.83 125.01 46.573 46.573 0 0 1 13.55 44.46L59.41 975.39l168.55-103.32a45.4 45.4 0 0 1 21.84-5.59 46.52 46.52 0 0 1 19.28 4.24 553.574 553.574 0 0 0 117.19 38.88 599.506 599.506 0 0 0 125.71 13.22c133.28 1.58 262.7-44.68 364.8-130.37 169.41-135.82 196.63-383.26 60.81-552.66a393.347 393.347 0 0 0-60.81-60.81l0.31-0.03zM829.23 737.1A482.269 482.269 0 0 1 512.3 849.59 526.89 526.89 0 0 1 401.86 838a481.43 481.43 0 0 1-102.1-33.9 119.058 119.058 0 0 0-85.53-5.21h-6.7l-15.18 9.31c7.1-38.73-5.29-78.47-33.15-106.3a349.401 349.401 0 0 1-63.6-101.36c-14.7-36.52-22.3-75.5-22.4-114.86a332.77 332.77 0 0 1 121.99-251.42c184.72-150.04 449.33-150.04 634.05 0 138.86 109.46 162.69 310.76 53.23 449.61a320.712 320.712 0 0 1-53.24 53.23z" fill="#ee107f" p-id="13900"></path><path d="M306.04 429.991c-35.54-0.14-64.46 28.56-64.6 64.09-0.14 35.54 28.55 64.46 64.09 64.6 17.18 0.07 33.68-6.74 45.81-18.9 25.12-25.1 25.14-65.81 0.05-90.93a64.327 64.327 0 0 0-45.35-18.86z m214.73 0a64.249 64.249 0 0 0-45.44 18.62c-24.87 25.26-24.87 65.81 0 91.07 24.83 25.06 65.28 25.24 90.34 0.41 0.14-0.13 0.27-0.27 0.41-0.41 25.12-25.1 25.14-65.81 0.05-90.93a64.292 64.292 0 0 0-45.35-18.86v0.1z m214.73 0c-35.61-0.31-64.73 28.31-65.04 63.92-0.31 35.61 28.31 64.73 63.92 65.04 35.61 0.31 64.73-28.31 65.04-63.92v-0.79a64.93 64.93 0 0 0-18.62-45.54 64.169 64.169 0 0 0-45.3-18.62v-0.09z" fill="#ee107f" p-id="13901"></path></svg>`;

    typeText(el1, svg1, 'A computer science student at DIKU', 50, function () {
        typeText(el2, svg2, 'Code is thought made visible. Turning logic into vision. Where Java breathes and pixels think.', 35, function () {
            setTimeout(startTypingLoop, 10000); // 停 10 秒后循环
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {


    var html = document.querySelector('html');
    var themeState = getCookie("themeState") || "Light";
    var tanChiShe = document.getElementById("tanChiShe");



    function changeTheme(theme) {
        tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
        html.dataset.theme = theme;
        setCookie("themeState", theme, 365);
        themeState = theme;
    }


    var Checkbox = document.getElementById('myonoffswitch')
    Checkbox.addEventListener('change', function () {
        if (themeState == "Dark") {
            changeTheme("Light");
        } else if (themeState == "Light") {
            changeTheme("Dark");
        } else {
            changeTheme("Dark");
        }
    });



    if (themeState == "Dark") {
        Checkbox.checked = false;
    }

    changeTheme(themeState);


    
    var fpsElement = document.createElement('div');
    fpsElement.id = 'fps';
    fpsElement.style.zIndex = '10000';
    fpsElement.style.position = 'fixed';
    fpsElement.style.left = '0';
    document.body.insertBefore(fpsElement, document.body.firstChild);

        
    startTypingLoop();

    
});

var pageLoading = document.querySelector("#kaitoven-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 10);
});

