const section3 = document.getElementById("speakers");
const hambugermenu = document.querySelector(".hambuger");
const menu = document.querySelector(".navbar-list1");
console.log(section3);

hambugermenu.addEventListener("click", () => {
  menu.classList.add("menuvisible");
});

const icon = `<i class="fa-solid fa-x"></i>`;
const li = document.createElement("li");
li.innerHTML = icon;
menu.append(li);

const closemenu = document.querySelector(".fa-x");

closemenu.addEventListener("click", () => {
  menu.classList.remove("menuvisible");
});

const content = `  <div class="speakers"><h4>Feature Speakers</h4></div>
    <div class="flex-container">
      <div class="speakeritems">
        <img src="./images/speakers/speaker_01.png" alt="" class="img" />
        <div class="itemsA itemA-1">
          <h5>Yochai Benkler</h5>
          <span
            >Berkman Professor of Entrepreneurial Legal Studies at Harvard Law
            School</span
          >
          <p>
            Benkler studies commons-based peer production, and published his
            seminal book, The Wealth of Networks in 2006
          </p>
        </div>
      </div>
      <div class="speakeritems">
        <img src="./images/speakers/speaker_02.png" alt="" class="img" />
        <div class="itemsA ItemA-2">
          <h5>SohYeong Noh</h5>
          <span
            >Director of Art Centre Nabi and a board member of CC Korea</span
          >
          <p>
            As the main venue for new media art production in Korea, Nabi
            promotes cross-disciplinary collaboration and understanding among
            science technology, humanities, and the arts.
          </p>
        </div>
      </div>

      <div class="speakeritems">
        <img src="./images/speakers/speaker_03.png" alt="" class="img" />
        <div class="itemsA itemA-3">
          <h5>Lila tretikov</h5>
          <span>Executive Director of the Wikimedia Foundation</span>
          <p>
            Lila Tretikov is the Executive of the Wikimedia Foundation, the
            nonprofit organization that operates Wikipedia. Wikipedia is freely
            available in 290 languag-es and used by nearly half a billion people
            around the world every month.
          </p>
        </div>
      </div>
      <div class="speakeritems">
        <img src="./images/speakers/speaker_04.png" alt="" class="img" />
        <div class="itemsA itemA-4">
          <h5>Kilnam Chon</h5>
          <span></span>
          <p>
            Kilnam Chon helped bring the internet to Asia and is an outspoken
            advocate for the open web and digital com-mons. In 2012. he was
            inducted into the inaugural class of the Internet Society’s (ISOC)
            Internet Hall of Fame
          </p>
        </div>
      </div>

      <div class="speakeritems">
        <img src="./images/speakers/speaker_05.png" alt="" class="img" />
        <div class="itemsA itemA-5">
          <h5>Julia Leda</h5>
          <span>President of Young Pirates of Europe</span>
          <p>
            European ingetration, political democracy and participation of youth
            through online as her major condern, Reda’s report outlining
            potential changes to EU copyright law was approved by the Parliament
            in July
          </p>
        </div>
      </div>
      <div class="speakeritems">
        <img src="./images/speakers/speaker_06.png" alt="" class="img" />
        <div class="itemsA itemA-6">
          <h5>Ryan Merkley</h5>
          <span
            >CEO of Creativve Commons, ex COO of the Mozilla Foundation</span
          >
          <p>
            Ryan had been leading open-source projects at the Mozilla Foundation
            such as the open-source move-ment
          </p>
        </div>
      </div>
    </div>
`;

section3.innerHTML = content;
