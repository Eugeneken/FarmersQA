var blogContent = document.getElementsByClassName('blog_content');
var archive = []
for (var i = 0; i < blogContent.length; i++) {
    archive.push(blogContent[i].textContent.substring(0, 500))
}

function adjustBlogContent() {
    blogContent = document.getElementsByClassName('blog_content');
    for (var i = 0; i < blogContent.length; i++) {
        var checkImage = blogContent[i].querySelector('img')
    
        var textualContent = archive[i]
        if (screen.width < 580) {
            var res = textualContent.substring(0, 150)
        } else if (screen.width >= 580 && screen.width < 720) {
            var res = textualContent.substring(0, 280)
        } else {
            var res = textualContent.substring(0, 450)
        }
        if (checkImage == null) {
            blogContent[i].innerHTML = res + '...' + ' <a href="#" style="color:gray; text-decoration:none;">' + 'Read More' + '</a>';
        } else {
            blogContent[i].innerHTML = res + '...' + ' <a href="#" style="color:gray; text-decoration:none;">' + 'Read More' + '</a>';
            var imgbox = document.createElement("div")
            imgbox.classList.add("imgbox2")
            var img = document.createElement("img")
            img.src = checkImage.src
            imgbox.appendChild(img)
            blogContent[i].appendChild(imgbox)
        }
    }
}
window.addEventListener("resize", adjustBlogContent);
adjustBlogContent()


// for left sidebar
var sidebar = document.getElementsByClassName('mobileSidebar')[0];
var toggler = document.getElementsByClassName('sidebarToggler')[0];
var cross = document.getElementsByClassName('cross')[0];
toggler.addEventListener('click', function () {
    sidebar.classList.add('active')
})
cross.addEventListener('click', function () {
    sidebar.classList.remove('active')
})


// for right search sidebar
var searchSidebar = document.getElementsByClassName('searchSidebar')[0];
var back = document.getElementsByClassName('back')[0];
var searchIcon = document.getElementsByClassName('searchIcon')[0];
searchIcon.addEventListener('click', function () {
    searchSidebar.classList.add('active2')
})
back.addEventListener('click', function () {
    searchSidebar.classList.remove('active2')
})


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchMode, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

