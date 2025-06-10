## Git Workflow Simulation
In order to simulate git workflow and collaboration
* Fork -> Clone
* Create feature branch
* Commit
* Open PR (Pull Request)
* Review & Approve PR
* Merge 

### Main branch
Initial state
* /9-git-workflow-simulation/: example of git workflow simulation, branching, commit, pull request, merge (reference: [learn git branching](https://learngitbranching.js.org/))

### Feature branches
Improvement branch for each feature or new requirement
#### feat/change-header-text
* Change: Update the header text in `index.html`
```
<header>
  <h1>Welcome to the Awesome Git Workflow Demo!</h1>
</header>
```

#### feat/add-dark-mode
* Change: Add a dark mode toggle button in `index.html`, update `css/style.css` and `js/app.js`.
* index.html (add after the color button)
```
<button id="darkModeBtn">Toggle Dark Mode</button>
```
* css/style.css (add at the end)
```
body.dark-mode {
  background: #222;
  color: #fff;
}
header.dark-mode {
  background: #333;
}
```
* js/app.js (add at the end)
```
document.getElementById('darkModeBtn').onclick = function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
};
```

#### feat/button-style
* Change: Make buttons rounded and add a hover effect in `css/style.css`.
```
button {
  border-radius: 8px;
  transition: background 0.2s;
}
button:hover {
  background: #2196f3;
  color: #fff;
}
```

### Summary 
| Branch/PR Name              | File(s) Changed                  | Description                        |
|-----------------------------|----------------------------------|------------------------------------|
| feat/change-header-text  | index.html                       | Change header text                 |
| feat/add-dark-mode       | index.html, css/style.css, js/app.js | Add dark mode toggle           |
| feat/button-style        | css/style.css                    | Style buttons with rounded corners |
