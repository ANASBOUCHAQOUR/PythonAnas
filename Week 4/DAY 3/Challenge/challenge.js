// Create Video class with constructor and watch method
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // Method to display watching information
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
    }
}

// Create first video instance
const video1 = new Video("JavaScript Tutorial", "John Doe", 3600);
console.log(video1.watch());
// Output: "John Doe watched all 3600 seconds of JavaScript Tutorial!"

// Create second video instance
const video2 = new Video("Python Basics", "Jane Smith", 1800);
console.log(video2.watch());
// Output: "Jane Smith watched all 1800 seconds of Python Basics!"

// Bonus: Array of video data
const videoData = [
    {
        title: "HTML Crash Course",
        uploader: "Alice Johnson",
        time: 2400
    },
    {
        title: "CSS Grid Layout",
        uploader: "Bob Wilson",
        time: 1800
    },
    {
        title: "React Fundamentals",
        uploader: "Carol Brown",
        time: 5400
    },
    {
        title: "Node.js Basics",
        uploader: "David Lee",
        time: 3600
    },
    {
        title: "MongoDB Tutorial",
        uploader: "Eva Martinez",
        time: 4200
    }
];

// Bonus: Create video instances from array data
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

// Display all videos using watch method
console.log("\nBonus: All Videos:");
for (const video of videos) {
    console.log(video.watch());
}
/* Output:
Bonus: All Videos:
Alice Johnson watched all 2400 seconds of HTML Crash Course!
Bob Wilson watched all 1800 seconds of CSS Grid Layout!
Carol Brown watched all 5400 seconds of React Fundamentals!
David Lee watched all 3600 seconds of Node.js Basics!
Eva Martinez watched all 4200 seconds of MongoDB Tutorial!
*/ 