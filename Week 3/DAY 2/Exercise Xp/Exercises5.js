// 1. Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);

// 2. Change "Pete" to "Richard"
const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul>
lists[1].removeChild(lists[1].children[1]);

// 4. Change the name of the first <li> of each <ul> to your name
for (const list of lists) {
    list.firstElementChild.textContent = "Anas";
}

// 5. Add class "student_list" to both <ul>s
for (const list of lists) {
    list.classList.add("student_list");
}

// 6. Add classes "university" and "attendance" to the first <ul>
lists[0].classList.add("university", "attendance");

// 7. Add a light blue background and padding to the <div>
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 8. Do not display the <li> that contains "Dan"
for (const list of lists) {
    for (const li of list.children) {
        if (li.textContent === "Dan") {
            li.style.display = "none";
        }
    }
}

// 9. Add a border to <li> with "Richard"
for (const list of lists) {
    for (const li of list.children) {
        if (li.textContent === "Richard") {
            li.style.border = "1px solid black";
        }
    }
}

// 10. Change font size of whole body
document.body.style.fontSize = "18px";

// Bonus: If background is light blue, alert "Hello x and y"
if (container.style.backgroundColor === "lightblue") {
    const names = lists[0].querySelectorAll("li");
    const name1 = names[0].textContent;
    const name2 = names[1].textContent;
    alert(`Hello ${name1} and ${name2}`);
}