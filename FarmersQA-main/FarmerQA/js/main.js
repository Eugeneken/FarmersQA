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
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

}

const container = document.querySelector('.container');
  const item = document.querySelector('.item');
  
  container.addEventListener('scroll', () => {
    item.style.transform = `translateX(-${container.scrollLeft}px)`;
  });

  const likeButton = document.getElementById('likeButton');
  const likeCount = document.getElementById('likeCount');
  
  let count = 0;
  
  likeButton.addEventListener('click', () => {
    count++;
    likeCount.textContent = `${count} Likes`;
    
    if (likeButton.classList.contains('active')) {
      likeButton.classList.remove('active');
    } else {
      likeButton.classList.add('active');
    }
  });

  const accountButton = document.getElementById('accountButton');
const settingsButton = document.getElementById('settingsButton');
const accountInformation = document.getElementById('accountInformation');
const settings = document.getElementById('settings');

accountButton.addEventListener('click', () => {
  accountInformation.classList.remove('hidden');
  settings.classList.add('hidden');
});

settingsButton.addEventListener('click', () => {
  accountInformation.classList.add('hidden');
  settings.classList.remove('hidden');
});

const messageBox = document.querySelector('.message-box');
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  messageBox.style.display = 'none';
});


function showMessage() {
  messageBox.style.display = 'block';
}
