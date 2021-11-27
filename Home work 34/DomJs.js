// Домашнє завдання

// Створити сторінку, що показує нумерований список пісень:




const ul = document.createElement("ul");
const div = document.getElementById("list");
div.append(ul);
let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

for (let i in playList) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.append(playList[i].author);
    p.append(" : ");
    p.append(playList[i].song);
    li.append(p);
    ul.append(li);
  }
